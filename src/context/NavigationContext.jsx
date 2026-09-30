import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext(null);

// Parse current window hash into a route object
const parseHash = () => {
  const hash = window.location.hash || '#/';
  const cleanHash = hash.replace(/^#\/?/, ''); // e.g. "plant/plant-1" or "catalog" or "admin"
  const [routePart, queryPart] = cleanHash.split('?');
  const segments = routePart ? routePart.split('/') : [];
  
  const queryParams = new URLSearchParams(queryPart || '');
  const categoryParam = queryParams.get('category') || '';
  const searchParam = queryParams.get('search') || '';

  if (segments[0] === 'plant' && segments[1]) {
    return {
      page: 'plant',
      plantId: decodeURIComponent(segments[1]),
      category: '',
      search: ''
    };
  }

  if (segments[0] === 'catalog') {
    return {
      page: 'catalog',
      plantId: null,
      category: categoryParam,
      search: searchParam
    };
  }

  if (segments[0] === 'about') {
    return { page: 'about', plantId: null };
  }

  if (segments[0] === 'services') {
    return { page: 'services', plantId: null };
  }

  if (segments[0] === 'contact') {
    return { page: 'contact', plantId: null };
  }

  if (segments[0] === 'admin') {
    return { page: 'admin', plantId: null };
  }

  // Default to home
  return { page: 'home', plantId: null, category: '', search: '' };
};

export const NavigationProvider = ({ children }) => {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, params = {}) => {
    let newHash = '#/';

    if (page === 'plant' && params.id) {
      newHash = `#/plant/${encodeURIComponent(params.id)}`;
    } else if (page === 'catalog') {
      const q = new URLSearchParams();
      if (params.category) q.set('category', params.category);
      if (params.search) q.set('search', params.search);
      const queryString = q.toString();
      newHash = `#/catalog${queryString ? `?${queryString}` : ''}`;
    } else if (page === 'about') {
      newHash = '#/about';
    } else if (page === 'services') {
      newHash = '#/services';
    } else if (page === 'contact') {
      newHash = '#/contact';
    } else if (page === 'admin') {
      newHash = '#/admin';
    } else {
      newHash = '#/';
    }

    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider value={{ route, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

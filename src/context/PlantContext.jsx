import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PLANTS } from '../data/plants';

const PlantContext = createContext(null);

const STORAGE_KEY = 'flowering_pot_plants_v1';
const ADMIN_AUTH_KEY = 'flowering_pot_admin_auth';
const ADMIN_PIN_KEY = 'flowering_pot_admin_pin';
const DEFAULT_PIN = '1234';

export const PlantProvider = ({ children }) => {
  const [plants, setPlants] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading plants from localStorage:', e);
    }
    return INITIAL_PLANTS;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [adminPin, setAdminPin] = useState(() => {
    try {
      return localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
    } catch {
      return DEFAULT_PIN;
    }
  });

  // Save plants to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
    } catch (e) {
      console.error('Error persisting plants to localStorage:', e);
    }
  }, [plants]);

  // Auth methods
  const loginAdmin = (inputPin) => {
    if (inputPin === adminPin) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const updateAdminPin = (newPin) => {
    setAdminPin(newPin);
    localStorage.setItem(ADMIN_PIN_KEY, newPin);
  };

  // Plant CRUD methods
  const addPlant = (plantData) => {
    const newPlant = {
      ...plantData,
      id: `plant-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      price: Number(plantData.price) || 0,
      availability: plantData.availability || 'Available',
      isFeatured: !!plantData.isFeatured,
      images: Array.isArray(plantData.images) && plantData.images.length > 0
        ? plantData.images
        : ['https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80'],
      size: plantData.size || 'Standard nursery pot',
      sunlight: plantData.sunlight || 'Bright indirect sunlight',
      watering: plantData.watering || 'Water when topsoil is dry',
      careInstructions: plantData.careInstructions || 'Keep in well-aerated soil and wipe leaves periodically.'
    };

    setPlants((prev) => [newPlant, ...prev]);
    return newPlant;
  };

  const updatePlant = (id, updatedFields) => {
    setPlants((prev) =>
      prev.map((plant) => {
        if (plant.id === id) {
          return {
            ...plant,
            ...updatedFields,
            price: updatedFields.price !== undefined ? Number(updatedFields.price) : plant.price
          };
        }
        return plant;
      })
    );
  };

  const deletePlant = (id) => {
    setPlants((prev) => prev.filter((plant) => plant.id !== id));
  };

  const toggleAvailability = (id) => {
    setPlants((prev) =>
      prev.map((plant) => {
        if (plant.id === id) {
          const nextState = plant.availability === 'Available' ? 'Currently Unavailable' : 'Available';
          return { ...plant, availability: nextState };
        }
        return plant;
      })
    );
  };

  const toggleFeatured = (id) => {
    setPlants((prev) =>
      prev.map((plant) => {
        if (plant.id === id) {
          return { ...plant, isFeatured: !plant.isFeatured };
        }
        return plant;
      })
    );
  };

  const resetToDefaults = () => {
    setPlants(INITIAL_PLANTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PLANTS));
  };

  const getPlantById = (id) => {
    return plants.find((p) => p.id === id || String(p.id) === String(id));
  };

  return (
    <PlantContext.Provider
      value={{
        plants,
        addPlant,
        updatePlant,
        deletePlant,
        toggleAvailability,
        toggleFeatured,
        resetToDefaults,
        getPlantById,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        adminPin,
        updateAdminPin
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};

export const usePlants = () => {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error('usePlants must be used within a PlantProvider');
  }
  return context;
};

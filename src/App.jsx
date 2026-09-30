import React, { useEffect } from 'react';
import { PlantProvider, usePlants } from './context/PlantContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { PlantDetailPage } from './pages/PlantDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

// Inner App Router to access navigation and plants context
const AppContent = () => {
  const { route } = useNavigation();
  const { getPlantById } = usePlants();

  // Dynamic SEO Page Title & Meta description updater
  useEffect(() => {
    switch (route.page) {
      case 'catalog':
        document.title = route.category 
          ? `${route.category} | Flowering Pot Nursery, R.K. Puram` 
          : 'Plants Catalogue | Flowering Pot Nursery, New Delhi';
        break;
      case 'plant': {
        const plant = getPlantById(route.plantId);
        document.title = plant 
          ? `${plant.name} (₹${plant.price}) | Flowering Pot Nursery` 
          : 'Plant Details | Flowering Pot Nursery';
        break;
      }
      case 'about':
        document.title = 'About Us & Founder Nikhil Kanojiya | Flowering Pot Nursery Delhi';
        break;
      case 'services':
        document.title = 'Balcony Gardening & Nursery Services | Flowering Pot New Delhi';
        break;
      case 'contact':
        document.title = 'Contact & Visit Nursery in Sector 5 RK Puram | Flowering Pot';
        break;
      case 'admin':
        document.title = 'Nursery Owner Portal | Flowering Pot';
        break;
      default:
        document.title = 'Flowering Pot | Local Plant Nursery in R.K. Puram, New Delhi';
        break;
    }
  }, [route, getPlantById]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] text-[#1F2E1E]">
      <Header />
      
      <main className="grow">
        {route.page === 'home' && <HomePage />}
        {route.page === 'catalog' && <CatalogPage />}
        {route.page === 'plant' && <PlantDetailPage plantId={route.plantId} />}
        {route.page === 'about' && <AboutPage />}
        {route.page === 'services' && <ServicesPage />}
        {route.page === 'contact' && <ContactPage />}
        {route.page === 'admin' && <AdminPage />}
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default function App() {
  return (
    <PlantProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </PlantProvider>
  );
}

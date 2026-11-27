import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const Industrial = lazy(() => import('../pages/Industrial'));
const Commercial = lazy(() => import('../pages/Commercial'));
const Residential = lazy(() => import('../pages/Residential'));
const Infrastructure = lazy(() => import('../pages/Infrastructure'));
const Institutional = lazy(() => import('../pages/Institutional'));
const Modular = lazy(() => import('../pages/Modular'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Quote = lazy(() => import('../pages/Quote'));
const Consultation = lazy(() => import('../pages/Consultation'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const ClientLogin = lazy(() => import('../pages/ClientLogin'));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/industrial" element={<Industrial />} />
        <Route path="services/commercial" element={<Commercial />} />
        <Route path="services/residential" element={<Residential />} />
        <Route path="services/infrastructure" element={<Infrastructure />} />
        <Route path="services/institutional" element={<Institutional />} />
        <Route path="services/modular" element={<Modular />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="quote" element={<Quote />} />
        <Route path="consultation" element={<Consultation />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="client-login" element={<ClientLogin />} />
        <Route path="client-dashboard" element={<ClientDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

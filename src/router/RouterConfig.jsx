import { createBrowserRouter } from 'react-router-dom';

// --- Import Layouts and Pages ---
// Assuming these components are defined elsewhere in the project structure (e.g., src/layouts, src/pages)
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Defines the main routing configuration for the application.
 * Uses createBrowserRouter for modern React Router setup.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // The errorElement handles 404 errors or other route loading issues
    errorElement: <NotFoundPage />, 
    children: [
      {
        index: true, // This makes HomePage the default component rendered at '/'
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
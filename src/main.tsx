import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { TeamPage } from '@/pages/TeamPage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { TravelOSPage } from '@/pages/TravelOSPage'
import { ContactPage } from '@/pages/ContactPage'
import { AdminPage } from '@/pages/AdminPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/team",
    element: <TeamPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/portfolio/:projectId",
    element: <ProjectDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/travel-os",
    element: <TravelOSPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </QueryClientProvider>
)
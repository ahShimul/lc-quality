import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';

/* ── Code-split page chunks ── */
const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);
const ServicesListPage = lazy(() =>
  import('./pages/ServicesListPage').then((m) => ({
    default: m.ServicesListPage,
  })),
);
const ServicePage = lazy(() =>
  import('./pages/services/ServicePage').then((m) => ({
    default: m.ServicePage,
  })),
);
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
);
const ProcessPage = lazy(() =>
  import('./pages/ProcessPage').then((m) => ({ default: m.ProcessPage })),
);
const ReviewsPage = lazy(() =>
  import('./pages/ReviewsPage').then((m) => ({ default: m.ReviewsPage })),
);
const AreasPage = lazy(() =>
  import('./pages/AreasPage').then((m) => ({ default: m.AreasPage })),
);

function PageLoader() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-bg'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin' />
        <span className='mono text-[11px] tracking-[0.14em] uppercase text-muted'>
          Loading…
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/services' element={<ServicesListPage />} />
            <Route path='/services/:slug' element={<ServicePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/process' element={<ProcessPage />} />
            <Route path='/reviews' element={<ReviewsPage />} />
            <Route path='/areas' element={<AreasPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

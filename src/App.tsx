import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Studio } from 'sanity';
import { PortfolioProvider } from './context/PortfolioContext';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Experience } from './pages/Experience';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';
import sanityConfig from '../sanity.config';

function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Routes>
          {/* Embedded Sanity Studio - renders full-screen standalone */}
          <Route path="/studio/*" element={<Studio config={sanityConfig} />} />

          {/* Main Portfolio Shell */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="experience" element={<Experience />} />
            <Route path="services" element={<Services />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;

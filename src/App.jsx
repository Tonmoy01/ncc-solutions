import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ContactFormPage from './pages/contactUs/ContactFormPage';
import ContactInfoPage from './pages/contactUs/ContactInfoPage';
import AgencyPage from './pages/about/AgencyPage';
import FaqPage from './pages/faqs/FaqPage';
import ListOfServicesPage from './pages/listOfServices/ListOfServicesPage';
import CaseStudiesPage from './pages/caseStudies/CaseStudiesPage';
import MissionStatementPage from './pages/missionStatement/MissionStatementPage';
import JobListingpage from './pages/jobListing/JobListingpage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/agency' element={<AgencyPage />} />
        <Route path='/mission' element={<MissionStatementPage />} />
        <Route path='/list-services' element={<ListOfServicesPage />} />
        <Route path='/case-studies' element={<CaseStudiesPage />} />
        <Route path='/job-listings' element={<JobListingpage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/contact-form' element={<ContactFormPage />} />
        <Route path='/contact-info' element={<ContactInfoPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

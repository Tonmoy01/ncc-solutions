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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/agency' element={<AgencyPage />} />
        <Route path='/contact-form' element={<ContactFormPage />} />
        <Route path='/contact-info' element={<ContactInfoPage />} />
        <Route path='/faq' element={<FaqPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

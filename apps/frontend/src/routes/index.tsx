import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import OurWork from '../pages/our-work';
import CategoryPage from '../pages/our-work/CategoryPage';
import Events from '../pages/Events';
import AboutUs from '../pages/AboutUs';
import JoinUs from '../pages/JoinUs';
import { ContactUs } from '../pages/ContactUs';
import PrivacyPolicy from '../pages/footer/PrivacyPolicy';
import TermsOfUse from '../pages/footer/TermsOfUse';
import Constitution from '../pages/footer/Constitution';
import Gallery from '../pages/footer/Gallery';
import Donate from '../pages/footer/Donate';
import Speeches from '../pages/footer/Speeches';
import PressReleases from '../pages/footer/PressReleases';
import Articles from '../pages/footer/Articles';
import SocialMedia from '../pages/footer/SocialMedia';
import PartnerWithUs from '../pages/footer/PartnerWithUs';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Our Work Routes */}
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/our-work/:category" element={<CategoryPage />} />
      
      {/* Events Routes */}
      <Route path="/events" element={<Events />} />
      <Route path="/events/:type" element={<Events />} />
      
      {/* About Us Routes */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/about-us/:section" element={<AboutUs />} />
      
      {/* Join Us Routes */}
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/join-us/:action" element={<JoinUs />} />

      {/* Contact Us Route */}
      <Route path="/contact-us" element={<ContactUs />} />
      
      {/* Footer Routes */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/constitution" element={<Constitution />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/speeches" element={<Speeches />} />
      <Route path="/press-releases" element={<PressReleases />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/social-media" element={<SocialMedia />} />
      <Route path="/partner-with-us" element={<PartnerWithUs />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
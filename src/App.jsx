import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import ChallengeSection from './components/challenge';
import BannerSlider from './pages/landingPage';
import HotWheelsBanner from './pages/landingPage';
// import HeroSection from './pages/landingPage';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      {/* <Header /> */}

      {/* Main content area */}
      <main className="flex-grow">
        {/* Your page's main content here */}
        {/* Other content can go here */}
        <HotWheelsBanner />
        {/* <HeroSection /> */}
      </main>

      {/* Challenge Section just above the footer */}
      {/* <div className="mb-40">
        <ChallengeSection />
      </div> */}

      {/* Sticky footer at bottom */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
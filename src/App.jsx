import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import ChallengeSection from './components/challenge';
import HotWheelsBanner from './pages/landingPage';
import HotWheelsShowcase from './components/hero2';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <Header />
      <HotWheelsBanner/>
      {/* Main content area */}
      <main className="flex-grow">
        {/* Your page's main content here */}
        {/* Other content can go here */}
        {/* <HotWheelsBanner /> */}
        <HotWheelsShowcase />
        {/* <HeroSection /> */}
      </main>

      {/* Challenge Section just above the footer */}
        <ChallengeSection />
      {/* Sticky footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import ChallengeSection from './components/challenge';
import HotWheelsBanner from './pages/landingPage';
import HotWheelsShowcase from './components/hero2';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HotWheelsBanner/>
      <main className="flex-grow">
        <HotWheelsShowcase />
      </main>
        <ChallengeSection />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        {/* Your page's main content here */}
      </main>

      {/* Sticky footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;

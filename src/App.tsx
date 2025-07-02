import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 shadow">
        <h1 className="text-center text-2xl font-bold">API Playground</h1>
      </header>
      <main className="p-6">{/* your features will mount here */}</main>
    </div>
  );
};

export default App;

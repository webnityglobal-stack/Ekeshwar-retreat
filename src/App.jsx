import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f6ef]">
      <div className="text-center">
        <img
          src="/images/Ekeshwar-Logo.png"
          alt="Ekeshwar Retreat"
          className="w-[420px] mx-auto mb-8"
        />

        <h1 className="text-4xl font-semibold text-[#0b4d32]">
          Ekeshwar Retreat
        </h1>

        <p className="mt-3 text-gray-600">
          Luxury Living in Harmony with Nature
        </p>
      </div>
    </div>
  );
}

export default App;
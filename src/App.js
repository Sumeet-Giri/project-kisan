import React, { useState } from 'react';
import { FaStethoscope, FaRupeeSign, FaUniversity, FaMicrophone, FaCamera, FaVolumeUp } from 'react-icons/fa';

const tabs = [
  { key: 'diagnose', label: 'Diagnose', icon: <FaStethoscope /> },
  { key: 'market', label: 'Market', icon: <FaRupeeSign /> },
  { key: 'schemes', label: 'Schemes', icon: <FaUniversity /> },
];

function DiagnoseScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center tracking-wide mb-1">Diagnose Crop Disease</h2>
        <p className="text-green-200 text-center mb-4">Take a photo of your crop problem and get instant expert advice.</p>
        <div className="bg-green-800 rounded-xl h-40 flex items-center justify-center mb-4">
          <FaCamera className="text-4xl text-green-300" />
        </div>
        <button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-2 font-semibold flex items-center justify-center gap-2 transition">
          <FaCamera /> Take a Picture
        </button>
        {/* Example result area */}
        <div className="bg-white rounded-xl p-3 mt-4 shadow text-green-900 text-center">
        
          <button className="mt-2 flex items-center gap-2 text-green-800 hover:text-green-600 transition">
            <FaVolumeUp /> Play Advice
          </button>
        </div>
      </div>
    </div>
  );
}

function MarketRatesScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center mb-2">Market Prices</h2>
        <div className="text-green-200 text-center mb-4">Ask about today's prices in your language.</div>
        <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-xl py-2 px-4 w-full font-semibold transition">
          <FaMicrophone className="text-lg" />
          Tap and Speak
        </button>
        {/* Example result area */}
        <div className="bg-white rounded-xl p-3 mt-4 shadow text-green-900 text-center">
          <div className="font-semibold">Tomato: ₹1,200/quintal</div>
          <div className="text-green-700 mt-1">Trend: <span className="font-medium">+1% today</span></div>
          <button className="mt-2 flex items-center gap-2 text-green-800 hover:text-green-600 transition">
            <FaVolumeUp /> Play Summary
          </button>
        </div>
      </div>
    </div>
  );
}

function SchemesScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center mb-2">Government Schemes</h2>
        <div className="text-green-200 text-center mb-4">Ask about subsidies or schemes for your needs.</div>
        <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-xl py-2 px-4 w-full font-semibold transition">
          <FaMicrophone className="text-lg" />
          Tap and Speak
        </button>
        {/* Example result area */}
        <div className="bg-white rounded-xl p-3 mt-4 shadow text-green-900 text-center">
          <div className="font-bold text-lg mb-1">Pradhan Mantri Krishi Sinchai Yojana</div>
          <div className="text-green-700 mb-2 text-sm">
            Subsidy for drip irrigation. <br />
            <span className="font-medium">Eligibility:</span> Small/marginal farmers.
          </div>
          <a href="https://pmksy.gov.in/" target="_blank" rel="noopener noreferrer"
            className="bg-green-700 text-white rounded-xl px-4 py-2 font-semibold hover:bg-green-800 transition inline-block">
            View Details
          </a>
          <button className="mt-2 flex items-center gap-2 text-green-800 hover:text-green-600 transition">
            <FaVolumeUp /> Play Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('diagnose');

  return (
    <div className="min-h-screen flex flex-col bg-green-900 pb-16">
      <header className="w-full py-4">
        <h1 className="text-2xl font-bold text-white text-center tracking-wide">🌱 Project Kisan</h1>
        <p className="text-green-200 text-center text-sm mt-1">Your AI-powered farming assistant</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2">
        {tab === 'diagnose' && <DiagnoseScreen />}
        {tab === 'market' && <MarketRatesScreen />}
        {tab === 'schemes' && <SchemesScreen />}
      </main>
      <nav className="w-full bg-green-800 rounded-t-xl shadow-lg flex justify-around py-2 fixed bottom-0 left-0">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`flex flex-col items-center text-white px-2 py-1 transition ${tab === t.key ? 'text-green-300' : 'text-white opacity-80'}`}
            onClick={() => setTab(t.key)}
          >
            <span className="text-xl">{t.icon}</span>
            <span className="text-xs">{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
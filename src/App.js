import React, { useState } from 'react';
import { FaStethoscope, FaRupeeSign, FaUniversity, FaMicrophone } from 'react-icons/fa';

const tabs = [
  { key: 'diagnose', label: 'Diagnose', icon: <FaStethoscope /> },
  { key: 'market', label: 'Market Rates', icon: <FaRupeeSign /> },
  { key: 'schemes', label: 'Schemes', icon: <FaUniversity /> },
];

function DiagnoseScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center tracking-wide">PROJECT KISAN</h2>
        <p className="text-green-200 text-center mt-1 mb-4">Diagnose</p>
        <div className="bg-green-800 rounded-xl h-40 flex items-center justify-center mb-4">
          {/* Placeholder for image */}
          <span className="text-green-300">[Image Area]</span>
        </div>
        <div className="bg-white rounded-xl p-3 mb-2 shadow text-green-900 text-center">
          <div className="font-semibold">Signs of spot disease detected</div>
          <div className="text-green-700 mt-1">Suggestion: <span className="font-medium">Use neem-based fungicide</span></div>
        </div>
        <button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white rounded-xl py-2 font-semibold transition">
          Take a Picture
        </button>
      </div>
    </div>
  );
}

function MarketRatesScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center mb-2">Market Rates</h2>
        <div className="text-green-200 text-center mb-4">What is the price of tomatoes today?</div>
        <button className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-xl py-2 px-4 w-full font-semibold transition">
          <FaMicrophone className="text-lg" />
          Tap and speak
        </button>
      </div>
    </div>
  );
}

function SchemesScreen() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-green-900 rounded-xl shadow-lg p-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-white text-center mb-2">Schemes</h2>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-xl p-3 shadow text-green-900 flex flex-col">
            <span className="font-semibold">Bengaluru</span>
            <span>₹1,200 per quintal, <span className="text-green-700 font-medium">+1% today</span></span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-green-900 flex flex-col">
            <span className="font-semibold">Mysuru</span>
            <span>₹1,200 per quintal, <span className="text-green-700 font-medium">+1%</span></span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow text-green-900 flex flex-col">
            <span className="font-semibold">Hubballi</span>
            <span>₹1,200 per quintal, <span className="text-green-700 font-medium">+1%</span></span>
          </div>
        </div>
        <div className="bg-green-800 rounded-xl p-4 mt-6 text-white shadow flex flex-col items-center">
          <div className="font-bold text-lg mb-1">Pradhan Mantri Krishi Sinchai Yojana</div>
          <div className="text-green-100 mb-3 text-center text-sm">
            A government scheme to improve irrigation and water use efficiency for farmers.
          </div>
          <button className="bg-white text-green-900 rounded-xl px-4 py-2 font-semibold hover:bg-green-200 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('diagnose');

  return (
    <div className="min-h-screen flex flex-col bg-green-900">
      <header className="w-full py-4">
        <h1 className="text-2xl font-bold text-white text-center tracking-wide">🌱 Project Kisan</h1>
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
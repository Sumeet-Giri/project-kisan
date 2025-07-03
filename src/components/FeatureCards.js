import React from 'react';
import { FaCamera, FaChartLine, FaFileAlt, FaMicrophone } from 'react-icons/fa';

export default function FeatureCards() {
  return (
    <div className="container py-4" style={{ backgroundColor: '#f3efe3' }}>
      <div className="row g-4 mx-3" style={{ backgroundColor: '#f3efe3' }}>
        <div className="col-12 col-md-6">
          <div className="card h-100 d-flex align-items-center justify-content-center p-4" style={{ minHeight: '200px', borderColor: '#d6d6b1', background: '#f9f6ee' }}>
          <FaCamera size={48} color="#4b7b3e" className="mb-3" />

          <div className="fw-bold">Diagnose Crop Disease</div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card h-100 d-flex align-items-center justify-content-center p-4" style={{ minHeight: '200px', borderColor: '#d6d6b1', background: '#f9f6ee' }}>
          <FaChartLine size={48} color="#4b7b3e" className="mb-3" />
          <div className="fw-bold fs-5">Check Market Prices</div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card h-100 d-flex align-items-center justify-content-center p-4" style={{ minHeight: '200px', borderColor: '#d6d6b1', background: '#f9f6ee' }}>
          <FaFileAlt size={48} color="#4b7b3e" className="mb-3" />

          <div className="fw-bold">Explore Govt Schemes</div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card h-100 d-flex align-items-center justify-content-center p-4" style={{ minHeight: '200px', borderColor: '#d6d6b1', background: '#f9f6ee' }}>
          <FaMicrophone size={48} color="#4b7b3e" className="mb-3" />
          <div className="fw-bold fs-5">Ask a Question</div>
        </div>
      </div>
    </div>
    </div >
  );
}
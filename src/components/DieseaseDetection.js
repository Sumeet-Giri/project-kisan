import React, { useState } from 'react';
import { Upload, Camera, Leaf, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function PlantDiseaseAnalyzer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setAnalysis(null);
    }
  };

  const mockAnalysis = () => {
    const diseases = [
      {
        name: "Leaf Spot Disease",
        confidence: 87,
        severity: "Moderate",
        description: "Fungal infection causing circular spots on leaves",
        symptoms: ["Dark spots with yellow halos", "Leaf yellowing", "Premature leaf drop"],
        treatment: ["Remove affected leaves", "Apply fungicide spray", "Improve air circulation"],
        prevention: ["Avoid overhead watering", "Ensure proper spacing", "Regular inspection"]
      }
    ];
    
    return diseases[0];
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const result = mockAnalysis();
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSeverityClass = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'mild': return 'text-success bg-success';
      case 'moderate': return 'text-warning bg-warning';
      case 'severe': return 'text-danger bg-danger';
      default: return 'text-secondary bg-secondary';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'mild': return <CheckCircle size={16} />;
      case 'moderate': return <Info size={16} />;
      case 'severe': return <AlertTriangle size={16} />;
      default: return <Info size={16} />;
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #dcfce7 100%)'}}>
        <div className="container-fluid py-4">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Leaf className="text-success me-3" size={40} />
              <h1 className="display-5 fw-bold text-dark mb-0">Plant Disease Analyzer</h1>
            </div>
            <p className="lead text-muted">Upload an image of your plant to detect diseases and get treatment recommendations</p>
          </div>

          {/* Main Content */}
          <div className="row g-4">
            {/* Left Side - Upload Section */}
            <div className="col-6">
              <div className="card shadow-lg h-100">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center mb-4">
                    <Camera className="text-success me-2" size={24} />
                    Upload Plant Image
                  </h5>
                  
                  {/* Upload Area */}
                  <div className="border border-2 border-success border-opacity-50 rounded-3 p-4 text-center mb-3" 
                       style={{borderStyle: 'dashed', cursor: 'pointer'}}
                       onMouseEnter={(e) => e.target.style.borderColor = '#198754'}
                       onMouseLeave={(e) => e.target.style.borderColor = 'rgba(25, 135, 84, 0.5)'}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="d-none"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="w-100" style={{cursor: 'pointer'}}>
                      <Upload className="text-success mb-3" size={48} />
                      <p className="h6 text-muted mb-2">Click to upload an image</p>
                      <small className="text-muted">Supports JPG, PNG, WebP formats</small>
                    </label>
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mb-3">
                      <img
                        src={imagePreview}
                        alt="Selected plant"
                        className="img-fluid rounded-3"
                        style={{height: '200px', width: '100%', objectFit: 'cover'}}
                      />
                    </div>
                  )}

                  {/* Analyze Button */}
                  <button
                    onClick={analyzeImage}
                    disabled={!selectedImage || isAnalyzing}
                    className="btn btn-success btn-lg w-100 d-flex align-items-center justify-content-center"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Leaf className="me-2" size={20} />
                        Analyze Plant
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Analysis Results */}
            <div className="col-6">
              <div className="card shadow-lg h-100">
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center mb-4">
                    <AlertTriangle className="text-warning me-2" size={24} />
                    Disease Analysis
                  </h5>

                  {!analysis && !isAnalyzing && (
                    <div className="text-center py-5">
                      <Leaf className="text-muted mb-3" size={48} />
                      <p className="text-muted">Upload and analyze an image to see results</p>
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="text-center py-5">
                      <div className="spinner-border text-success mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="text-muted">Analyzing plant image...</p>
                    </div>
                  )}

                  {analysis && (
                    <div style={{maxHeight: '500px', overflowY: 'auto'}}>
                      {/* Disease Detection */}
                      <div className="bg-light rounded-3 p-3 mb-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="mb-0 fw-bold">{analysis.name}</h6>
                          <span className={`badge d-flex align-items-center ${getSeverityClass(analysis.severity)} bg-opacity-25 border`}>
                            {getSeverityIcon(analysis.severity)}
                            <span className="ms-1">{analysis.severity}</span>
                          </span>
                        </div>
                        <p className="text-muted small mb-3">{analysis.description}</p>
                        <div className="bg-white rounded-2 p-3">
                          <div className="d-flex justify-content-between mb-2">
                            <small className="text-muted">Confidence Level</small>
                            <small className="fw-bold">{analysis.confidence}%</small>
                          </div>
                          <div className="progress" style={{height: '8px'}}>
                            <div 
                              className="progress-bar bg-success" 
                              role="progressbar" 
                              style={{width: `${analysis.confidence}%`}}
                              aria-valuenow={analysis.confidence} 
                              aria-valuemin="0" 
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Symptoms */}
                      <div className="alert alert-danger alert-dismissible fade show mb-3" role="alert">
                        <h6 className="alert-heading d-flex align-items-center">
                          <AlertTriangle size={16} className="me-2" />
                          Symptoms
                        </h6>
                        <ul className="list-unstyled mb-0">
                          {analysis.symptoms.map((symptom, index) => (
                            <li key={index} className="d-flex align-items-center small mb-1">
                              <span className="badge bg-danger rounded-pill me-2" style={{width: '6px', height: '6px', padding: '0'}}></span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Treatment */}
                      <div className="alert alert-primary alert-dismissible fade show mb-3" role="alert">
                        <h6 className="alert-heading d-flex align-items-center">
                          <Info size={16} className="me-2" />
                          Treatment
                        </h6>
                        <ul className="list-unstyled mb-0">
                          {analysis.treatment.map((treatment, index) => (
                            <li key={index} className="d-flex align-items-center small mb-1">
                              <span className="badge bg-primary rounded-pill me-2" style={{width: '6px', height: '6px', padding: '0'}}></span>
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prevention */}
                      <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
                        <h6 className="alert-heading d-flex align-items-center">
                          <CheckCircle size={16} className="me-2" />
                          Prevention
                        </h6>
                        <ul className="list-unstyled mb-0">
                          {analysis.prevention.map((prevention, index) => (
                            <li key={index} className="d-flex align-items-center small mb-1">
                              <span className="badge bg-success rounded-pill me-2" style={{width: '6px', height: '6px', padding: '0'}}></span>
                              {prevention}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
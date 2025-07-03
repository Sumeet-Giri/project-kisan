import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaComments, FaHistory, FaCog } from "react-icons/fa";

export default function SideBar() {
  return (
    
      <div
        className="d-flex flex-column bg-#63783F text-white h-100 p-3"
        style={{ width: "250px", backgroundColor: "#63783F" }}
      >
        {/* Logo and App Name */}
        <div className="mb-5 d-flex align-items-center">
          <span className="fs-2 me-2">
            {/* You can use an SVG or icon here */}
            <FaHome />
          </span>
          <div>
            <div className="fw-bold fs-4">Project</div>
            <div className="fw-bold fs-4">Kisan</div>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="flex-grow-1">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a
                className="nav-link active text-white d-flex align-items-center"
                href="#"
              >
                <FaHome className="me-2" /> Home
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                <FaComments className="me-2" /> Chat
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                <FaHistory className="me-2" /> History
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                <FaCog className="me-2" /> Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

  );
}

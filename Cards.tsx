import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

interface Project {
  id: number;
  name: string;
  services: number,
  status: string
  
  // Add any other properties from the backend response
}

interface CardsProps {
  projects: Project[];
  sidebarOpen: boolean;
}

const Cards: React.FC<CardsProps> = ({ projects, sidebarOpen }) => {
  return (
    <div
      className={`container mt-5 ${sidebarOpen ? 'ml-sm-5' : ''}`} // Adjust class based on sidebarOpen
    >
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.services}</p>
                <a href="#" className="btn btn-secondary">{project.status}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
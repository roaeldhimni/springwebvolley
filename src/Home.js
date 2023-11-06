import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Espace Gestion</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Gestion Filières</h5>
              <p className="card-text">Cliquez sur le bouton ci-dessous pour gérer les filières.</p>
              <Link to="/filiere" className="btn btn-primary">Gérer les filières</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Gestion Rôles</h5>
              <p className="card-text">Cliquez sur le bouton ci-dessous pour gérer les rôles.</p>
              <Link to="/role" className="btn btn-primary">Gérer les rôles</Link>
            </div>
          </div>
        </div>

      </div>
      <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Gestion Etudiants</h5>
              <p className="card-text">Cliquez sur le bouton ci-dessous pour gérer les étudiants.</p>
              <Link to="/students" className="btn btn-primary">Gérer les étudiants</Link>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './stylesupdate.css';

function FiliereUpdate() {
  const { id } = useParams();
  const [filiere, setFiliere] = useState({});
  const [updatedFiliere, setUpdatedFiliere] = useState({ code: '', libelle: '' });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/filieres/${id}`)
      .then(response => {
        setFiliere(response.data);
        setUpdatedFiliere({ code: response.data.code, libelle: response.data.libelle });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/v1/filieres/${id}`, updatedFiliere)
      .then(response => {
        // Mise à jour réussie
        console.log('Filière mise à jour avec succès');
      })
      .catch(error => {
        console.error('Error updating filiere: ', error);
      });
  };

  return (
    <div className="update-container d-flex justify-content-center align-items-center">
      <div>
        <h2 className="text-center">Modifier la filière :</h2>
        <div className="form-container">
          <input
            type="text"
            placeholder="Code"
            value={updatedFiliere.code}
            onChange={e => setUpdatedFiliere({ ...updatedFiliere, code: e.target.value })}
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Libelle"
            value={updatedFiliere.libelle}
            onChange={e => setUpdatedFiliere({ ...updatedFiliere, libelle: e.target.value })}
            className="form-control mb-2"
          />
          <button onClick={handleUpdate} className="btn btn-primary">Mettre à jour</button>
        </div>
      </div>
    </div>
  );
}

export default FiliereUpdate;

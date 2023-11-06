import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './stylesupdate.css';

function RoleUpdate() {
  const { id } = useParams();
  const [role, setRole] = useState({});
  const [updatedRole, setUpdatedRole] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/roles/${id}`)
      .then(response => {
        setRole(response.data);
        setUpdatedRole({ name: response.data.name, description: response.data.description });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/v1/roles/${id}`, updatedRole)
      .then(response => {
        // Mise à jour réussie
        console.log('Rôle mis à jour avec succès');
      })
      .catch(error => {
        console.error('Error updating role: ', error);
      });
  };

  return (
    <div className="update-container d-flex justify-content-center align-items-center">
      <div>
        <h2 className="text-center">Modifier le rôle :</h2>
        <div className="form-container">
          <input
            type="text"
            placeholder="Name"
            value={updatedRole.name}
            onChange={e => setUpdatedRole({ ...updatedRole, name: e.target.value })}
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={updatedRole.description}
            onChange={e => setUpdatedRole({ ...updatedRole, description: e.target.value })}
            className="form-control mb-2"
          />
          <button onClick={handleUpdate} className="btn btn-primary">Mettre à jour</button>
        </div>
      </div>
    </div>
  );
}

export default RoleUpdate;

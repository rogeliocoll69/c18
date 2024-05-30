"use client";


import React, { useState } from 'react';

const ShowListButton: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };

  
  const profesores = ["Juan Pérez", "María González", "Luis Rodríguez", "Ana Martínez", "Pedro Sánchez"];
  const representantes = ["Carlos López", "Laura Ruiz", "Miguel Fernández", "Sofía Díaz", "David Moreno"];
  const alumnos = ["Daniel García", "Elena Castro", "Mario Torres", "Isabel Gómez", "Diego Navarro"];

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {showList ? 'Ocultar lista' : 'Mostrar lista'}
      </button>
      {showList && (
        <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-black">Profesores:</h3>
          <div className="flex flex-wrap">
            {profesores.map((profesor, index) => (
              <div key={`profesor-${index}`} className="mr-4 mb-2 px-3 py-1 bg-gray-200 rounded text-black">{profesor}</div>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2 mt-4 text-black">Representantes:</h3>
          <div className="flex flex-wrap">
            {representantes.map((representante, index) => (
              <div key={`representante-${index}`} className="mr-4 mb-2 px-3 py-1 bg-gray-200 rounded text-black">{representante}</div>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2 mt-4 text-black">Alumnos:</h3>
          <div className="flex flex-wrap">
            {alumnos.map((alumno, index) => (
              <div key={`alumno-${index}`} className="mr-4 mb-2 px-3 py-1 bg-gray-200 rounded text-black">{alumno}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowListButton;








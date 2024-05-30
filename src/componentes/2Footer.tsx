import React from 'react';

const Footer2: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>Contáctanos: contacto@ejemplo.com | Teléfono: 123-456-7890</p>
        <p>Quienes Somos</p>
        <p>Sugerencias</p>
        <p>Redes Sociales</p>

      </div>
    </footer>
  );
};

export default Footer2;
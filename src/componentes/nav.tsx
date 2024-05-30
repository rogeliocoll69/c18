import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="#">
            <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Cursos</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Calificaciones</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Mensajes</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Perfil</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
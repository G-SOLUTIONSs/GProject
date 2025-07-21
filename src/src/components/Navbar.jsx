import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white to-gray-300 shadow-lg px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + texto */}
        <div className="flex items-center gap-3">
          <img src="./src/assets/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-red-700 font-bold text-xl">GSolutions</span>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#whatis" className="hover:text-red-500 transition">¿Qué es?</a>
          <a href="#pricing" className="hover:text-red-500 transition">Planes</a>
          <a href="#how" className="hover:text-red-500 transition">¿Cómo funciona?</a>
          <a href="#examples" className="hover:text-red-500 transition">Ejemplos</a>
          <a href="#faq" className="hover:text-red-500 transition">Preguntas</a>
        </nav>

        {/* Botón hamburguesa móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <nav className="md:hidden mt-2 px-6 flex flex-col gap-2 text-gray-700 font-medium">
          <a href="#whatis" className="hover:text-red-500">¿Qué es?</a>
          <a href="#pricing" className="hover:text-red-500">Planes</a>
          <a href="#how" className="hover:text-red-500">¿Cómo funciona?</a>
          <a href="#examples" className="hover:text-red-500">Ejemplos</a>
          <a href="#faq" className="hover:text-red-500">Preguntas</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

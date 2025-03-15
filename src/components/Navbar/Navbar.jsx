import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Ubicación", sectionId: "ubicacion" },
  { id: 2, title: "Fotos", sectionId: "fotos" },
  { id: 3, title: "Servicios", sectionId: "servicios" },
  { id: 4, title: "Precio", sectionId: "precio" },
  { id: 5, title: "Reserva", sectionId: "reserva" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Cierra el menú al seleccionar una opción
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-4 px-6 flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <img src="/BallenAmanecer.png" alt="Bird" className="w-6 h-6" />
          <h1 className="font-bold text-2xl">Depto Amanecer</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => scrollToSection(menu.sectionId)}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 left-0 w-full bg-white shadow-md py-4"
          >
            <ul className="flex flex-col items-center gap-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <button
                    onClick={() => scrollToSection(menu.sectionId)}
                    className="block py-2 px-6 text-lg hover:text-secondary"
                  >
                    {menu.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

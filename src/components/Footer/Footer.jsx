import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaHome } from "react-icons/fa"; // Importamos FaHome
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Cambiamos de 3 a 2 columnas */}
          {/* About Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Acerca de nosotros</h1>
            <p className="text-gray-600">
            Situado en pleno Puerto Madryn, a solo 5 cuadras del mar,
            nuestro departamento te invita a disfrutar de una experiencia única,
            donde la comodidad y la naturaleza se fusionan perfectamente.
            Desde aquí, podrás llegar a pie a muchos de los lugares más destacados
            del centro, la playa y la gastronomia de Madryn, mientras te relajas
            en un entorno tranquilo.  disfruta de la belleza del mar, la fauna
            autóctona y las actividades al aire libre que la ciudad tiene
            para ofrecer. Un lugar pensado para tu descanso y momentos inolvidables.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Contáctanos</h1>
            <p className="text-gray-600">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-green-500" />
                <a href="https://wa.me/+5492804599431" className="hover:text-primary duration-200">
                  +54 9 2804 599431
                </a>
              </li>

              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                Puerto Madryn, Chubut, Argentina
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Departamento Amanecer de Puerto Madryn.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

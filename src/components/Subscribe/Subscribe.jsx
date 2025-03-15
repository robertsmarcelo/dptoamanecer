import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import BgImage from "../../assets/bgwhite.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  const phoneNumber = "542804599431"; // Número de teléfono
  const whatsappMessage =
    "¡Hola! Quiero consultar por disponibilidad para alojamiento en las fechas...";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              Reserva tu estadía
            </h1>
            <p>Consulta por disponibilidad y más información</p>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn bg-green-500 text-white py-2 px-6 rounded-full inline-flex items-center gap-4 group hover:bg-green-600 transition duration-200"
            >
              Escribinos al WhatsApp
              <FaWhatsapp className="text-xl group-hover:animate-bounce" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;

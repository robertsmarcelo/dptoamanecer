import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import MapView from "../MapView/MapView"; // Importamos el mapa

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center pt-10 md:py-0 relative z-0">
          <div className="text-center md:text-left md:space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug pt-10"
            >
              Departamento en el Centro de{" "}
              <span className="text-secondary"> Puerto Madryn ♥</span>
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              {/* <button
                className="primary-btn w-1/2"
                onClick={() => {
                  const phoneNumber = "542945685055";
                  const message = encodeURIComponent(
                    "¡Hola! Quiero consultar por disponibilidad para alojamiento en las fechas..."
                  );
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

                  window.open(whatsappURL, "_blank");
                }}
              >
                Reservar
               
              </button> */}
            </motion.div>
          </div>
        </div>
        
        {/* Reemplazo de la imagen con el mapa */}
        <div className="flex justify-center items-center h-[380px] md:h-auto">
          <MapView /> {/* Mostramos el mapa en lugar de la imagen */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { RiWifiLine } from "react-icons/ri"; // Para Wifi
import { MdConnectedTv } from "react-icons/md"; // Para TV Smart
import { LuMicrowave } from "react-icons/lu"; // Para Cocina completamente equipada
import { RiHotelBedLine } from "react-icons/ri"; // Para Blanquería
import { FaShower } from "react-icons/fa6"; // Para Shampoo y jabón
import { BsFan } from "react-icons/bs"; //Ventilador de Techo
import { FaFirstAid } from "react-icons/fa"; // Para Patio trasero privado
import { MdAccessibility } from "react-icons/md"; // Para Planta baja (sin escaleras)
import { motion } from "framer-motion";


const ServicesData = [
  {
    id: 1,
    title: "Wifi",
    link: "#",
    icon: <RiWifiLine />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Tv-Smart Android",
    link: "#",
    icon: <MdConnectedTv />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Cocina completamente equipada, Microondas, Pava Electrica, Heladera",
    link: "#",
    icon: <LuMicrowave />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Blanquería - sábanas, toallas",
    link: "#",
    icon: <RiHotelBedLine />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Baño - Papel Higienico, jabon tocador",
    link: "#",
    icon: <FaShower />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Ventilador de Techo,
    link: "#",
    icon: <BsFan />,
    delay: 0.7,
  },
  {
    id: 7,
    title: "Planta alta (con escaleras, fácil acceso)",
    link: "#",
    icon: <MdAccessibility />,
    delay: 0.8,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pt-10 pb-10">Servicios</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-4 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import BannerPng from "../../assets/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  // Precios por noche según cantidad de personas
  const prices = [
    { people: "Maximo 4 personas", price: "70.000 ARS" },
  ];

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Imagen del Banner */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Imagen del banner"
            className="w-[350px] sm:w-[450px] md:max-w-[450px] object-cover drop-shadow-sm"
          />
        </div>
        {/* Texto del Banner */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Precio por noche
            </motion.h1>
            <div className="flex flex-col gap-6">
              {/* Lista de precios */}
              {prices.map((item, index) => (
                <motion.div
                  key={index}
                  variants={FadeUp(0.2 * (index + 1))}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <FaBookReader className="text-2xl" />
                  <p className="text-lg font-medium">{item.people}</p>
                  <p className="text-lg font-bold text-gray-800">{item.price}</p>
                </motion.div>
              ))}
              {/* Información del descuento */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-2xl text-center md:text-left "
              >
                <p className="text-lg font-medium text-yellow-700">
                  El departamento cuenta con una camama de 2 plazas y un divan cama de una plaza, logrando asi albergar a 4 personas comodamente.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

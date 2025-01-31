import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import entrada from "../../assets/entrada.jpeg";
import habitacion1 from "../../assets/habitacion1.jpg";
import habitacion1b from "../../assets/habitacion1b.jpg";
import habitacion2 from "../../assets/habitacion2.jpg";
import cocina01 from "../../assets/cocina01.jpeg";
import comedor from "../../assets/comedor.jpg";
import baño1 from "../../assets/baño.jpg";
import patiotrasero from "../../assets/patiotrasero.jpeg";

const areaImages = [
  { id: 1, title: "Entrada", image: entrada },
  { id: 2, title: "Cocina completa", image: cocina01 },
  { id: 3, title: "Comedor", image: comedor },
  { id: 4, title: "Dormitorio 1", image: habitacion1 },
  { id: 5, title: "Dormitorio 1", image: habitacion1b },
  { id: 6, title: "Dormitorio 2", image: habitacion2 },
  { id: 7, title: "Baño completo", image: baño1 },
  { id: 8, title: "Patio trasero", image: patiotrasero },
];

const Pictures = () => {
  return (
    <section className="bg-white">
      
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pt-10 pb-10">Ambientes</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="rounded-2xl shadow-lg relative"
        >
          {areaImages.map((area) => (
            <SwiperSlide key={area.id} className="relative">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl" // Ajusta la altura según el dispositivo
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-xl">
                <h2 className="text-lg font-semibold text-center">{area.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      {/* Estilos personalizados para cambiar el color de los botones de navegación */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
          }
        `}
      </style>
    </section>
  );
};

export default Pictures;

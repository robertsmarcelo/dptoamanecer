import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import divan from "../../assets/divanCama.jpeg";
import living from "../../assets/ComedorLiving.jpeg";
import cocina from "../../assets/Cocina.jpeg";
import cocina2 from "../../assets/Cocina2.jpg"
import cocinacomedor from "../../assets/LivingCocina.jpeg";
import banoEspejo from "../../assets/banoespejo.jpg";
import banoino from "../../assets/BanoIno.jpeg";
import habitacion from "../../assets/habitacion.jpeg";
import placard from "../../assets/HabitacionCloset.jpeg";
import pasillo from "../../assets/Pasillo.jpeg";
import tvsmarth from "../../assets/TvSmarth.jpeg";

const areaImages = [
  { id: 1, title: "Divan Cama Doble", image: divan },
  { id: 2, title: "Living Comedor", image: living },
  { id: 3, title: "Cocina", image: cocina },
  { id: 4, title: "Cocina 2", image: cocinacomedor },
  { id: 5, title: "Cocina 3", image: cocina2 },
  { id: 6, title: "Baño", image: banoEspejo },
  { id: 7, title: "Baño 2", image: banoino },
  { id: 8, title: "Habitacion", image: habitacion },
  { id: 9, title: "Closet", image: placard },
  { id: 10, title: "Pasillo", image: pasillo },
  { id: 11, title: "TV Smart", image: tvsmarth },
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

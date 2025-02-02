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
import habitacion from "../../assets/Habitacion.jpeg";
import placard from "../../assets/HabitacionCloset.jpeg";
import pasillo from "../../assets/Pasillo.jpeg";
import tvsmarth from "../../assets/TvSmarth.jpg";

const areaImages = [
  { id: 1, image: divan, title: "Diván Cama" },
  { id: 2, image: living, title: "Comedor y Living" },
  { id: 3, image: cocina, title: "Cocina" },
  { id: 4, image: cocinacomedor, title: "Cocina y Comedor" },
  { id: 5, image: cocina2, title: "Cocina Moderna" },
  { id: 6, image: banoEspejo, title: "Baño con Espejo" },
  { id: 7, image: banoino, title: "Baño Inoxidable" },
  { id: 8, image: habitacion, title: "Habitación Principal" },
  { id: 9, image: placard, title: "Habitación con Placard" },
  { id: 10, image: pasillo, title: "Pasillo Central" },
  { id: 11, image: tvsmarth, title: "TV Smart" },
];

const Pictures = () => {
  return (
    <center>
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
                alt={area.title || "Imagen del ambiente"}
                className="w-full object-cover rounded-2xl"
                loading="lazy"
                srcSet={`${area.image}?w=640&fit=cover 640w, 
                         ${area.image}?w=1280&fit=cover 1280w, 
                         ${area.image}?w=1920&fit=cover 1920w`}
                sizes="(max-width: 640px) 640px, 
                       (max-width: 1280px) 1280px, 
                       1920px"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-xl">
                <h2 className="text-lg font-semibold text-center">{area.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
            <h1 className="text-4xl font-bold text-left pt-10 pb-10">Recorrido</h1>
            <iframe width="289" height="513" 
                src="https://www.youtube.com/embed/hKEZjA_2SDA?autoplay=1&mute=1&loop=1" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
      </div>
      {/* Estilos personalizados para cambiar el color de los botones de navegación */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black !important;
          }
        `}
      </style>
    </section>
    </center>
  );
};

export default Pictures;

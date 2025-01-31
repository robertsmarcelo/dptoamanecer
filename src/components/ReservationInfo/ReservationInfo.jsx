import React from "react";
import { FaMoneyBillWave, FaCalendarCheck, FaRegCalendarTimes, FaBaby, FaChild, FaUsers, FaWheelchair , FaDog, FaSmokingBan, FaMusic, FaGlassCheers } from "react-icons/fa";
import { motion } from "framer-motion";

const conditions = [
  { id: 1, title: "Pago anticipado", description: "30% en concepto de seña. El saldo restante lo abonás en el ingreso.", icon: <FaMoneyBillWave /> },
  { id: 2, title: "Estadía mínima", description: "2 Noches", icon: <FaCalendarCheck /> },
  { id: 3, title: "Antelación mínima para reservar", description: "2 días", icon: <FaRegCalendarTimes /> },
];

const cancellationPolicy = {
  title: "Cancelación gratuita",
  description: "El importe abonado en concepto de seña se reintegrará. La cancelación debe realizarse como mínimo 7 días antes del ingreso. Pasada esa fecha, no se reintegrará la seña.",
//   icon: <FaBan />,
};

const rules = {
  apto: [
    { title: "Bebés (0 a 2 años)", icon: <FaBaby /> },
    { title: "Niños (2 a 12 años)", icon: <FaChild /> },
    { title: "Adultos mayores sin problemas de movilidad (Escaleras)", icon: <FaWheelchair  /> },
  ],
  acepta: [
    { title: "Familias", icon: <FaUsers /> },
    { title: "Parejas", icon: <FaUsers /> },
    { title: "Grupos de jóvenes", icon: <FaUsers /> },
  ],
  noAcepta: [
    { title: "Mascotas", icon: <FaDog /> },
    { title: "Fumar en el interior", icon: <FaSmokingBan /> },
    { title: "Hacer fiestas", icon: <FaGlassCheers /> },
    { title: "Colocar música alta", icon: <FaMusic /> },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ReservationInfo = () => {
  return (
    <section className="bg-white p-6">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Condiciones de la reserva</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conditions.map((item) => (
            <motion.div key={item.id} variants={fadeIn} initial="initial" animate="animate" className="p-4 bg-gray-100 rounded-xl flex flex-col items-center text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mt-10 mb-6">Política de cancelación</h1>
        <motion.div variants={fadeIn} initial="initial" animate="animate" className="p-6 bg-gray-100 rounded-xl flex flex-col items-center text-center">
          <div className="text-4xl mb-3">{cancellationPolicy.icon}</div>
          <h2 className="text-lg font-semibold">{cancellationPolicy.title}</h2>
          <p className="text-sm">{cancellationPolicy.description}</p>
        </motion.div>

        <h1 className="text-3xl font-bold mt-10 mb-6">Normas del alojamiento</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Apto</h2>
            {rules.apto.map((rule, index) => (
              <p key={index} className="flex items-center gap-2"><span className="text-xl">{rule.icon}</span>{rule.title}</p>
            ))}
          </motion.div>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Acepta</h2>
            {rules.acepta.map((rule, index) => (
              <p key={index} className="flex items-center gap-2"><span className="text-xl">{rule.icon}</span>{rule.title}</p>
            ))}
          </motion.div>
          <motion.div variants={fadeIn} initial="initial" animate="animate" className="p-4 bg-gray-100 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">No acepta</h2>
            {rules.noAcepta.map((rule, index) => (
              <p key={index} className="flex items-center gap-2 text-red-500"><span className="text-xl">{rule.icon}</span>{rule.title}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationInfo;

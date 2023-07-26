import React from "react";
// import s from "./Cartas.module.css";

function Cartas({ item }) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })
  return (
    <div class="mt-4 h-80 w-60 border-2 border-purple-600 " >
      <div class="h-48 w-62 flex items-center justify-center">
        <img src={item.image} alt="" class="h-full object-cover max-w-[115%] transition duration-500 group-hover:scale-105 sm:h-[56%]" />
      </div>
      <div  class="relative bg-white pt-3">
      <div class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center">{item.title}</div>
      </div>
      <div class="mt-2">
        <h3 class=" text-red-500 text-center group-hover:underline group-hover:underline-offset-4" >{formatter.format(item.price)}</h3>
      </div>
    </div>
  );
}

export default Cartas;

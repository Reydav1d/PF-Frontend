import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderData, setOrderData] = useState(null);
    

    const getOrderDetail = async (id) => {
        try {
          const response = await axios.get(`/order/${id}`);
          console.log(response)
          setOrderData(response.data); // Set the order details in the state
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        if (id) {
          getOrderDetail(id);
        }
      }, [id]);
    
      const formatter = new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 0,
        });

    // Determine the appropriate text based on the order status
    
    if (!orderData) {
        return <div>Cargando...</div>;
    }
    
    let statusText = "";
    if (orderData.order_status === "realizada") {
      statusText = "¡Gracias por tu compra!";
    } else if (orderData.order_status === "pendiente") {
      statusText = "Casi lista tu compra, pendiente de pago!";
    } else if (orderData.order_status === "cancelada") {
      statusText = "Lo sentimos, tu orden de compra a sido cancelada!";
    }

    let statusAmount = "";
    if (orderData.order_status === "realizada") {
      statusAmount = "Monto Pagado:";
    } else if (orderData.order_status === "pendiente") {
      statusAmount = "Monto pendiente de pago:";
    } else if (orderData.order_status === "cancelada") {
      statusAmount = "Monto de tu orden cancelada:";
    }

return (
  <div  className="bg-gray-50 min-h-screen">
 <div className="container_payment mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
 <div className="block-heading text-center">
 <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Estatus del pedido</h2>

    <img src={orderData.Customer.image} alt="foto.cliente" className="mt-4 h-24 w-24 rounded-full mx-auto" />
    <p>Email: {orderData.order_email}</p>
    <p>Estatus de Orden: {orderData.order_status}</p>
      <h1>{statusText}</h1>
    <p>Fecha de la orden: {orderData.order_date}</p>
    <p>ID de preferencia de pago: {orderData.id}</p>
    <p className="mt-4  text-xl">{statusAmount} {formatter.format(orderData.amount)}</p>
   
              <div className="flex justify-end">
              <Link to="/Productos/page/1">
              <button 
        href="#"
        className=" mt-4 inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Volver a casa
      </button>
      </Link>
      </div>
      </div> 
    </div>
  </div>
);
};

export default OrderDetailsPage;
  
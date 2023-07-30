// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ConfirmationPage = () => {
//   const { preferenceId } = useParams();
//   const [orderInfo, setOrderInfo] = useState(null);

//   useEffect(() => {
//     // Obtener información adicional de la orden desde el backend
//     const fetchOrderInfo = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/order/${preferenceId}`);
//         setOrderInfo(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchOrderInfo();
//   }, [preferenceId]);

//   if (!orderInfo) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div>
//       <h1>¡Gracias por tu compra!</h1>
//       <p>ID de preferencia de pago: {preferenceId}</p>
//       <p>Monto pagado: {orderInfo.amount}</p>
//       <p>Fecha de la orden: {orderInfo.order_date}</p>
//       {/* Mostrar otros detalles de la orden si es necesario */}
//       {/* <h2>Productos:</h2>
//       <ul>
//         {order.Products.map((product) => (
//           <li key={product.id}>
//             {product.title} - Cantidad: {product.Order_Product.quantity} - Precio Unitario: ${product.Order_Product.unit_price}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default ConfirmationPage;
  
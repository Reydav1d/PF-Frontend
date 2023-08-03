// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import PaymentButton from "./PaymentButton"; // Importa el componente PaymentButton aquí
// import { useLocation } from "react-router-dom";


// const OrderDetails = () => {
//     const location = useLocation();

//   const cart = useSelector((state) => state.cart);
//   const [preferenceId, setPreferenceId] = useState("")
//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const { preferenceId } = queryString.parse(location.search);
//     setPreferenceId(preferenceId);
//   }, [location]);

//   useEffect(() => {
//     const getOrderDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/order/${preferenceId}`);
//       setOrderDetails(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getOrderDetails();
// }, []);

// return (
//     <div>
//       {/* Mostrar los detalles de la orden... */}

//       {/* Agregar el botón "Pagar Ahora" para redirigir al usuario a la página de pago */}
//       {preferenceId && <PaymentButton preferenceId={preferenceId} />}
//     </div>
//   );
// };

// export default OrderDetails;
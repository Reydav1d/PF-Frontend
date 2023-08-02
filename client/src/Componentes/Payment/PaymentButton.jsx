import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from 'axios';
import {useNavigate, useLocation } from "react-router-dom";

function PaymentButton({cartItems, selectedQuantities}) {
    const [preferenceId, setPreferenceId] = useState("")
    const [paidFor, setPaidFor] = useState(false); // Nuevo estado para verificar si se realizó el pago
    const [error, setError] = useState(null);
    const [paymentResponse, setPaymentResponse] = useState(null); // Estado para almacenar la respuesta del backend
    const navigate = useNavigate();

    initMercadoPago('TEST-15ab3fde-45a9-47cd-9c2e-0ff7a08fc472')
  
 useEffect(() => {
  if(Object.keys(selectedQuantities).length > 0) {
    handleClick();
  }  
  
}, [selectedQuantities]);
   
    const createPreference = async () => {
      try{
        const items = cartItems.map((item) => ({
          id: item.id,
          title: item.title,
          unit_price: item.price,
          quantity: selectedQuantities[item.id]
        }));
        
        const response = await axios.post("http://localhost:3001/payment", {
          CustomerUser: "userprueba",
          email: "testeando@testeando.com",
          items: items,
        })
            const {id} = response.data;
            console.log(response)
            setPaymentResponse(response.data);

            console.log(id)
            return id;
             }catch(error) {
                console.log(error) 
             } 
    }

    const handleClick = async () => {
        const id = await createPreference()
        if (id) {
            setPreferenceId(id)
        }
    }

    const handleApprove = async (data, actions) => {
        try {
          const order = await actions.order.capture();
          const orderId = order.id;
          setPaidFor(true);
          navigate(`/confirmacion/${orderId}`,{ state: paymentResponse }); // Redirigir a la página de confirmación con el ID de la orden
        } catch (error) {
          console.error("Error al capturar el pago:", error);
        }
      };

    return (
        <div className="max-w-md mx-auto">
             {!paidFor && preferenceId && (<Wallet initialization={{ preferenceId: preferenceId }} onApprove={handleApprove} onError={(err) => {
        setError(err);
        console.error("Mercadopago Checkout onError", err);
      }}
      onCancel={() => {
        swal('Compra cancelada')
      }}/>)}
            
        </div>
    )
}

export default PaymentButton;

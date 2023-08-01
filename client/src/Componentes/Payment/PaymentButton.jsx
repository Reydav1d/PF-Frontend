import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function PaymentButton({cartItems, selectedQuantities, handleCheckout}) {
    const [preferenceId, setPreferenceId] = useState("")
    const [paidFor, setPaidFor] = useState(false); // Nuevo estado para verificar si se realizó el pago
    initMercadoPago('TEST-15ab3fde-45a9-47cd-9c2e-0ff7a08fc472')
    const navigate = useNavigate();
  
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
          navigate(`/confirmacion/${orderId}`); // Redirigir a la página de confirmación con el ID de la orden
        } catch (error) {
          console.error("Error al capturar el pago:", error);
        }
      };

    return (
        <div className="max-w-md mx-auto">
             {!paidFor && preferenceId && (<Wallet initialization={{ preferenceId: preferenceId }} onApprove={handleApprove} />)}
            {/* {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />} */}
            
        </div>
    )
}

export default PaymentButton;

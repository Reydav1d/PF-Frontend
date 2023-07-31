import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; // Importa la librería queryString



function PaymentButton({cartItems, selectedQuantities, handleCheckout}) {
    const [preferenceId, setPreferenceId] = useState("")
    const [paidFor, setPaidFor] = useState(false); // Nuevo estado para verificar si se realizó el pago
    initMercadoPago('TEST-15ab3fde-45a9-47cd-9c2e-0ff7a08fc472')
    const location = useLocation(); // Utiliza useLocation para obtener la URL actual
    const navigate = useNavigate();
  
 // Obtiene el ID de la preferencia de pago desde la URL al cargar el componente
 useEffect(() => {
  // const { preferenceId } = queryString.parse(location.search);
  //   setPreferenceId(preferenceId);
  if(Object.keys(selectedQuantities).length > 0) {
    handleClick();

  }  
  
}, [selectedQuantities]);

    // useEffect(() => {
    //     if (!preferenceId) {
    //         handleClick()
    //     }
    // }, [preferenceId])

   
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
          // ... Lógica adicional para actualizar el estado de la orden en el backend si es necesario ...
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

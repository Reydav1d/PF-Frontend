import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function PaymentButton() {
    const [preferenceId, setPreferenceId] = useState("")
    const [paidFor, setPaidFor] = useState(false); // Nuevo estado para verificar si se realizó el pago
    initMercadoPago('TEST-07205817-cac3-46b7-a783-0ad47045be05')

    const navigate = useNavigate();

    useEffect(() => {
        if (!preferenceId) {
            handleClick()
        }
    }, [preferenceId])

   

    const createPreference = async () => {
      try{
      const response = await axios.post("http://localhost:3001/payment", {
        
          "CustomerUser": "userprueba",
          "email": "testeando@testeando.com",
          "items": [
            {
              "id": "MLA1102136009",
              "title": "Botella De Tinta Hp Gt52 - Amarillo",
              "image": "http://http2.mlstatic.com/D_946962-MLA47396593375_092021-O.jpg",
              "unit_price": 10299,
              "category": "MLA3561",
              "stock": 1,
              "sold": 500,
              "quantity":2
              },
            {
              "id": "MLA1372536879",
              "title": "Notebook Hp 14-dq0515la Negra 14  Intel Celeron N4120  4gb De Ram 256gb Ssd Intel Uhd Graphics 600 1366x768px Windows 11 Home",
              "image": "http://http2.mlstatic.com/D_846400-MLA69387258943_052023-O.jpg",
              "unit_price": 229999,
              "category": "MLA1652",
              "stock": 50,
              "sold": 25,
              "quantity":2
            }
          ]
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
             {!paidFor && preferenceId && (<Wallet initialization={{ preferenceId: preferenceId }} onApprove={handleApprove}/>)}
            {/* {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />} */}
            
        </div>
    )
}

export default PaymentButton;

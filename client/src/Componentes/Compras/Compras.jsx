import React, { useEffect, useState } from "react";
import { getOrderProducts, datosDelUsuario, deleteOrder } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews'
import swal from "sweetalert2";

function Compras() {
  const dispatch = useDispatch();
  const LosDatos = useSelector((state) => state.datosDelUsuario);
  const ordersProducts = useSelector((state) => state.orderProduct);
  const [productVisibility, setProductVisibility] = useState({});
  

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);

  useEffect(() => {
      const fetchOrderProducts = async () => {
        try {
          if (LosDatos.user && LosDatos.user.email) {
            await dispatch(getOrderProducts(LosDatos.user.email));
          }
        } catch (error) {
          console.error("Error al obtener los productos del usuario:", error);
      };
    }
      fetchOrderProducts(); 
  }, [dispatch, LosDatos.user]);

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })

  const toggleProductVisibility = (orderId) => {
    setProductVisibility((prevState) => ({
      ...prevState,
      [orderId.toString()]: !prevState[orderId.toString()] // Convertir el ID a cadena antes de usarlo como clave
    }));  };

  console.log();

  const handleDelete = (e) => {
    e.preventDefault();
    swal.fire(`¡La órden ${e.target.value}, ha sido eliminado correctamente!`, {
      icon: "success"
    }).then(async (willDelete) => {
      if (willDelete) {
        dispatch(deleteOrder({ id: e.target.value }));
       (
          setTimeout(() => {
            window.location.reload();
          }, 1000)
        );
      }
    });
  };


  return (
    <div className="absolute ml-1400 h-700 w-1100 flex justify-center ">
    <div className="mt-6 overflow-x-auto">
    
    { ordersProducts?.length > 0 ? (
     <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
       <thead className="ltr:text-left rtl:text-right">
      <tr>
      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          N. Orden
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Fecha de compra
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Estatus
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Monto de compra
        </th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>
   
    <tbody className="divide-y divide-gray-200">
     { ordersProducts.map((r, index) => (
      <tr key={index}>
        {
             (r.order_status !== 'cancelada' && r.order_status !== "realizada")  ?
           <button className="px-2 bg-purple-300 py-2 rounded-md text-white font-semibold hover:bg-purple-300 active:bg-purple-700 focus:outline-none focus:ring focus:bg-purple-400 "
                          onClick={(e) => handleDelete(e)}
                          value={r.id}
                        >
                          🗑️
                        </button>
                        : <button></button>
}
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Órden #{r.id?.length > 2 ? r.id : '0' + r.id} -
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 "> {r.order_date?.split("-").join("/").slice(0, 10)} </td>
        <td>{r.Products?.length > 2 ? r.Products?.length + ' productos' : r.Products?.length + ' producto'} | {r.order_status}</td>
        <td className="block text-gray-700 flex justify-center px-4 py-8">{formatter.format(r.amount)}</td>
        {
             (r.order_status !== 'cancelada' && r.order_status !== "realizada") &&
             <Link to={`/ordencompra/${r.id}`} className="text-blue-500 underline cursor-pointer hover:text-blue-600 flex justify-center px-4 py-2">
              Pagar ahora
                </Link>
  }
       {r.Products && (
                    <td className="whitespace-nowrap px-2 py-1">
                      {productVisibility[r.id] ? (
                        r.Products?.map((p) => (
                          <div key={p.id}>
   <div title="Ver detalles" href={`/detail/${p.id}`}>
       <div className="mt-4 md:mt-2 flex hover:bg-gray-100 flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
    <Link to={`/detail/${p.id}`} className="text-blue-500 underline cursor-pointer hover:text-blue-600">
          <div className="pb-4 md:pb-8 w-full md:w-auto">
           <img className="hidden md:block max-w-[60px] sm:h-[30%]" src={p.image} alt="producto" />
          </div>
      </Link>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-0 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-2">
              <h3 className="text-xm xl:text-2 text-start w-full lg:w-[200px] font-semibold leading-4 text-gray-800 truncate">{p.title}</h3>
              <p className="text-base xm:text-lg leading-6 text-gray-800 opacity-0">{r.id?.length > 2 ? r.id : '0' + r.id}</p>
              <p className="text-base xm:text-lg font-semibold leading-6 text-gray-800">{formatter.format(p.price)}</p>
              <div>
                    {r.order_status === 'realizada' && <Reviews className="w-screen bg-gray-100 "  id={p.id} />}
                    </div>  
            </div>
          </div>
        </div>
      </div>
   </div>   
    ))
    ) : (
      <></>
    )}  <button
    type="button"
    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
    onClick={() => toggleProductVisibility(r.id)}
  >
    {productVisibility[r.id] ? "Hide" : "View"}
  </button>  
        </td>
       )}
      </tr>
           ))}
    </tbody>
  </table>
      )  : (  
    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
      <span className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 flex">No tienes registro de compras</span>
    </div>
      )}
</div>
  </div>
    )
}


export default Compras;



import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Carrito = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  useEffect(() => {
    if (totalPrice === 0) {
      const timer = setTimeout(() => {
        Swal.fire({
          title: "El carrito esta vacío",
          icon: "warning",
        }).then(() => {
          navigate("/Productos/page/:page");
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [totalPrice, navigate]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart?.forEach((product) => {
        total += product.price * selectedQuantities[product.id];
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart, selectedQuantities]);

  useEffect(() => {
    const initialQuantities = cart?.reduce((quantities, product) => {
      quantities[product.id] = 1;
      return quantities;
    }, {});
    setSelectedQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (product, value) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: Math.max(1, prevQuantities[product] + value),
    }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const itemsMapped = cart.map((item) => ({
    item_id: item.id,
    title: item.title,
    quantity: cart.lenght,
    totalAmount: totalPrice,
  }));

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })
  //funcion para conectar y redirigir al pago
  // const handleToShop = () => {

  // }

  return (
    <>
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" >
    <div class="mx-auto max-w-3xl rounded border-gray-200" >
      <header class="text-center">
        <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Carrito de compras</h1>
      </header>
      {cart?.map((product) => (
      <div class="mt-8 w-[90%]" key={product.id}> 
        <ul class="space-y-4 ">
          <li class="flex items-center gap-4 ">
            <img
              src={product.image} alt={product.name}
              class="h-16 w-18 rounded object-cover max-w-[14%] transition duration-500 group-hover:scale-105 sm:h-[10%]"
            />

            <div>
              <h3 class="text-sm text-gray-900 ">{product.title}</h3>

              <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt class="inline text-sm">Unidades disponibles:</dt>
                  <dd class="inline text-sm">{product.stock}</dd>
                </div>

                <div>
                  <dt class="inline text-sm">Precio:</dt>
                  <dd class="inline text-sm">{formatter.format(product.price)}</dd>
                </div>
              </dl>
            </div>

            <div class="flex items-center justify-end gap-2">
              <form class="flex items-center justify-end gap-2 " >
                <label for="Line1Qty" class="sr-only"> Quantity </label>
                <div class="flex items-center justify-end gap-2 border-2 border-purple-600">
    <button
      type="button"
      class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 text-center" onClick={() => handleQuantityChange(product.id, -1)}>
      -
    </button>

    <input 
      type="number"
      value={selectedQuantities[product.id]}
      min="1"
      readOnly
      class="h-10 w-20 rounded border border-gray-200 custom-input sm:text-sm text-center"
    />

    <button
      type="button"
      class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 text-center" onClick={() => handleQuantityChange(product.id, 1)}
    >
      +
    </button>
  </div>
              </form>

              <button class="text-gray-600 transition hover:text-red-600"onClick={() => handleRemoveItem(product.id)}>
                <span class="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>     
        </ul>
        </div>
        ))}
        <div class="mt-8 flex justify-end border-t-2 border-purple-600 pt-8">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd class="mt-1 w-[200px]">{formatter.format(totalPrice)}</dd>
              </div>

              <div class="flex justify-between !text-base font-medium mt-8 w-[400px]">
                <dt>Total</dt>
                <dd>{formatter.format(totalPrice)}</dd>
              </div>
            </dl>

            {/* <div class="flex justify-end">
              <span
                class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div> */}

            <div class="flex justify-end">
              <a
                href="#"
                class="block rounded bg-purple-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 mt-2 w-[100px]"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>
       </>
  );
};

export default Carrito
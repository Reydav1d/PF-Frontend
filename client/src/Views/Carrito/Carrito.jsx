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

  //funcion para conectar y redirigir al pago
  // const handleToShop = () => {

  // }

  return (
    <>
    <div>
      {cart?.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h1>{product.title}</h1>
          <h2>Precio: ${product.price}</h2>
          <p>Unidades disponibles: {product.stock}</p>
          <div>
            <button onClick={() => handleRemoveItem(product.id)}>X</button>
          </div>
          <div>
            <button onClick={() => handleQuantityChange(product.id, -1)}> - </button>
            <input
            type="number"
            value={selectedQuantities[product.id]}
            min="1"
            readOnly
            />
            <button onClick={() => handleQuantityChange(product.id, 1)}> + </button>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h3>Total:</h3>
      <p>${totalPrice}</p>
      <button 
      // onClick={handleToShop} 
      >Comprar</button>
    </div>
    </>
  );
};

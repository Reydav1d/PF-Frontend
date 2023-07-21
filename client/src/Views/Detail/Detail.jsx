import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, clearDetail, getDescription, getPicture } from "../../Redux/Actions/action"
// import style from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const description = useSelector((state) => state.description);
  const picture = useSelector((state) => state.picture);

  useEffect(() => {
    dispatch(getProduct(id));
    dispatch(getDescription(id));
    dispatch(getPicture(id));
    console.log(getProduct, "error")
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              src={picture}
              // src={product?.image}
              alt={product?.title}
              className="h-48 w-auto sm:h-64 rounded-full mx-auto sm:mx-0"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h1 className="text-xl font-semibold">{product?.title}</h1>
              <p className="text-gray-600">Precio: ${product?.price}</p>
              <p className="text-gray-600">Unidades disponibles: {product?.stock}</p>
              <p className="text-gray-600">Categoría: {product?.category}</p>

              <button
                // onClick={handleAddToCart}
                className="mt-4 bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
          <div className="px-6 py-4 text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-2">Descripción del producto</h2>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

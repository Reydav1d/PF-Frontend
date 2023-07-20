import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProduct, clearDetail } from "../../Redux/Actions/action"
import style from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productoDetail);

  useEffect(() => {
    dispatch(getProduct(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <><>
    <div>
      <h1>{product?.title}</h1>
      <img src={product?.image} alt={product?.title} />
    </div>
    </></>
  )
}

export default Detail;

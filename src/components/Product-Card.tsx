import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductProps ={
    productId:string;
    photo:string;
    stock:number;
    handler:(cartItem: CartItem) => string | undefined;
    name:string;
    price:number;
}


const ProductCard = ({productId,photo,handler,name,price,stock}:ProductProps) => {
  return (
    <div className="product-card">
        <img src={`${server}/${photo}`} alt={name} />
        <p>{name}</p>
        <span>₹ {price}</span>

        <div>
            <button onClick={()=>handler({
              productId,photo,stock,name,price,quantity:1,
            })}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default ProductCard
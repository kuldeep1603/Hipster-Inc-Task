import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { type Product } from "../redux/slice/productSlice";
import { getCardClass, getFontClass, getColor } from "../utils/themeClasses";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  const discount = ((product.discountPercentage / 100) * product.price).toFixed(
    2
  );
  const discountedPrice = (product.price - Number(discount)).toFixed(2);

  return (
    <div className="relative">
      <div
        className={`product-list  transition-all duration-300 ${getCardClass(
          theme
        )} ${getFontClass(theme)} rounded-md `}
      >
        <div className="relative p-4">
          <img
            src={product.images?.[0] || ""}
            alt={product.title}
            className="w-full sm:h-[200px] h-[120px] object-contain mx-auto transition-transform duration-300"
          />

          {/* Discount badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            - {product.discountPercentage.toFixed(2)}%
          </div>

          {/* Category badge */}
          <div className="absolute top-2 right-2 border border-1 border-black rounded-full font-medium px-2 py-2">
            {/* {product.category} */}
            <CiHeart size={20} color="text-black" />
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <h2 className={`text-base font-semibold truncate ${getColor(theme)}`}>
          {product.title}
        </h2>

        {/* Price and old price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-red-500 font-bold flex items-center">
            <FaIndianRupeeSign className="mr-0.5" size={12} />
            {discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ₹{product.price.toFixed(2)}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-1 flex items-center gap-1 text-yellow-500 text-sm">
          {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-500 text-xs ml-1">({product.stock})</span>
        </div>
      </div>
      {/* Add to cart on hover */}
      <div className="mt-4 absolute w-full bottom-[29%] opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-black text-white py-2 px-4 rounded w-full text-sm font-medium hover:bg-gray-800 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

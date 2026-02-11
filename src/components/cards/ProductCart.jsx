// components/ProductCard.jsx
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews, sold } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card w-80 bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover" />
        {discount > 0 && (
          <span className="badge badge-error absolute top-3 left-3">
            -{discount}%
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-base line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-warning" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">Sold: {sold}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">৳{price}</span>
          )}
        </div>

        {/* Button */}
        <div className="card-actions mt-2">
          <button className="btn btn-primary btn-sm w-full gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

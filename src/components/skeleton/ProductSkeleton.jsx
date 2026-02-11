// components/ProductCardSkeleton.jsx
const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      {/* Image Skeleton */}
      <div className="skeleton h-56 w-full rounded-t-xl"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-4 w-3/4"></div>

        {/* Rating */}
        <div className="flex gap-2">
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        {/* Sold */}
        <div className="skeleton h-3 w-20"></div>

        {/* Price */}
        <div className="skeleton h-5 w-24"></div>

        {/* Button */}
        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

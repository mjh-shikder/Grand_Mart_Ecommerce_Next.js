import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductDetailsSkeleton from "./loading";
import { getSingleProduct } from "@/server/products";


// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const product = await getSingleProduct(id);
//   // Replace with your real fetch logic

//   const {
//     title,
//     bangla,
//     image,
//     price,
//     discount,
//     ratings,
//     reviews,
//     sold,
//     description,
//     info,
//     qna,
//   } = product;

//   if (!product) {
//     return {
//       title: "Product Not Found | Grand Mart",
//     };
//   }

//   return {
//     title: title,
//     description: product.description,

//     openGraph: {
//       type: "product",
//       title: title,
//       description: product.description,
//       url: `/products/${product.id}`,
//       images: [
//         {
//           url: image,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//       images: [image],
//     },
//   };
// }


const ProductDetailsPage = async ({ params }) => {
  // simulate loading / API call
  const {id} = await params
  const product = await getSingleProduct(id);

  if (!product) return <ProductDetailsSkeleton />;

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="bg-base-100 rounded-xl shadow">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-warning" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
          <span className="text-gray-400">• Sold {sold}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">৳{finalPrice}</span>
          {discount > 0 && (
            <span className="line-through text-gray-400">৳{price}</span>
          )}
          {discount > 0 && (
            <span className="badge badge-error">-{discount}%</span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="btn btn-primary w-full md:w-1/2 gap-2">
          <FaShoppingCart />
          Add to Cart
        </button>

        {/* Info */}
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {info.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-semibold">Description</h2>
        {description.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Q&A */}
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-3">Q & A</h2>
        <div className="space-y-3">
          {qna.map((item, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
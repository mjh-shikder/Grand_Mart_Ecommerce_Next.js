import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductDetailsSkeleton from "./loading";

const ProductDetailsPage = async ({ params }) => {
  // simulate loading / API call
  const product = await getProduct(params.id);

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

/* Mock API */
async function getProduct(id) {
  await new Promise((res) => setTimeout(res, 800));

  return {
    title: "Number and Counting Learning Board",
    bangla: "সংখ্যা ও গণনা শেখার শিক্ষামূলক বোর্ড",
    image: "https://i.ibb.co.com/p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg",
    price: 1250,
    discount: 10,
    ratings: 4.6,
    reviews: 19,
    sold: 31,
    description:
      "Number and Counting Learning Board টি শিশুদের প্রাথমিক গণিত শেখার জন্য একটি কার্যকর educational toy。\n\nএই learning board এর মাধ্যমে বাচ্চারা ১ থেকে ২০ পর্যন্ত সংখ্যা চিনতে শেখে।",
    info: [
      "সংখ্যা ও গণনার ধারণা তৈরি করে",
      "প্রাথমিক গণিত শেখার জন্য উপযোগী",
      "হ্যান্ডস-অন লার্নিং নিশ্চিত করে",
      "নন-টক্সিক ও শিশু-নিরাপদ উপকরণ",
    ],
    qna: [
      {
        question: "এই বোর্ডটি কোন বয়সের শিশুদের জন্য উপযুক্ত?",
        answer: "৩ থেকে ৬ বছর বয়সী শিশুদের জন্য এটি সবচেয়ে উপযোগী।",
      },
    ],
  };
}

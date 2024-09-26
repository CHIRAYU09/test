// pages/index.js
import Image from 'next/image';
import Layout from '../components/Layout';

const ProductSection = ({ title, products }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <a
          key={product.id}
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              layout="responsive"
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-green-600 font-bold">INR {product.price.toFixed(2)}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const LandingPage = () => {
  const bestSellerCandles = [
    { id: 1, name: "Pumpkin Spice", price: 999, imageUrl: "/images/PSCandle.jpg", amazonLink: "https://www.amazon.com/lavender-candle" },
    { id: 2, name: "Oudh Ambrosia", price: 799, imageUrl: "/images/Oudh.jpg", amazonLink: "https://www.amazon.com/vanilla-candle" },
    { id: 3, name: "Ocean Breeze", price: 799, imageUrl: "/images/Ocean.jpg", amazonLink: "https://www.amazon.com/ocean-candle" },
  ];

  const bestSellerCarFresheners = [
    { id: 4, name: "Lemon Grass", price: 399, imageUrl: "/images/LemonGrassCF.jpg", amazonLink: "https://www.amazon.com/pine-freshener" },
    { id: 5, name: "Arabian Jasmine", price: 399, imageUrl: "/images/ArabianJasmine.jpg", amazonLink: "https://www.amazon.com/new-car-freshener" },
    { id: 6, name: "Lavender", price: 399, imageUrl: "/images/LavenderCF.jpg", amazonLink: "https://www.amazon.com/citrus-freshener" },
  ];

  const bestSellerWardrobeFresheners = [
    { id: 7, name: "Pumpkin Spice", price: 399, imageUrl: "/images/Pumpkin.jpg", amazonLink: "https://www.amazon.com/linen-freshener" },
    { id: 8, name: "Kashmiri Rose", price: 399, imageUrl: "/images/KashmiriRoseWardrobe.jpg", amazonLink: "https://www.amazon.com/lavender-sachet" },
    { id: 9, name: "Lemon Grass", price: 399, imageUrl: "/images/LemonGrass.jpg", amazonLink: "https://www.amazon.com/cedar-freshener" },
  ];

  return (
    <>
    <div className="relative h-[32rem]">
        <div className="absolute inset-0 h-[32rem] w-full">
          <Image
            src="/images/CoverPage.png"  // Replace with your actual cover image path
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Best Sellers</h1>
        <ProductSection title="Best Seller Scented Candles" products={bestSellerCandles} />
        <ProductSection title="Best Seller Car Fresheners" products={bestSellerCarFresheners} />
        <ProductSection title="Best Seller Wardrobe Fresheners" products={bestSellerWardrobeFresheners} />
        </div>
    </>
  );
};

export default LandingPage;
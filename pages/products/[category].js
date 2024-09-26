import { useRouter } from 'next/router';
import Head from 'next/head';
import Product from '../../components/Product';

const products = {
  'scented-candles': [
    { id: 1, name: "Pumpkin Spice", image: "/images/PSCandle.jpg", description: "Soothing pumpkin spice scented candle", amazonLink: "https://www.amazon.in/dp/B0DFVGY1QX" },
    // Add more scented candles...
  ],
  'car-fresheners': [
    { id: 2, name: "Arabian Jasmine", image: "/images/ArabianJasmine.jpg", description: "Fresh Arabian Jasmine scent for your car", amazonLink: "https://www.amazon.in/dp/B0DFVGY1QX" },
    // Add more car fresheners...
  ],
  'wardrobe-fresheners': [
    { id: 3, name: "Lemon Grass", image: "/images/LemonGrass.jpg", description: "Clean lemon grass scent for your wardrobe", amazonLink: "https://www.amazon.in/dp/B0DFVGY1QX" },
    // Add more wardrobe fresheners...
  ],
};

export default function ProductCategory() {
  const router = useRouter();
  const { category } = router.query;

   const categoryProducts = products[category] || [];
  // console.log(Object.entries(products));
  
 // const categoryProducts =  (Object.entries(products).filter(entry=> entry[1][0].id == category)[0] || [])[1] || [];
  const categoryName = category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

  return (
    <div>
      <Head>
        <title>{categoryName} - My Product Website</title>
        <meta name="description" content={`Browse our ${categoryName}`} />
      </Head>
      <h1 className="text-3xl font-bold text-center mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
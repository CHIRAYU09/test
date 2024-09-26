// components/Product.js
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/solid';

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
          />
        </div>
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View on Amazon
          <ExternalLinkIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Product;
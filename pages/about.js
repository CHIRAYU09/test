import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Carousel from '../components/carousel';

export default function About() {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const slides = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log('Submitted comment:', comment);
    setSubmitted(true);
    setComment('');
  };
  const handleCommentChange = (e) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setComment(inputValue);
      setError('');
    } else {
      setError('Please use only letters and spaces in your comment.');
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Head>
          <title>About Us - My Product Website</title>
          <meta name="description" content="Learn more about our company" />
        </Head>

        <div className="w-full m-auto">
          <Carousel slides={slides}/>
        </div>

        <p className="text-center mb-8">Welcome to a luxurious oasis at Breathe In, where the power of nature and relaxation come together. We make wonderful things that smell amazing and help you feel great. Our products are handmade, natural, essential oil based and give you a fancy way to feel better. Try Breathe In and feel good about life. Come join us and feel the difference with the healing power of aromas.</p>
        
        <div className="max-w-md mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
          {submitted ? (
            <p className="text-green-600 mb-4">Thank you for your comment!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 border border-gray-300 rounded mb-4"
                rows="4"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
                required
              ></textarea>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                disabled={error !== '' || comment.trim() === ''}
              >
                Submit Comment
              </button>
            
            </form>
          )}
        </div>
      </div>
    </>
  );
}
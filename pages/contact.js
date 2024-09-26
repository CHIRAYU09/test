import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));


  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
  }));

  if (name === 'contactNo') {
    if (!validatePhone(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        contactNo: 'Please enter a valid 10-digit phone number'
      }));
    }
  }

};


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
    // Here you would typically send the form data to your backend
    console.log('Submitted form data:', formData);
    setSubmitted(true);
    setFormData({ name: '', contactNo: '', email: '', comment: '' });
     setErrors({});
      }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Head>
          <title>Contact Us - My Product Website</title>
          <meta name="description" content="Get in touch with us" />
        </Head>
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="max-w-md mx-auto">
          {submitted ? (
            <p className="text-green-600 mb-4">Thank you for your message. We'll get back to you soon!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="contactNo" className="block mb-1">Contact No.</label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className={`w-full p-2 border rounded ${errors.contactNo ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block mb-1">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
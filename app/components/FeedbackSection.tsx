'use client';

import { useState } from 'react';

export default function FeedbackSection() {
  const [feedback, setFeedback] = useState({
    name: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setFeedback({ name: '', message: '' });
  };


  return (
    <section className="bg-indigo-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Feedback</h2>
        <p className="text-center text-gray-600 mb-8">We’d love to hear your thoughts!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={feedback.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={feedback.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Submit Feedback
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">Thanks for your feedback!</p>
          )}
        </form>
      </div>
    </section>
  );
}

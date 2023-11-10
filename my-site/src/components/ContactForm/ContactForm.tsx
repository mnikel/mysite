'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="">
      {/* DODAC STYL, TAK ZEBY OKNA W FORMULARZU BYLY ZGODNE Z KOLORAMI Z VSC
      PAMIETAJ BY BYLY JAK NAJBLIZEJ 7.0 W https://webaim.org/resources/contrastchecker/ 
      ZABLOKOWAC TEXTAREA NA OK 2000 / 3000 ZNAKOW?*/}
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="fullName" className="">
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            placeholder='Full Name'
          />
        </div>
        <div>
          <label htmlFor="email" className="">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=""
            placeholder='E-mail adresss'
          />
        </div>
        <div>
          <label htmlFor="message" className="">
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className=""
            placeholder='Your awesome message'
          />
        </div>
        <div>
          <button
            type="submit"
            className=""
            >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

{/* validation for this form */}

export default ContactForm;

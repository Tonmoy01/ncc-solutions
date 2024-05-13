import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputForm from '../../components/contactForm/InputForm';

const ContactFormPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const form = useRef();

  const validateForm = () => {
    const errors = {};

    if (fullName.trim() === '') {
      errors.fullName = 'First Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (subject.trim() === '') {
      errors.subject = 'Subject is required';
    }
    if (message.trim() === '') {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send email using emailjs
    const templateParams = {
      from_name: 'Tonmoy Khan',
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .sendForm(
        'service_bei71eu',
        'template_phbaehv',
        form.current,
        {
          publicKey: '3NowoVJsL0sIl8GR_',
        },
        templateParams
      )
      .then((response, data) => {
        console.log('Email sent successfully!', response);
        console.log(data);
        // Reset form fields
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
      })
      .catch((error) => {
        console.error('Email send failed:', error);
      });
  };

  return (
    <div className='max-w-[1300px] p-8 mx-auto'>
      <h1 className='mb-4 text-2xl font-bold'>Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit} className='space-y-4'>
        <legend>
          Name <span className='text-sm text-gray-400'>(required)</span>
        </legend>
        <InputForm
          type={'text'}
          id={'fullName'}
          name={'fullName'}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`block w-full p-2 mt-1 border-[1px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-[#a9a9a9] ${
            errors.fullName ? 'border-red-500' : ''
          }`}
          label={'Full Name'}
          error={errors.fullName}
        />
        <InputForm
          type={'email'}
          id={'email'}
          name={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`block w-full p-2 mt-1 border-[1px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-[#a9a9a9] ${
            errors.email ? 'border-red-500' : ''
          }`}
          label={'Email'}
          error={errors.email}
        />
        <InputForm
          type={'subject'}
          id={'subject'}
          name={'subject'}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`block w-full p-2 mt-1 border-[1px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-[#a9a9a9] ${
            errors.subject ? 'border-red-500' : ''
          }`}
          label={'Subject'}
          error={errors.subject}
        />
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message{' '}
            <span
              className={`text-sm ${
                errors.message ? 'text-red-500' : 'text-gray-400'
              }`}
            >
              (required)
            </span>
          </label>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows='4'
            className={`block w-full p-2 mt-1 border-[1px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-[#a9a9a9] ${
              errors.message ? 'border-red-500' : ''
            }`}
          ></textarea>
          {errors.message && (
            <p className='text-sm text-red-500'>{errors.message}</p>
          )}
        </div>
        <div>
          <button
            type='submit'
            className='inline-flex items-center px-5 py-3 text-base font-medium text-white bg-[#4D88C7] border border-transparent rounded-md shadow-sm hover:opacity-80 focus:outline-none'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormPage;

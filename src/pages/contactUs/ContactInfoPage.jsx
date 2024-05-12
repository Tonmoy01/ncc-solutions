import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ContactInfoPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      id: uuidv4(),
      question: 'General Inquiries',
      answer: [
        'Our main office is located at 12627 York Road, North Royalton, Ohio 44133.',
        'You may reach us at 440-582-3300 from Monday to Friday between 9am and 5pm.',
      ],
    },
    {
      id: uuidv4(),
      question: 'Families',
      answer: [
        "To learn more about our services, supports, and available homes, please don't hesitate to reach out to Melanie Stoll, our Director of Operations.",
        'You can contact her directly at:',
        'Phone: 216-469-7835',
        'Email: mstoll@necare.org',
        'Melanie will be happy to provide you with all the information you need. Feel free to get in touch!',
      ],
    },
    {
      id: uuidv4(),
      question: 'Employment',
      answer: [
        'For job seekers and employment inquiries, please feel free to get in touch with us during our standard office hours.',
        'You can reach us by:',
        'Phone: 440-582-3300',
        'Email: ncchrdept@necare.org',
        'We look forward to assisting you!',
      ],
    },
  ];

  return (
    <div className='max-w-[90%] mx-auto mt-8'>
      {faqData.map((faq, index) => (
        <div key={faq.id} className={`mb-4 ${index !== 0 ? 'border-t' : ''}`}>
          <button
            onClick={() => toggleAccordion(index)}
            className='w-full px-4 py-2 text-left focus:outline-none'
          >
            <span className='flex items-center justify-between'>
              <span className='text-lg font-semibold sm:text-xl'>
                {faq.question}
              </span>

              <MdKeyboardArrowDown
                className={`transition-transform transform ${
                  activeAccordion === index ? '-rotate-180' : ''
                }`}
              />
            </span>
          </button>
          {activeAccordion === index && (
            <div className='px-4 py-4 sm:rounded-md w-full sm:w-[90%] text-sm'>
              {faq.answer.map((item, i) => (
                <p
                  key={i}
                  className={i === faq.answer.length - 1 ? '' : 'mb-5'}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfoPage;

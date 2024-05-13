import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const VisionAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: 'Dignity and Respect',
      answer: [
        'We honor the ambitions and individuality of our clients, treating each person with the utmost dignity and respect.',
      ],
    },
    {
      question: 'Empowerment',
      answer: [
        'Our focus is on encouraging and empowering clients to set and achieve their personal goals.',
      ],
    },
    {
      question: 'Community Integration',
      answer: [
        'We are dedicated to giving our clients meaningful roles in the community, fostering a sense of belonging and contribution.',
      ],
    },
    {
      question: 'Independence',
      answer: [
        'We emphasize teaching skills that promote independence, enabling our clients to lead more self-sufficient lives.',
      ],
    },
    {
      question: 'Excellence in Care',
      answer: [
        'We commit to developing and retaining employees who are passionate about providing excellent care.',
      ],
    },
    {
      question: 'Continuous Improvement',
      answer: [
        'Our services are evaluated consistently to ensure continuous improvement and the highest quality of care.',
      ],
    },
    {
      question: 'Advocacy',
      answer: [
        'We give a voice to those who cannot speak for themselves and provide a platform for those who can, ensuring every individual is heard and represented.',
      ],
    },
  ];

  return (
    <div className='max-w-[1300px] mx-auto mt-8 px-4 md:px-0'>
      {faqData.map((faq, index) => (
        <div key={index} className={`mb-4 ${index !== 0 ? 'border-t' : ''}`}>
          <button
            onClick={() => toggleAccordion(index)}
            className='w-full py-2 text-left focus:outline-none'
          >
            <span className='flex items-center justify-between'>
              <span className='text-base sm:text-xl'>{faq.question}</span>
              {activeAccordion === index ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </span>
          </button>
          {activeAccordion === index && (
            <div className='py-4 sm:rounded-md w-full sm:w-[90%] text-sm'>
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
export default VisionAccordion;

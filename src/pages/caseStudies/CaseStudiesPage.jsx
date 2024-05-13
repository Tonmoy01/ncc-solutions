import Card from './../../components/Card';
import heroImage from '../../assets/hero.jpeg';
import img1 from '../../assets/img1.jpg';
import card1 from '../../assets/card1.jpeg';
import card2 from '../../assets/card2.jpeg';
import ContentCard from '../../components/reusable/ContentCard';
import { v4 as uuidv4 } from 'uuid';

const CaseStudiesPage = () => {
  const contentData = [
    {
      id: uuidv4(),
      heading: 'Our Philosophy',
      texts: [
        'NCC Solutions, Inc. is a non-profit organization dedicated to empowering individuals with developmental disabilities to live their best lives. We are dedicated to accommodating individuals with varying functioning levels and addressing the needs of individuals with mild to profound disabilities, including those with multiple disabilities.',

        'Our core principle is a "continuum of care," where we adapt living arrangements to individuals developing independent living skills. We emphasize recognizing and seamlessly aligning their living environment with evolving capabilities.',
      ],
      topHeading: 'What Makes NCC Solutions Special?',
      btnText: 'Learn About Life at NCC',
    },
    {
      id: uuidv4(),
      heading: 'Our Mission',
      texts: [
        'We empower individuals to reach their full potential and live fulfilling lives in their communities through personalized support and high-quality, person-centered services.',
      ],
      img: img1,
    },
    {
      id: uuidv4(),
      heading: 'Our Story',
      texts: [
        "Since 1982, NCC Solutions, Inc. has provided comprehensive supportservices for individuals with developmental disabilities. We've expanded to meet community needs in over three decades of operation. We currently 160 individuals across 24 locations in Cuyahoga County through diverse programs including Intermediate Care Facilities, Individual Options Waiver services, Day Programming, and Community Volunteer Center initiatives.",
      ],
      img: img1,
      linkText: 'Learn more about our team >',
    },
  ];

  return (
    <>
      <div
        className='relative bg-center bg-cover'
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-40'></div>{' '}
        {/* Overlay */}
        <div className='container relative px-4 py-12 mx-auto md:py-24'>
          <h2 className='text-3xl font-semibold text-center text-white uppercase font-lato'>
            Case Studies
          </h2>
        </div>
      </div>

      {contentData.map((content, idx) => (
        <ContentCard content={content} key={content.id} idx={idx} />
      ))}

      <div className='max-w-[1200px] mx-auto px-6 pb-10 md:px-0'>
        <div className='flex flex-col gap-6 pb-3 md:flex-row md:gap-24'>
          <Card img={card1} text={'Life at NCC'} />
          <Card img={card2} text={'Meet Our Team'} />
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;

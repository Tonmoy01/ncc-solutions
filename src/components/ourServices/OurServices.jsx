import { v4 as uuidv4 } from 'uuid';

const OurServices = () => {
  const services = [
    {
      id: uuidv4(),
      title: 'Intermediate Care Facilities (ICF):',
      description:
        'We operate eight distinct residential homes within Cuyahoga County, each ranging in size from 8 to 18 beds, catering to individuals with moderate to profound cognitive disabilities. Our dedicated staff provides exceptional medical, behavioral/psychological, social, dietary, and daily living skills services to ensure the well-being of each resident. Learn More About ICF Services.',
    },
    {
      id: uuidv4(),
      title: 'Waiver and the Individual Options Waiver (I/O Waiver).',
      description:
        "Our Waiver Division comprises approximately 26 sites, including licensed and non-licensed homes. The level of support provided is tailored to each individual's unique needs, as determined by a Support Plan developed in collaboration with the Cuyahoga County Board of Developmental Disabilities. We provide support to individuals who may live independently, with family, or in shared settings with up to four other individuals. Learn More About Waiver Services.",
    },
    {
      id: uuidv4(),
      title: 'Day Program and Community Volunteer Center:',
      description:
        'Our Community-Based Day Program empowers individuals with developmental disabilities to fully engage and contribute to their communities. We aim to foster social inclusion, regardless of the level of support an individual may require. We achieve this by creating support networks with community members and agencies, facilitating equal access to community resources for individuals with disabilities. Our programs adhere to Americans with Disabilities Act (ADA) guidelines for accessibility, ensuring inclusivity for all participants. Learn More About the Day Program.',
    },
  ];

  return (
    <div className='mt-8'>
      <h3 className='my-5 text-2xl font-lato'>
        <strong className='text-textGray'>Our Services</strong>
      </h3>
      <p>
        We offer a variety of services and supports to people with developmental
        disabilities, including:
      </p>

      <div className='mt-5'>
        <ul className='ml-14'>
          {services.map(({ id, title, description }) => (
            <li key={id} className='my-4 list-disc'>
              <strong>{title}</strong> {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default OurServices;

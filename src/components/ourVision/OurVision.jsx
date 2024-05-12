import { v4 as uuidv4 } from 'uuid';
import VisionAccordion from './VisionAccordion';
import VisionContent from './VisionContent';

const OurVision = () => {
  const contentsData = [
    {
      id: uuidv4(),
      heading: 'Our Vision',
      text1:
        'At NCC, our vision is grounded in a fundamental belief that every individual deserves to lead a life filled with opportunities, respect, and autonomy.',
      text2:
        'Our values are the pillars that uphold this vision, guiding every aspect of our work and interactions. These values are not just ideals we strive for; they are the practices we live by every day as we work towards building lives without limitations. Below are the core values that define our approach and commitment to those we serve:',
    },
  ];

  return (
    <>
      {contentsData.map((content) => (
        <VisionContent key={content.id} data={content} />
      ))}
      <VisionAccordion />
    </>
  );
};
export default OurVision;

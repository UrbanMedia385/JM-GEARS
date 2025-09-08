import { isValidElement } from 'react';
import {v4 as uuidv4} from 'uuid';

const faqOneData = [
    {
        id: uuidv4(),
        ques: 'Decades of Expertise:',
        ans: 'With a legacy spanning several decades,  has been at the forefront of heavy engineering. Our extensive experience in the industry ensures that we bring unparalleled expertise to every cement plant project.',
        index: 'faq1',
    },

    {
        id: uuidv4(),
        ques: 'State-of-the-Art Infrastructure',
        ans: 'Our state-of-the-art manufacturing facility, equipped with cutting-edge machinery and facilities, enables us to deliver precision-engineered cement plant equipment. From cement mills to clinker coolers, our infrastructure is geared towards excellence.',
        index: 'faq2'
    },

    {
        id: uuidv4(),
        ques: 'Diverse Industry Recognition',
        ans: 'Serving not only the cement industry but also various sectors,  has earned international acclaim for its heavy engineering solutions. Our commitment to quality management has established us as a trusted partner for approximately 500 clients globally.',
        index: 'faq3'
    },

    {
        id: uuidv4(),
        ques: 'Customized Solutions for Your Needs',
        ans: 'At JM Gears & Engineering, we understand that each cement plant is unique. Our team specializes in providing tailored solutions to meet specific industrial requirements. From conceptualization to execution, we ensure that our equipment aligns seamlessly with your project goals.',
        index: 'faq4'
    }

]

export default faqOneData;
import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/home3/grandfather.png';
import img2 from '../../assets/img/home3/father.jpg';
import img3 from '../../assets/img/home3/son.jpg';

const teamFourData = [
    {
        id: uuidv4(),
        img: img1,
        name: 'GS Kanda',
        designation: 'CEO, Founder',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img2,
        name: 'Satinder Kanda',
        designation: 'Director',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img3,
        name: 'Monit Singh Kanda',
        designation: 'Director',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },
]

export default teamFourData;
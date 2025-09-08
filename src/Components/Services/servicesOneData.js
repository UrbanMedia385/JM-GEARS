import {v4 as uuidv4} from 'uuid';
import bg1 from '../../assets/img/services/1.png'
import bg2 from '../../assets/img/services/2.png'
import bg3 from '../../assets/img/services/3.png'
import bg4 from '../../assets/img/services/4.png'
import bg5 from '../../assets/img/services/5.png'
import bg6 from '../../assets/img/services/6.png'



const ProductsOneData = [
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'blueprint',
        title: 'Cement Industry',
        desc: 'JM Gears & Engineering is a key player in the cement sector, offering complete kilns, mill components, girth gears, and pinions.',
    },

    {
        id: uuidv4(),
        bg: bg2,
        icon: 'interior-design',
        title: 'Sugar Industry',
        desc: 'In the sugar sector, we provide critical components such as gears, pinions, and mill heads. ',
    },

    {
        id: uuidv4(),
        bg: bg3,
        icon: 'home',
        title: 'Chemical Industry',
        desc: 'For the chemical industry, We delivers customised heavy engineering solutions. ',
    },

    {
        id: uuidv4(),
        bg: bg4,
        icon: 'varnish',
        title: 'Sponge iron Industry',
        desc: 'We play a vital role in the sponge iron industry by providing robust kiln shells, gears, and rollers.',
    },

    {
        id: uuidv4(),
        bg: bg5,
        icon: 'sketch-1',
        title: 'Tyre Industry',
        desc: 'In the tire industry, we offer specialized components such as gears, pinions, and shafts. ',
    },
    {
        id: uuidv4(),
        bg: bg6,
        icon: 'sketch-1',
        title: 'Steel Industry',
        desc: 'JM Gears & Engineering is a trusted partner in the steel sector, providing a range of heavy engineering products. ',
    }
    
]

export default ProductsOneData;
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
        desc: 'JM Gears and Engineering manufactures high-efficiency cement mills, kiln shells, girth gears, and support rollers that are designed for maximum grinding efficiency, durability, and seamless installation in large cement plant operations.',
    },

    {
        id: uuidv4(),
        bg: bg2,
        icon: 'interior-design',
        title: 'Sugar Industry',
        desc: 'Our gears, mill heads, and industrial pinions always crush without fault or mechanical failure, increasing throughput and profitability in today sugar processing operations. ',
    },

    {
        id: uuidv4(),
        bg: bg3,
        icon: 'home',
        title: 'Chemical Industry',
        desc: 'Engineered corrosion-resistant gears and custom heavy engineering components ensure chemical manufacturers operate safely, stably, and with optimal performance even in the most corrosive process environments.',
    },

    {
        id: uuidv4(),
        bg: bg4,
        icon: 'varnish',
        title: 'Sponge iron Industry',
        desc: 'We manufacture kiln shells, gears, and support rollers for sponge iron processing that are built for performance and longevity in line with industrial specifications to minimize or eliminate downtime.',
    },

    {
        id: uuidv4(),
        bg: bg5,
        icon: 'sketch-1',
        title: 'Tyre Industry',
        desc: 'Our specialty gears and mill heads provide high-throughput on precision material handling for tire industry manufacturers, which allows them to maximize automation, process reliability, and overall operational efficiency',
    },
    {
        id: uuidv4(),
        bg: bg6,
        icon: 'sketch-1',
        title: 'Steel Industry',
        desc: 'JM Gear & Engineering provides heavy forged shafts, gearing assemblies, and engineering solutions for manufacturers, with an ongoing reputation for quality and dependability - leading manufacturers have relied upon our products for steel manufacturing.',
    }
    
]

export default ProductsOneData;
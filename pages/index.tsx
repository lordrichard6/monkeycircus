import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { IProduct } from '../components/Product';
import Footer from '../components/Footer';
import Head from 'next/head';

import '../styles.scss';

interface IIndexProps {
    products: IProduct[]
}

const Index = (props: IIndexProps) => {
    return (
        <div className='app'>
            {/* background */}
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
             {/* background */}
            <Head>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.css" />
                <div id="snipcart" data-api-key="MGE4NGQ0YWUtNTM3Ny00ZjJjLWI4MTAtOTg2ZmMwYmM4NGJjNjM3MTc3OTMwMDM5NzAxMTA5" hidden></div>
                <script src="https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js"></script>
                <link rel="shortcut icon" href="/static/icon.png" />
            </Head>
            <Header />
            <main className='main'>
                {/* <img src="/static/aquarium.svg" alt="a" className="background-image" /> */}
                <div className="promotional-message">
                    <h3>REDISCOVER</h3>
                    <h2>Trained Monkeys</h2>
                    <p>See our <strong>exclusive collection of Monkeys</strong> available for everyone.</p>
                </div>
                <ProductList products={props.products} />
            </main>
            <Footer />
        </div>
    )
}

Index.getInitialProps = async () => {
    return {
        products: [
            {id: "nextjs_dancemonkey", name: "Dancing Monkey", price: 250, image: "../static/dance.png", description: "The Capuchin Monkey are considered to be the most intelligent of New World Monkeys. As a result they are often used in lab experiments. We train this one to dance tango, salsa, cha-cha-cha and breakdance."} as IProduct,
            {id: "nextjs_chillmonkey", name: "Chilled Monkey", price: 160, image: "../static/chill.jpg",description: "The Japanese Macaque is also called the Snow Monkey. It belongs to the Old World species. Two subspecies have been identified. They have a vital role in the early Buddhist religion. So after a long day at work he helps you relax. (Important: need to have a bathtub)"} as IProduct,
            {id: "nextjs_smell", name: "Sniffer Monkey", price: 120, image: "../static/smell.jpg", description: "The Proboscis Monkey is also called the Monyet Belanda Monkey, which means the long nosed Monkey. It belongs to the Old World classification. In the Egyptian Culture they were worshipped as a very unique animal and believed to be special to the gods. With his acute sense of smell he helps you find insects and small animals."} as IProduct,
            {id: "nextjs_laugh", name: "Laughting Mokey", price: 99.00, image: "../static/laugh.jpg", description: "The crested black macaque is an Old World monkey that lives in the Tangkoko reserve in the northeastern tip of the Indonesian island of Sulawesi (Celebes), as well as on smaller neighboring islands. We trained them to tell jokes and do stupid stuff to make you laught."} as IProduct,
        ]
    }
}

export default Index
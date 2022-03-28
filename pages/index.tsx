import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organs/Navbar';
import Header from '../components/organs/Heading';
import Feature from '../components/organs/Feature';
import FeatureGame from '../components/organs/FeatureGame';
import Reached from '../components/organs/Reached';
import Story from '../components/organs/Story';
import Footer from '../components/organs/Footer';
import Head from 'next/head';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Head>
                <title>Hambahedon - Top Up terpercaya dan Termurah</title>
                <meta
                    name="description"
                    content="Kami menyediakan jutaan cara untuk membantuplayers menjadi pemenang sejati gampang mudah deh pokoknya"
                />
                <meta
                    property="og:title"
                    content="Kami menyediakan jutaan cara untuk membantuplayers menjadi pemenang sejati gampang mudah deh pokoknya"
                />
                <meta
                    property="og:description"
                    content="Kami menyediakan jutaan cara untuk membantuplayers menjadi pemenang sejati gampang mudah deh pokoknya"
                />
                <meta property="og:image" content="imageurlkalian" />
                <meta property="og:url" content="hambahedon" />
            </Head>
            <Navbar />
            <Header />
            <Feature />
            <FeatureGame />
            <Reached />
            <Story />
            <Footer />
        </>
    );
}

import './../styles/home.css';
import HeadlineNews from '../components/HeadlineNews';
import LatestNews from '../components/LatestNews';
import Footer from '../layouts/Footer';

function NewsPortal() {

    return (
        <>
            <HeadlineNews />
            <LatestNews />
            <Footer />
        </>
    )
}

export default NewsPortal; 

/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from '../navbar/MyNav';
import Carosello from '../jumbotron/Carousel';
import Feed from '../feed/Feed';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
      <MyNav />
      <Carosello />
      <Feed />
      <Footer />
    </>
  );
};

export default Home;

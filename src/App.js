/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/navbar/MyNav';
import Carosello from './components/jumbotron/Carousel';
import Feed from './components/feed/Feed';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <MyNav />
      <Carosello />
      <Feed />
      <Footer />
    </>
  );
};

export default App;

import Header from './Item-html/Header/header';
import Main from './Item-html/Main/main';
import Footer from './Item-html/Footer/footer';

import './App.scss';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Wrapper;


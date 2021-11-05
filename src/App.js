import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';
let quote1 = `fashion is not something that exist in dress only.
              fashion is in the sky, in the street. fashion has
              to do with ideas, the way we live, what is hapening.`;


function App() {
  return (
    <div className='app'>
      <Header/>
      <br/>
      <Banner/>
      <Section head='quotes' auther='coco chanel'>
        {quote1}
      </Section>
      <Footer/>
    </div>
  );
}

export default App;

'use client';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import store from './store/store';
import './globals.css';

export default function Home() {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Projets />
        <Contact />
        <Footer />
      </>
    </Provider>
  );
}

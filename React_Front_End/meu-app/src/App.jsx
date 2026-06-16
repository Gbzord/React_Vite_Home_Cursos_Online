import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import MyPath from './components/MyPath/MyPath';
import Capabilities from './components/Capabilities/Capabilities';
import ForCompanies from './components/ForCompanies/ForCompanies';
import Footer from './components/Footer/Footer';
import './styles/globalStyles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MyPath />
      <Capabilities />
      <ForCompanies />
      <Footer />
    </div>
  );
}

export default App;

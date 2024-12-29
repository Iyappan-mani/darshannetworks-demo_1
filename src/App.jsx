import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';

import './App.css'; // Import the CSS file
import FirstContainer from './components/FirstContainer';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import ProjectsList from './components/ProjectsList';
import Card from './components/Card';


const App = () => {

  const footerRef = useRef(null);
  const ClientsRef = useRef(null);


  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToClients = () => {
    ClientsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="app-container">
      <Header scrollToFooter={scrollToFooter} scrollToClients={scrollToClients} />
      <div className="scrollable-container">
         <div className="section">
          <FirstContainer />
        </div>
        <div className="section">
          <WhatWeDo />
        </div>
        <div className="section">
          <ProjectsList />
        </div>
        {/* <div className="section py-5">
          <Card />
        </div> */}

        {/* <div style={{ marginTop: '50em' }}></div> */}
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

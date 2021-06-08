import './style/App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

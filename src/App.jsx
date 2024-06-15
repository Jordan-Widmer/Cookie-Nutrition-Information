import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChocolateCookieChart from './charts/ChocolateCookieChart';
import WhiteChocolateCookieChart from './charts/WhiteChocolateCookieChart';
import ComparisonChart from './charts/ComparisonChart';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ChocolateCookieChart />
        <WhiteChocolateCookieChart />
        <ComparisonChart />
      </main>
      <Footer />
    </div>
  );
};

export default App;

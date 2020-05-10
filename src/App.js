import React from 'react';
import { SWRConfig } from 'swr';
import fetcher from 'Utils/fetcher';
import './App.css';
import News from 'Components/News';
import Footer from 'Components/Footer';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
      }}
    >
      <div className="App">
        <h1 className='heading'>Corona Positive</h1>
        <p className='sub'>Crowdsourced uplifting corona news</p>
        <News />
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import SeasonalProduce from './SeasonalProduce';

function App(){
  return (
    <div className="container">
      <Header/>
      <hr/>
      <div className="row">
        <div className="col-md-6">
          <Schedule/>
        </div>
        <div className="col-md-6">
          <SeasonalProduce/>
        </div>
      </div>
    </div>
  );
}

export default App;

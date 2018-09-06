import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import SeasonalProduce from './SeasonalProduce';
import bg from './../img/bg1.jpg';


function App(){
  var backgroundStyle = {
    backgroundImage: `url(${bg})`
  }
  var containerStyle = {
    backgroundColor: 'rgb(255, 255, 255, 0.4)'
  }
  return (
    <div style={backgroundStyle}>
      <div className="container" style={containerStyle}>
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
    </div>
  );
}

export default App;

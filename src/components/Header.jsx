import React from 'react';
import logo from './../img/organic.png';

function Header() {
  return (
    <div>
      <style jsx>{`
        .App {
          font-size: 25px;
          text-align: center;
        }

        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 40px;
        }

        @keyframes App-logo-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}</style>
        <div className="App">
          <h1>Avery's <img src={logo} className="App-logo" alt="logo" />rganics</h1>
        </div>
    </div>
  );
}

export default Header;

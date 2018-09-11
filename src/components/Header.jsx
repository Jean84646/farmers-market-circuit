import React from 'react';
import logo from './../img/organic.png';

function Header() {
  return (
    <div>
      <style jsx>{`
        .App {
          font-size: 125px;
          text-align: center;
          color: #4d8c3c;
          font-family: 'EB Garamond', serif;
          font-weight:bold;
        }

        .App-logo {
          animation: App-logo-spin infinite 10s linear;
          height: 100px;
        }

        @keyframes App-logo-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}</style>
        <div className="App">
          <p>Avery's <img src={logo} className="App-logo" alt="logo" />rganics</p>
        </div>
    </div>
  );
}

export default Header;

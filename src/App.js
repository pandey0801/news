// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
// import cow from "my-app\src\cow.jpg"
import cow from './cow.jpg';

function App() {
  return (
    <div className="App">
      <div className="news-card">
        <img 
          src={cow}
          alt="Livestock" 
          className="news-image"
        />
        <div className="news-content">
          <div className="badge">HEALTH NEWS</div>
          <h1>A NEW KIND OF VIRUS HAS BEEN FOUND IN RIMBERIO CITY.</h1>
          <p className="date">19/01/2024</p>
          <p>Many livestock are suspected of being infected with a mysterious virus. The total number of livestock deaths is 21 cows and 48 goats.</p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default App;

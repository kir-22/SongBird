import React, { Component } from 'react';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import './index.scss';

// const App = () => {
//   return (
//     <div className={`container-fluid app`}>
//       <Header/>
//     </div>
//   );
// };

// export default App;


class App extends Component {
  render() {
    return (
      <div className={`container-fluid app`}>
        <Header/>
        <Question/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import './index.scss';
import Birds from './data/data.js';

// const App = () => {
//   return (
//     <div className={`container-fluid app`}>
//       <Header/>
//     </div>
//   );
// };

// export default App;


class App extends Component {
  constructor(props) {
    super(props);
    this.menu = [
      {
        id: 1,
        name: 'Разминка',
      },
      {
        id: 2,
        name: 'Воробьиные',
      },
      {
        id: 3,
        name: 'Лесные птицы',
      },
      {
        id: 4,
        name: 'Певчие птицы',
      },
      {
        id: 5,
        name: 'Хищные птицы',
      },
      {
        id: 6,
        name: 'Морские птицы',
      },
    ];
  }
  state = {
    score: 0,
    level: 0,
    birds: Birds[0],
  };
  componentDidMount() {
    console.log(Birds);
  };

  next = () => {
    this.setState({
      level: this.state.level + 1,
      birds: Birds[this.state.level + 1],
    });
  };

  changeScore = value => {
    this.setState({
      score: value,
    });
  };

  render() {console.log('birds', this.state.birds);
    return (
      <div className={`container-fluid app`}>
        <Header
          score={this.state.score}
          level={this.state.level}
          menu={this.menu}
        />
        <Question />
        <button onClick={() => {this.next()}}>Левел UP</button>
      </div>
    );
  }
}

export default App;

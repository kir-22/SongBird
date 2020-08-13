import React, { Component } from 'react';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import AnswerInfo from './components/AnswersInfo/index.jsx';
import CustomButton from './components/CustomButtom/CustomButton.jsx';
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
    selectedItem: null,
    disabledNextLevel: true,
  };
  componentDidMount() {
    console.log(Birds);
    this.getRandomItem();
  };

  getRandomItem = () => {
    const index = Math.floor(Math.random() * Math.floor(6));
    console.log('index: ', index, this.state.birds);
    this.setState({
      selectedItem: this.state.birds[index],
    });
  }

  next = () => {
    this.setState({
      level: this.state.level + 1,
      birds: Birds[this.state.level + 1],
      disabledNextLevel: true,
    }, () => this.getRandomItem());
  };

  changeScore = value => {
    console.log('value: ', value);
    this.setState({
      score: Math.floor(this.state.score + value),
      disabledNextLevel: false,
    });
  };

  render() {
    return (
      <div className={`container-fluid app`}>
        <Header
          score={this.state.score}
          level={this.state.level}
          menu={this.menu}
        />
        <Question
          questions={this.state.birds}//не нужно
          question={this.state.selectedItem}
          disabledNextLevel={this.state.disabledNextLevel}
        />
        <AnswerInfo
          questions={this.state.birds}
          answer={this.state.selectedItem}
          getRightAnswer={ point => this.changeScore(point) }
        />
        <CustomButton
          onClick={() => { this.next() }}
          disabled={this.state.disabledNextLevel}
        />
      </div>
    );
  }
}

export default App;

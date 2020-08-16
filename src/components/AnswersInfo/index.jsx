import React, { Component } from 'react';
import Lists from './components/Lists.jsx';
import Info from './components/Info.jsx';
import error from '../../assets/audio/error.mp3';
import win from '../../assets/audio/win.mp3';
import style from './styles/AnswerInfo.module.scss';

class index extends Component {
  constructor(props){
    super(props);
    this.errorRef = React.createRef();
    this.winRef = React.createRef();
  };
  state = {
    selectId: [],
    pointer: 5,
    winAnswer: false,
    infoData: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('prevState: ', prevState);
    // console.log('prevProps: ', prevProps);
    // console.log('props', this.props);
    if (prevProps.questions[0].name !== this.props.questions[0].name) {
      this.setState({
        winAnswer: false,
        infoData: false,
        pointer: 5,
        selectId: [],
      });
    }

  };

  onError = () => {
    this.errorRef.current.src = error;
    this.errorRef.current.play();
  }
  onWin = () => {
    this.errorRef.current.src = win;
    this.winRef.current.play();
  }

  selectedItem = data => {
    const { winAnswer, pointer } = this.state;
    const { answer } = this.props;
    const _selectId = answer.id === data.id || !!winAnswer
      ? [...this.state.selectId]
      : [...new Set([...this.state.selectId, data.id])];
    const yes = answer.id === data.id;
    answer.id === data.id 
      ? this.onWin()
      : this.onError();
    this.setState({
      selectId: _selectId,
      winAnswer: yes ? data.id : winAnswer,
      infoData: data,
    }, () => {
        !!this.state.winAnswer
          ? this.props.getRightAnswer(pointer - this.state.selectId.length)
          : null
    });

  };
  getInfoData = data => {
    this.setState({
      infoData: data,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row pb-4">
          <div className="col-sm text-center mb-2">
            <Lists
              data={this.props.questions}
              onClick={data => { !!this.state.winAnswer ? this.getInfoData(data) : this.selectedItem(data)}}
              checkedAnswers={this.state.selectId}
              winAnswer={this.state.winAnswer}
            />
          </div>
          <div className="col-sm text-center mb-2">
            <Info
              data = {this.state.infoData}
            />
          </div>
        </div>
        <audio ref={this.errorRef} src={error} hidden/>
        <audio ref={this.winRef} src={win} hidden/>
      </div>
    );
  }
}

export default index;

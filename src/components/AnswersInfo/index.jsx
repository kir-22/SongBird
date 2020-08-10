import React, { Component } from 'react';
import Lists from './components/Lists.jsx';
import Info from './components/Info.jsx';
import style from './styles/AnswerInfo.module.scss';

class index extends Component {
  state = {
    selectId: [],
    pointer: 10,
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
        pointer: 10,
        selectId: [],
      });
    }

  };


  selectedItem = data => {
    // console.log('data: ', data);
    const { winAnswer, pointer } = this.state;
    const { answer } = this.props;
    // console.log(answer.id === data.id || !!winAnswer);
    const _selectId = answer.id === data.id || !!winAnswer
      ? [...this.state.selectId]
      : [...new Set([...this.state.selectId, data.id])];
    // console.log('_selectId: ', _selectId);
    this.setState({
      selectId: _selectId,
      winAnswer: answer.id === data.id ? data.id : winAnswer,
      infoData: data,
    }, () => {
      !!this.state.winAnswer ? this.props.getRightAnswer(pointer) : null
    });

  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <Lists
              data={this.props.questions}
              onClick={data => this.selectedItem(data)}
              checkedAnswers={this.state.selectId}
              winAnswer={this.state.winAnswer}
            />
          </div>
          <div className="col-sm text-center ">
            <Info
              data = {this.state.infoData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
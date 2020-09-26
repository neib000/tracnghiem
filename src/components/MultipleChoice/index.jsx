import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../redux/action";
import { SET_ANSWER } from "../../redux/action/type";

class MultipleChoice extends Component {
  chooseAnswer = (item) => {
    this.props.dispatch(
      createAction(SET_ANSWER, { QuestionId: this.props.item.id, item })
    );
  };
  //render 4 câu trả lời
  renderAnswer = () => {
    return this.props.item.answers.map((item, index) => {
      return (
        <div key={index}>
          <input
            onClick={() => this.chooseAnswer(item)}
            value={item.id}
            className={item.id}
            type="radio"
            name={this.props.item.id}
          />
          <label>{item.content}</label>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <p>
          Câu {this.props.item.id}: {this.props.item.content}
        </p>
        {this.renderAnswer()}
      </>
    );
  }
}

export default connect()(MultipleChoice);

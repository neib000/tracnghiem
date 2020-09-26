import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../redux/action";
import { SET_ANSWER } from "../../redux/action/type";

class FillInBlank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      exact: "",
    };
  }
  handleChange = (e) => {
    this.setState(
      {
        name: e.target.value,
      },
      () => {
        if (
          this.state.name.toLowerCase() ===
          this.props.item.answers[0].content.toLowerCase()
        ) {
          this.props.item.answers[0].exact = true;
        } else {
          this.props.item.answers[0].exact = false;
        }
        this.props.dispatch(
          createAction(SET_ANSWER, {
            QuestionId: this.props.item.id,
            item: this.props.item.answers[0],
          })
        );
      }
    );
  };

  render() {
    return (
      <div>
        <p>
          Câu {this.props.item.id}: {this.props.item.content}
        </p>
        <input
          onChange={this.handleChange}
          type="text"
          id={this.props.item.id}
        />
      </div>
    );
  }
}
export default connect()(FillInBlank);

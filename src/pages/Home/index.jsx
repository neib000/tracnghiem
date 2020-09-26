import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import FillInBlank from "../../components/FillInBlank";
import MultipleChoice from "../../components/MultipleChoice";
// import MultipleChoice from "../../components/multipleChoice";
import { createAction } from "../../redux/action";
// import { FillInBlank } from "../../redux/action/fillInBlank";
// import { mapData } from "../../redux/action/mapDataQuestion";
import { SET_DANHSACH } from "../../redux/action/type";

class Home extends Component {
  renderAnswer = () => {
    return this.props.questionList.map((item, index) => {
      if (item.questionType === 1) {
        return (
          <div key={index}>
            <MultipleChoice item={item} />
          </div>
        );
      }
      return (
        <div key={index}>
          <FillInBlank item={item} />
        </div>
      );
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;

    for (let question of this.props.answerList) {
  
      if (question.item.exact) result++;
    }
    alert("Kết quả:" + result + "/" + this.props.questionList.length);
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.renderAnswer()}
        <button onClick={this.handleSubmit} type="submit">
          Nộp bài
        </button>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
    })
      .then((res) => {
        console.log(res);
        // let data = mapData(res.data);
        // console.log(data);
        this.props.dispatch(createAction(SET_DANHSACH, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapToStateProps = (state) => {
  return {
    questionList: state.tracnghiem.DanhSachCauHoi,
    answerList: state.tracnghiem.DanhSachDapAn,
  };
};
export default connect(mapToStateProps)(Home);

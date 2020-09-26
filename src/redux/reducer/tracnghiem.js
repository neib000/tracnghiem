import { SET_ANSWER, SET_DANHSACH } from "../action/type";

let initialState = {
  DanhSachCauHoi: [],
  DanhSachDapAn: [],
};

const findById = (DanhSachDapAn, QuestionId) => {
  for (let i = 0; i < DanhSachDapAn.length; i++) {
    if (DanhSachDapAn[i].QuestionId === QuestionId) {
      return i;
    }
  }
  return -1;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DANHSACH:
      return { ...state, DanhSachCauHoi: payload };
    case SET_ANSWER:
      let cloneDanhSachDapAn = [...state.DanhSachDapAn];
      const index = findById(cloneDanhSachDapAn, payload.QuestionId);

      if (index !== -1) {
        cloneDanhSachDapAn[index] = payload;
      } else {
        cloneDanhSachDapAn.push(payload);
      }
      state.DanhSachDapAn = cloneDanhSachDapAn;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

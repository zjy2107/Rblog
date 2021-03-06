import {
  GET_ALL_MENU_SUCCESS,
} from '.././actions/menu';

const initialState = {
  items: [],
  navpath: []
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {

    //获取所有菜单
    case GET_ALL_MENU_SUCCESS:
      return Object.assign({}, initialState, {
        items: action.payload.data
      });

    default:
      return state;
  }
}
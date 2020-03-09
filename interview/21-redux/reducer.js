const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        count: state.count + 1
      };
    case 'subtract':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return initialState;
  }

}

module.exports = reducer;
const createStore = require('./index')


const store = createStore(reducer)      //创建store
store.dispatch({ type: 'plus' })        //执行加法操作,给count加1
console.log(store.getState())           //获取state




// import { reducer } from './reducer';
const reducer = require('./reducer');
const createStore = () => {
  let currentState = {};
  let observers = []; // 观察者队列
  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach(fn => fn());
  }

  function subscribe(fn) {
    observers.push(fn);
  }

  dispatch({type: '@@REDUX_INIT'});  //初始化
  return {getState, dispatch, subscribe};
};
module.exports = createStore;



// Здесь создается хранилище кому будет передоваться компонент
import {createStore, applyMiddleware} from 'redux'
export default () => {

};

let store = createStore(todos, ['Use Redux']);

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState());

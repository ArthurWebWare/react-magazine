// Здесь создается хранилище кому будет передоваться компонент
import {createStore, applyMiddleware} from 'redux' ;
import logger from 'redux-logger' ;

function reducer(state = [], action) {
  return state;
};

const create = () => {
  const store = createStore(reducer, applyMiddleware(logger));
  return store;
};

const store = create();

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
});

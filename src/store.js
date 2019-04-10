// Здесь создается хранилище кому будет передоваться компонент
import {createStore, applyMiddleware} from 'redux' ;
import logger from 'redux-logger' ;
// для того чтобы все reduser объединялись в один и возвращали сосотояние
import rootReducer from './reducers';

//Метод который будет создавать хранилище и возвращать нам
export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};

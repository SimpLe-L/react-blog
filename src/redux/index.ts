import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga/sagas/index';


const sagaMiddleware = createSagaMiddleware();
// 创建一个增强器函数
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);

export default store;
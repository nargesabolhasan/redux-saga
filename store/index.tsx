import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import catSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer, // Pass rootReducer directly, not as an object
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware), // Use getDefaultMiddleware
});

sagaMiddleware.run(catSaga);

export default store;
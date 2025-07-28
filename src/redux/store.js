import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import collectionReducer from './collectionDucks'

const rootReducer = combineReducers({
    collection: collectionReducer
})

const composeEnhancers = 
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : compose;

export default function generateStore(){
    const store = createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}
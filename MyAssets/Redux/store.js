import {createStore,combineReducers} from 'redux';

import burgerReducer from './Burger/burgerReducer';
import pizzaReducer from './Pizza/pizzareducer';

//combining burgerReducer and pizzaReducer in rootReducer
const rootReducer=combineReducers({
    burgerReducer:burgerReducer,
    pizzaReducer:pizzaReducer
})

//passing rootReducer to createStore
const store=createStore(rootReducer);

export default store;
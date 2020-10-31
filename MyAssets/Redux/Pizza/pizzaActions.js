import {PIZZA_INCREASE,PIZZA_DECREASE} from './pizzaActionsType';


//Action functions which return action type and optional payLoad to burgerReducer

export const increasePizzaAction=(parameter)=>{
    return{
        type:PIZZA_INCREASE,
        payload:parameter
    }
}

export const decreasePizzaAction=()=>{
    return{
        type:PIZZA_DECREASE
    }
}
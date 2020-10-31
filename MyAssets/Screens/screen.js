import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import {connect} from 'react-redux'
import {increaseBurgerAction,decreaseBurgerAction,increasePizzaAction,decreasePizzaAction}  from '../Redux/index'

class Screen extends Component {
    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{marginVertical:50}}>
                <Text> Number Of Burger = {this.props.numberOfBurger} </Text>
                <Button title="Increase Burger" onPress={()=>{this.props.increaseBurger(5)}}/>
                <Button title="Decrease Burger" onPress={()=>{this.props.decreaseBurger()}}/>
                </View>
                <View style={{marginVertical:50}}>
                <Text> Number Of Pizza = {this.props.numberOfPizza} </Text>
                <Button title="Increase Burger" onPress={()=>{this.props.increasePizza(5)}}/>
                <Button title="Decrease Burger" onPress={()=>{this.props.decreasePizza()}}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        numberOfBurger:state.burgerReducer.numberOfBurger,
        numberOfPizza:state.pizzaReducer.numberOfPizza
    }
}

const mapDispatchToProps=(dispatch)=>{
        return{
            increaseBurger:(parameter)=>{dispatch(increaseBurgerAction(parameter))},
            decreaseBurger:()=>{dispatch(decreaseBurgerAction())},

            increasePizza:(parameter)=>{dispatch(increasePizzaAction(parameter))},
            decreasePizza:()=>{dispatch(decreasePizzaAction())}
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Screen);

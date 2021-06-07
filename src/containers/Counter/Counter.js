import React, { Component } from 'react';
//import * as actionTypes from '../../redux/action';
import * as actionCreator from '../../redux/action';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtracttCounter}  />
                <hr/>
                <button onClick={()=>this.props.onSubmitResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.resultsList.map((res)=>{
                      return  <li key={res.id} onClick={()=>this.props.onDeleteResult(res.id)}>{res.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //depicting what we want from the stored state
    //console.log(state.results);
return {
    ctr:state.ctr.counter,
    resultsList:state.res.results
}
}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        //onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: ()=> dispatch({type:actionTypes.DECREMENT}),
        onAddCounter: ()=> dispatch({type:actionTypes.ADD,val:5}),
        onSubtracttCounter: ()=> dispatch({type:actionTypes.SUBTRACT,val:5}),
        onSubmitResult:(currentCounter)=> dispatch({type:actionTypes.STORE_RESULT,prevCounter:currentCounter}),
        onDeleteResult:(id)=> dispatch({type:actionTypes.DELETE_RESULT,resultId:id}),
    }
}
*/


const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: ()=> dispatch(actionCreator.decrement()),
        onAddCounter: ()=> dispatch(actionCreator.add(5)),
        onSubtracttCounter: ()=> dispatch(actionCreator.subtract(5)),
        onSubmitResult:(currentCounter)=> dispatch(actionCreator.submitResult(currentCounter)),
        onDeleteResult:(id)=> dispatch(actionCreator.deleteResult(id)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Counter);
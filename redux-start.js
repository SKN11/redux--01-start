const redux = require('redux');
const createStore = redux.createStore;

//state
const initialState={
    counter:0
}

//Reducer -- it need two argx action and state
const rootReducer = (state = initialState,action) => {
    if(action.type==='INC_COUNTER')
    return ({
        ...state,
        counter:state.counter +1
    })

    if(action.type==='ADD_COUNTER')
    return ({
        ...state,
        counter:state.counter +10
    })

    return state;
}

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log("[Subscribe]");
    console.log(store.getState());

})


//Dispatching Action
store.dispatch({
    type : 'INC_COUNTER',
})
store.dispatch({
    type : 'ADD_COUNTER',
    value:10
})

console.log(store.getState());




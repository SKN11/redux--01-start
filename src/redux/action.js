export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type:INCREMENT
    }
}


export const decrement = () => {
    return {
        type:DECREMENT
    }
}


export const add = (value) => {
    return {
        type:ADD,
        val:value
    }
}

export const subtract = (value) => {
    return {
        type:SUBTRACT,
        val:value
    }
}
export const saveResult = (preCtr) => {
    return {
        type:STORE_RESULT,
        prevCounter:preCtr
    }
}

export const submitResult = (res) => { //it is Action Creators
    return (dispatch,getState) => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        setTimeout(()=> dispatch(saveResult(res)),2000); //it will be dispatched by middleware redux thunk
        
    }
}

export const deleteResult = (resId) => {
    return {
        type:DELETE_RESULT,
        resultId:resId
    }
}
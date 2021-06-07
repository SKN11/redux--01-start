import * as actionTypes from '../action'

const initialState= {
results:[],
}

const reducer = (state= initialState,action) =>{
    switch(action.type) {
        case (actionTypes.STORE_RESULT):
                // if(state.isCounterChange)
                // {

                //     console.log('value is same');
                //     return {
                //         ...state
                //     }
                // }
                //const c=action.counter;
                //let resultsCopy = state.results.concat({id:new Date(),value : state.counter})
                //console.log(resultsCopy);
                //const res1 = state.results.filter(r => r.value === c);
                //console.log(res1);

                return{ 
                    ...state,
                    //isCounterChange:true,
                    results : state.results.concat({id:new Date(),value : action.prevCounter})
                    //results : res1
                }

        case (actionTypes.DELETE_RESULT):
                const id=action.resultId;
                //const res= [...state.results]
                //res.splice(id,1)
                const res = state.results.filter(r => r.id !== id)

            return{ 
                ...state,
                results : res
            }
            
    }
    
    

return state;
     
}


export default reducer;
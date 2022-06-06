import { createReducer,on } from "@ngrx/store";
import { inc } from "../action/increment.action";
import { sehroz } from "../store";

export const incrreducer=createReducer(
    sehroz,
    on(inc, (state,action)=>{
        return{
                ...state,
                counter:state.counter + action.badjaavalue 
        }
    })
)
import { INCREMENT,DECREMENT } from "../Actions/Actions"
let init={count:0}
export const Counthandel=(state=init, action:any)=>
{
    switch (action.type)
    {
    case INCREMENT:
        return Object.assign({},state,{count:action.count});
    case DECREMENT:
        return Object.assign({},state,{count:action.count});
    default: return{ state}
    }
}
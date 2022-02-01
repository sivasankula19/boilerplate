export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"
export const incrementcount = (count:number)=>{ 
    return{
        type: INCREMENT,
        count
    }
}
export const decrementcount = (count:number)=>{ 
    return {
        type: DECREMENT,
        count
    }
}
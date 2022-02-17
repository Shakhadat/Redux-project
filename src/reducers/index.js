
export const Counter=(state=[], action)=>{
    if(action.type==='ADD_TODO'){
        return[
            ...state, action]
    }
    else if(action.type==='DELETE_TODO'){
           return state.filter((item)=>{
                return action.id!==item.id;
            })
    }else if(action.type==='CLEAR_ALL'){
        return [];
    }
    return state;
}

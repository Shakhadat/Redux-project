import {v4} from 'uuid'
export const counterINC=(count)=>{
    return{
        type:"INC",
        count:count
    }
}

// todo actions:
export const add_todo=(value)=>{
    return{
        type:"ADD_TODO",
        id: v4(),
        value
        
    }
}

export const delete_todo=(id)=>{
    console.log("actionid", id)
    return{
        type:"DELETE_TODO",
        id
    }
}

export const clear_todo=()=>{
    return{
        type:"CLEAR_ALL"
    }
}


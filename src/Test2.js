import React from 'react';
import { connect } from 'react-redux';
import { counterINC } from './actions';

const Test = (props)=> {

    const onUpdateHandler=()=>{
        props.onUpdateCount(props.count+1)
    }

return(
    <div style={{borderWidth:3, borderColor:"red"}}>
        <h1>{props.count}</h1>
        <button onClick={onUpdateHandler}>Up</button>
    </div>
);
}

    const mapStateToProps=(state)=>{
        return {
            count: state.count
        }
    }

    const mapDispatchToProps = dispatch=>{
        return{
            onUpdateCount: count=>{
                dispatch(counterINC(count))
            }
        }
    }
   
export default connect(mapStateToProps, mapDispatchToProps)(Test)
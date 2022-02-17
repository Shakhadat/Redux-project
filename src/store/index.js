import {createStore} from 'redux';
import { Counter } from '../reducers';
import throttle from 'lodash/throttle'

// store o'ziga reducerlarni oladi;

export const store=createStore(Counter);

store.subscribe(throttle(()=>{
    // console.log(store.getState())
    store.getState();
}))
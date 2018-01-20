import {createStore} from 'react-redux';

const  createStore = reducer =>{
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
    };

    const subscribe = listener =>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l => l!== listener);
        }
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};


import * as api from '../api';

//action creators (actions creators are functions that return actions. )
const getPosts = () => async (dispatch) => { //since we are dealing with async login, we need to add this async logic
    const action = { type: 'fetch_ALL', payload: []}

    dispatch(action); //this is how it#s done with redux thunk. instead of returning an action, we dispatch it.
}
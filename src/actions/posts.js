import * as api from '../api';

//action creators (actions creators are functions that return actions. )
export const getPosts = () => async (dispatch) => { //since we are dealing with async login, we need to add this async logic
    try {
        //fetch all data from the api
        const { data } = await api.fetchPosts(); //{ data } represents the posts.

        dispatch({type: 'FETCH_ALL', payload: data}); //this is how it#s done with redux thunk. instead of returning an action, we dispatch it.

    } catch (error) {
        console.log(error.message);
    }
    
   

   
}
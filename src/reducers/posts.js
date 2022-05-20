export default (posts = [], action) => { //since this reducer is not being used, for now just function export default. 
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload; //this will retrieve our posts
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

// //since this reducer is not being used, for now just function export default. 
// const reducer = (posts, action) => { 
//     switch(action.type) {
//         case 'FETCH_ALL':
//             return posts;
//         case 'CREATE':
//             return posts;
//         default:
//             return posts;
//     }
// }
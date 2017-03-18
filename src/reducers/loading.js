import { ActionTypes } from '../constants';

export const loading = (state=false,action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS: {
            return false;
        }
        default:
            return state;
    }
}
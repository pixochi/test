import { combineReducers } from 'redux';
import { posts }  from './posts';
import { errors } from './errors';

const testReducer = (state = "defaultStateValue",action) => {
    if(action.type === "TEST"){
        console.log("Action 'TEST' was dispatched.");
        return "test works?"
    }
    return state;
}

const rootReducer = combineReducers({
    posts,
    errors,
    test: testReducer
});

export default rootReducer;

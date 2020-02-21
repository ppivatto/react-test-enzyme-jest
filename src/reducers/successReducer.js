import { actionTypes } from '../actions';
/**
 * @function successReducer
 * @param {boolean} state
 * @param {object} action
 * @return {boolean}
 */
export default (state = false, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_GUESS): 
            return true;
            
        default:
            return state;
    }
};
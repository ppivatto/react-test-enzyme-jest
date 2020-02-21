import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState)  => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    
    return createStoreWithMiddleware(rootReducer, initialState)
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'props',
        component.name,
        null
    );
    
    expect(propError).toBeUndefined();
};
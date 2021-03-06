import every from 'lodash.every';
import isFunction from 'lodash.isfunction';
import isPlainObject from 'lodash.isplainobject';
import forEach from 'lodash.foreach';
import indexOf from 'lodash.indexof';
import values from 'lodash.values';

import validateActionType from './validateActionType';

let isDomainMap,
    isActionMap;

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
isDomainMap = (map) => {
    return every(map, isPlainObject);
};

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
isActionMap = (map) => {
    return every(map, isFunction);
};

export default (reducer) => {
    let iterator,
        actionIndex = [];

    /**
     * @param {Object} branch
     */
    iterator = (branch) => {
        forEach(branch, (value, domainName) => {
            if (isActionMap(value)) {
                forEach(value, (action, type) => {
                    try {
                        validateActionType(type);
                    } catch (e) {
                        throw new Error('Reducer definition object action handler types must be valid action types.');
                    }

                    if (indexOf(actionIndex, type) !== -1) {
                        throw new Error('Reducer definition object action handler types must be unique.');
                    }

                    actionIndex.push(type);
                });
            } else if (isDomainMap(value)) {
                iterator(branch[domainName]);
            } else {
                throw new Error('Reducer definition object value object all values must correspond to a function (action map) or an object (domain).');
            }
        });
    };

    // values(reducers).length is used to ignore empty reducer definition.
    if (isActionMap(reducer) && values(reducer).length) {
        throw new Error('Reducer definition object must begin with a domain definition.');
    }

    iterator(reducer);
};

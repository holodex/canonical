import first from 'lodash.first';
import difference from 'lodash.difference';
import keys from 'lodash.keys';
import isPlainObject from 'lodash.isplainobject';
import isUndefined from 'lodash.isundefined';
import isBoolean from 'lodash.isboolean';

import validateActionType from './validateActionType';

export default (action) => {
    let unknownProperty;

    if (!isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (isUndefined(action.type)) {
        throw new Error('Action definition object must define "type" property.');
    }

    try {
        validateActionType(action.type);
    } catch (e) {
        throw new Error('Action definition object "type" property value must be a valid action type.');
    }

    if (!isUndefined(action.payload) && !isPlainObject(action.payload)) {
        throw new Error('Action definition object "payload" property value must be a plain object.');
    }

    if (!isUndefined(action.meta) && !isPlainObject(action.meta)) {
        throw new Error('Action definition object "meta" property value must be a plain object.');
    }

    if (!isUndefined(action.error) && !isBoolean(action.error)) {
        throw new Error('Action definition object "error" project value must be a boolean.');
    }

    unknownProperty = first(difference(keys(action), ['type', 'payload', 'meta', 'error']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};

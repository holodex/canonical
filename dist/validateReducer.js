'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashEvery = require('lodash.every');

var _lodashEvery2 = _interopRequireDefault(_lodashEvery);

var _lodashIsfunction = require('lodash.isfunction');

var _lodashIsfunction2 = _interopRequireDefault(_lodashIsfunction);

var _lodashIsplainobject = require('lodash.isplainobject');

var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

var _lodashForeach = require('lodash.foreach');

var _lodashForeach2 = _interopRequireDefault(_lodashForeach);

var _lodashIndexof = require('lodash.indexof');

var _lodashIndexof2 = _interopRequireDefault(_lodashIndexof);

var _lodashValues = require('lodash.values');

var _lodashValues2 = _interopRequireDefault(_lodashValues);

var _validateActionType = require('./validateActionType');

var _validateActionType2 = _interopRequireDefault(_validateActionType);

var isDomainMap = undefined,
    isActionMap = undefined;

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
isDomainMap = function (map) {
    return (0, _lodashEvery2['default'])(map, _lodashIsplainobject2['default']);
};

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
isActionMap = function (map) {
    return (0, _lodashEvery2['default'])(map, _lodashIsfunction2['default']);
};

exports['default'] = function (reducer) {
    var iterator = undefined,
        actionIndex = [];

    /**
     * @param {Object} branch
     */
    iterator = function (branch) {
        (0, _lodashForeach2['default'])(branch, function (value, domainName) {
            if (isActionMap(value)) {
                (0, _lodashForeach2['default'])(value, function (action, type) {
                    try {
                        (0, _validateActionType2['default'])(type);
                    } catch (e) {
                        throw new Error('Reducer definition object action handler types must be valid action types.');
                    }

                    if ((0, _lodashIndexof2['default'])(actionIndex, type) !== -1) {
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
    if (isActionMap(reducer) && (0, _lodashValues2['default'])(reducer).length) {
        throw new Error('Reducer definition object must begin with a domain definition.');
    }

    iterator(reducer);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlUmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OzsyQkFBa0IsY0FBYzs7OztnQ0FDVCxtQkFBbUI7Ozs7bUNBQ2hCLHNCQUFzQjs7Ozs2QkFDNUIsZ0JBQWdCOzs7OzZCQUNoQixnQkFBZ0I7Ozs7NEJBQ2pCLGVBQWU7Ozs7a0NBRUgsc0JBQXNCOzs7O0FBRXJELElBQUksV0FBVyxZQUFBO0lBQ1gsV0FBVyxZQUFBLENBQUM7Ozs7OztBQU1oQixXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUs7QUFDbkIsV0FBTyw4QkFBTSxHQUFHLG1DQUFnQixDQUFDO0NBQ3BDLENBQUM7Ozs7OztBQU1GLFdBQVcsR0FBRyxVQUFDLEdBQUcsRUFBSztBQUNuQixXQUFPLDhCQUFNLEdBQUcsZ0NBQWEsQ0FBQztDQUNqQyxDQUFDOztxQkFFYSxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFJLFFBQVEsWUFBQTtRQUNSLFdBQVcsR0FBRyxFQUFFLENBQUM7Ozs7O0FBS3JCLFlBQVEsR0FBRyxVQUFDLE1BQU0sRUFBSztBQUNuQix3Q0FBUSxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFLO0FBQ25DLGdCQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNwQixnREFBUSxLQUFLLEVBQUUsVUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFLO0FBQzdCLHdCQUFJO0FBQ0EsNkRBQW1CLElBQUksQ0FBQyxDQUFDO3FCQUM1QixDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1IsOEJBQU0sSUFBSSxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQztxQkFDakc7O0FBRUQsd0JBQUksZ0NBQVEsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ25DLDhCQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7cUJBQ3JGOztBQUVELCtCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMxQixDQUFDLENBQUM7YUFDTixNQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNCLHdCQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDaEMsTUFBTTtBQUNILHNCQUFNLElBQUksS0FBSyxDQUFDLHFIQUFxSCxDQUFDLENBQUM7YUFDMUk7U0FDSixDQUFDLENBQUM7S0FDTixDQUFDOzs7QUFHRixRQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSwrQkFBTyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDaEQsY0FBTSxJQUFJLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0tBQ3JGOztBQUVELFlBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNyQiIsImZpbGUiOiJ2YWxpZGF0ZVJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlcnkgZnJvbSAnbG9kYXNoLmV2ZXJ5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC5pc2Z1bmN0aW9uJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC5pc3BsYWlub2JqZWN0JztcbmltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC5mb3JlYWNoJztcbmltcG9ydCBpbmRleE9mIGZyb20gJ2xvZGFzaC5pbmRleG9mJztcbmltcG9ydCB2YWx1ZXMgZnJvbSAnbG9kYXNoLnZhbHVlcyc7XG5cbmltcG9ydCB2YWxpZGF0ZUFjdGlvblR5cGUgZnJvbSAnLi92YWxpZGF0ZUFjdGlvblR5cGUnO1xuXG5sZXQgaXNEb21haW5NYXAsXG4gICAgaXNBY3Rpb25NYXA7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgT2JqZWN0Pn0gbWFwXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJZiBldmVyeSBvYmplY3QgcHJvcGVydHkgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmlzRG9tYWluTWFwID0gKG1hcCkgPT4ge1xuICAgIHJldHVybiBldmVyeShtYXAsIGlzUGxhaW5PYmplY3QpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBGdW5jdGlvbj59IG1hcFxuICogQHJldHVybiB7Qm9vbGVhbn0gSWYgZXZlcnkgb2JqZWN0IHByb3BlcnR5IHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gKi9cbmlzQWN0aW9uTWFwID0gKG1hcCkgPT4ge1xuICAgIHJldHVybiBldmVyeShtYXAsIGlzRnVuY3Rpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlZHVjZXIpID0+IHtcbiAgICBsZXQgaXRlcmF0b3IsXG4gICAgICAgIGFjdGlvbkluZGV4ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnJhbmNoXG4gICAgICovXG4gICAgaXRlcmF0b3IgPSAoYnJhbmNoKSA9PiB7XG4gICAgICAgIGZvckVhY2goYnJhbmNoLCAodmFsdWUsIGRvbWFpbk5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0FjdGlvbk1hcCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBmb3JFYWNoKHZhbHVlLCAoYWN0aW9uLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGlvblR5cGUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCBhY3Rpb24gaGFuZGxlciB0eXBlcyBtdXN0IGJlIHZhbGlkIGFjdGlvbiB0eXBlcy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mKGFjdGlvbkluZGV4LCB0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCBhY3Rpb24gaGFuZGxlciB0eXBlcyBtdXN0IGJlIHVuaXF1ZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkluZGV4LnB1c2godHlwZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRG9tYWluTWFwKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGJyYW5jaFtkb21haW5OYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCB2YWx1ZSBvYmplY3QgYWxsIHZhbHVlcyBtdXN0IGNvcnJlc3BvbmQgdG8gYSBmdW5jdGlvbiAoYWN0aW9uIG1hcCkgb3IgYW4gb2JqZWN0IChkb21haW4pLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gdmFsdWVzKHJlZHVjZXJzKS5sZW5ndGggaXMgdXNlZCB0byBpZ25vcmUgZW1wdHkgcmVkdWNlciBkZWZpbml0aW9uLlxuICAgIGlmIChpc0FjdGlvbk1hcChyZWR1Y2VyKSAmJiB2YWx1ZXMocmVkdWNlcikubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCBtdXN0IGJlZ2luIHdpdGggYSBkb21haW4gZGVmaW5pdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpdGVyYXRvcihyZWR1Y2VyKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
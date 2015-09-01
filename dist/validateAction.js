'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashFirst = require('lodash.first');

var _lodashFirst2 = _interopRequireDefault(_lodashFirst);

var _lodashDifference = require('lodash.difference');

var _lodashDifference2 = _interopRequireDefault(_lodashDifference);

var _lodashKeys = require('lodash.keys');

var _lodashKeys2 = _interopRequireDefault(_lodashKeys);

var _lodashIsplainobject = require('lodash.isplainobject');

var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

var _lodashIsundefined = require('lodash.isundefined');

var _lodashIsundefined2 = _interopRequireDefault(_lodashIsundefined);

var _lodashIsboolean = require('lodash.isboolean');

var _lodashIsboolean2 = _interopRequireDefault(_lodashIsboolean);

var _validateActionType = require('./validateActionType');

var _validateActionType2 = _interopRequireDefault(_validateActionType);

exports['default'] = function (action) {
    var unknownProperty = undefined;

    if (!(0, _lodashIsplainobject2['default'])(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if ((0, _lodashIsundefined2['default'])(action.type)) {
        throw new Error('Action definition object must define "type" property.');
    }

    try {
        (0, _validateActionType2['default'])(action.type);
    } catch (e) {
        throw new Error('Action definition object "type" property value must be a valid action type.');
    }

    if (!(0, _lodashIsundefined2['default'])(action.payload) && !(0, _lodashIsplainobject2['default'])(action.payload)) {
        throw new Error('Action definition object "payload" property value must be a plain object.');
    }

    if (!(0, _lodashIsundefined2['default'])(action.meta) && !(0, _lodashIsplainobject2['default'])(action.meta)) {
        throw new Error('Action definition object "meta" property value must be a plain object.');
    }

    if (!(0, _lodashIsundefined2['default'])(action.error) && (0, _lodashIsboolean2['default'])(action.error)) {
        throw new Error('Action definition object "error" project value must be a boolean.');
    }

    unknownProperty = (0, _lodashFirst2['default'])((0, _lodashDifference2['default'])((0, _lodashKeys2['default'])(action), ['type', 'payload', 'meta', 'error']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlQWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzJCQUFrQixjQUFjOzs7O2dDQUNULG1CQUFtQjs7OzswQkFDekIsYUFBYTs7OzttQ0FDSixzQkFBc0I7Ozs7aUNBQ3hCLG9CQUFvQjs7OzsrQkFDdEIsa0JBQWtCOzs7O2tDQUVULHNCQUFzQjs7OztxQkFFdEMsVUFBQyxNQUFNLEVBQUs7QUFDdkIsUUFBSSxlQUFlLFlBQUEsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLHNDQUFjLE1BQU0sQ0FBQyxFQUFFO0FBQ3hCLGNBQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTs7QUFFRCxRQUFJLG9DQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7S0FDNUU7O0FBRUQsUUFBSTtBQUNBLDZDQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLGNBQU0sSUFBSSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztLQUNsRzs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2hFLGNBQU0sSUFBSSxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQztLQUNoRzs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0NBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFELGNBQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUM3Rjs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLGtDQUFVLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN2RCxjQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7S0FDeEY7O0FBRUQsbUJBQWUsR0FBRyw4QkFBTSxtQ0FBVyw2QkFBSyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEYsUUFBSSxlQUFlLEVBQUU7QUFDakIsY0FBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO0tBQ25GO0NBQ0oiLCJmaWxlIjoidmFsaWRhdGVBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyc3QgZnJvbSAnbG9kYXNoLmZpcnN0JztcbmltcG9ydCBkaWZmZXJlbmNlIGZyb20gJ2xvZGFzaC5kaWZmZXJlbmNlJztcbmltcG9ydCBrZXlzIGZyb20gJ2xvZGFzaC5rZXlzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC5pc3BsYWlub2JqZWN0JztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2guaXN1bmRlZmluZWQnO1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICdsb2Rhc2guaXNib29sZWFuJztcblxuaW1wb3J0IHZhbGlkYXRlQWN0aW9uVHlwZSBmcm9tICcuL3ZhbGlkYXRlQWN0aW9uVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb24pID0+IHtcbiAgICBsZXQgdW5rbm93blByb3BlcnR5O1xuXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LicpO1xuICAgIH1cblxuICAgIGlmIChpc1VuZGVmaW5lZChhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgbXVzdCBkZWZpbmUgXCJ0eXBlXCIgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFsaWRhdGVBY3Rpb25UeXBlKGFjdGlvbi50eXBlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gb2JqZWN0IFwidHlwZVwiIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgYSB2YWxpZCBhY3Rpb24gdHlwZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGFjdGlvbi5wYXlsb2FkKSAmJiAhaXNQbGFpbk9iamVjdChhY3Rpb24ucGF5bG9hZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJwYXlsb2FkXCIgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGFjdGlvbi5tZXRhKSAmJiAhaXNQbGFpbk9iamVjdChhY3Rpb24ubWV0YSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJtZXRhXCIgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGFjdGlvbi5lcnJvcikgJiYgaXNCb29sZWFuKGFjdGlvbi5lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJlcnJvclwiIHByb2plY3QgdmFsdWUgbXVzdCBiZSBhIGJvb2xlYW4uJyk7XG4gICAgfVxuXG4gICAgdW5rbm93blByb3BlcnR5ID0gZmlyc3QoZGlmZmVyZW5jZShrZXlzKGFjdGlvbiksIFsndHlwZScsICdwYXlsb2FkJywgJ21ldGEnLCAnZXJyb3InXSkpO1xuXG4gICAgaWYgKHVua25vd25Qcm9wZXJ0eSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG9iamVjdCBtdXN0IG5vdCBkZWZpbmUgdW5rbm93biBwcm9wZXJ0aWVzLicpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
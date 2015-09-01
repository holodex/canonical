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

    if (!(0, _lodashIsundefined2['default'])(action.error) && !(0, _lodashIsboolean2['default'])(action.error)) {
        throw new Error('Action definition object "error" project value must be a boolean.');
    }

    unknownProperty = (0, _lodashFirst2['default'])((0, _lodashDifference2['default'])((0, _lodashKeys2['default'])(action), ['type', 'payload', 'meta', 'error']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlQWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzJCQUFrQixjQUFjOzs7O2dDQUNULG1CQUFtQjs7OzswQkFDekIsYUFBYTs7OzttQ0FDSixzQkFBc0I7Ozs7aUNBQ3hCLG9CQUFvQjs7OzsrQkFDdEIsa0JBQWtCOzs7O2tDQUVULHNCQUFzQjs7OztxQkFFdEMsVUFBQyxNQUFNLEVBQUs7QUFDdkIsUUFBSSxlQUFlLFlBQUEsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLHNDQUFjLE1BQU0sQ0FBQyxFQUFFO0FBQ3hCLGNBQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTs7QUFFRCxRQUFJLG9DQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7S0FDNUU7O0FBRUQsUUFBSTtBQUNBLDZDQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLGNBQU0sSUFBSSxLQUFLLENBQUMsNkVBQTZFLENBQUMsQ0FBQztLQUNsRzs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ2hFLGNBQU0sSUFBSSxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQztLQUNoRzs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0NBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFELGNBQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUM3Rjs7QUFFRCxRQUFJLENBQUMsb0NBQVksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsa0NBQVUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hELGNBQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztLQUN4Rjs7QUFFRCxtQkFBZSxHQUFHLDhCQUFNLG1DQUFXLDZCQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV4RixRQUFJLGVBQWUsRUFBRTtBQUNqQixjQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7S0FDbkY7Q0FDSiIsImZpbGUiOiJ2YWxpZGF0ZUFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJzdCBmcm9tICdsb2Rhc2guZmlyc3QnO1xuaW1wb3J0IGRpZmZlcmVuY2UgZnJvbSAnbG9kYXNoLmRpZmZlcmVuY2UnO1xuaW1wb3J0IGtleXMgZnJvbSAnbG9kYXNoLmtleXMnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLmlzcGxhaW5vYmplY3QnO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC5pc3VuZGVmaW5lZCc7XG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJ2xvZGFzaC5pc2Jvb2xlYW4nO1xuXG5pbXBvcnQgdmFsaWRhdGVBY3Rpb25UeXBlIGZyb20gJy4vdmFsaWRhdGVBY3Rpb25UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbikgPT4ge1xuICAgIGxldCB1bmtub3duUHJvcGVydHk7XG5cbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG11c3QgYmUgYSBwbGFpbiBvYmplY3QuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKGFjdGlvbi50eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG9iamVjdCBtdXN0IGRlZmluZSBcInR5cGVcIiBwcm9wZXJ0eS4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICB2YWxpZGF0ZUFjdGlvblR5cGUoYWN0aW9uLnR5cGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJ0eXBlXCIgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGFjdGlvbiB0eXBlLicpO1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoYWN0aW9uLnBheWxvYWQpICYmICFpc1BsYWluT2JqZWN0KGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG9iamVjdCBcInBheWxvYWRcIiBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LicpO1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoYWN0aW9uLm1ldGEpICYmICFpc1BsYWluT2JqZWN0KGFjdGlvbi5tZXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG9iamVjdCBcIm1ldGFcIiBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LicpO1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoYWN0aW9uLmVycm9yKSAmJiAhaXNCb29sZWFuKGFjdGlvbi5lcnJvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJlcnJvclwiIHByb2plY3QgdmFsdWUgbXVzdCBiZSBhIGJvb2xlYW4uJyk7XG4gICAgfVxuXG4gICAgdW5rbm93blByb3BlcnR5ID0gZmlyc3QoZGlmZmVyZW5jZShrZXlzKGFjdGlvbiksIFsndHlwZScsICdwYXlsb2FkJywgJ21ldGEnLCAnZXJyb3InXSkpO1xuXG4gICAgaWYgKHVua25vd25Qcm9wZXJ0eSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbiBkZWZpbml0aW9uIG9iamVjdCBtdXN0IG5vdCBkZWZpbmUgdW5rbm93biBwcm9wZXJ0aWVzLicpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
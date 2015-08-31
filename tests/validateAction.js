import {
    expect
} from 'chai';

import validateAction from './../src/validateAction';
import describeThrow from './describeThrow';

describe('validateAction()', () => {
    describe('when action is not an object', () => {
        it('throws an error', () => {
            expect(() => {
                validateAction(null)
            }).to.throw(Error, 'Action definition must be a plain object.');
        });
    });
    describe('when action definition object', () => {
        let describeValidateActionThrow;

        describeValidateActionThrow = (when, message, value) => {
            describeThrow(when, message, () => {
                validateAction(value);
            })
        };

        describeValidateActionThrow(
            'does not define "type" property',
            'Action definition object must define "type" property.',
            {}
        );

        describeValidateActionThrow(
            '"type" property value does not consist only of uppercase alphabetical characters and underscores',
            'Action definition object "type" property value must be a valid action type.',
            {
                type: 'lowercase'
            }
        );

        describeValidateActionThrow(
            '"payload" property is present and it is not a plain object',
            'Action definition object "payload" property value must be a plain object.',
            {
                type: 'FOO',
                payload: 'not object'
            }
        );

        describeValidateActionThrow(
            '"meta" property is present and it is not a plain object',
            'Action definition object "meta" property value must be a plain object.',
            {
                type: 'FOO',
                meta: 'not object'
            }
        );

        describeValidateActionThrow(
            'defines unknown properties',
            'Action definition object must not define unknown properties.',
            {
                type: 'FOO',
                foo: 'bar'
            }
        );
    });
});

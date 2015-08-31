import {
    expect
} from 'chai';

import validateReducer from './../src/validateReducer';

import describeThrow from './describeThrow';

describe('validateReducer()', () => {
    describe('when reducer definition object', () => {
        let describeValidateReducerThrow;

        describeValidateReducerThrow = (when, message, value) => {
            describeThrow(when, message, () => {
                validateReducer(value);
            })
        };

        describeValidateReducerThrow(
            'does not begin with a domain',
            'Reducer definition object must begin with a domain definition.',
            {
                FOO: () => {}
            }
        );

        describeValidateReducerThrow(
            'defines multiple actions with the same type',
            'Reducer definition object action handler types must be unique.',
            {
                foos: {
                    FOO: () => {}
                },
                bars: {
                    FOO: () => {}
                }
            }
        );

        describeValidateReducerThrow(
            'defines multiple actions with the same type',
            'Reducer definition object action handler types must be valid action types.',
            {
                foos: {
                    foo: () => {}
                }
            }
        );
    });
});

import { assert, assertFalse } from '@std/assert';

export type AssertCase = () => void;
export type AssertCaseCallable = (name: string, assertion: AssertCase) => () => void;

export default class Assert {
    public static true(value: boolean): AssertCase {
        return () => {
            assert(value);
        };
    }

    public static false(value: boolean): AssertCase {
        return () => {
            assertFalse(value);
        };
    }

    public static matchRegexp(pattern: RegExp, testcase: string): AssertCase {
        return () => {
            assert(pattern.test(testcase));
        };
    }

    public static notMatchRegexp(pattern: RegExp, testcase: string): AssertCase {
        return () => {
            assertFalse(pattern.test(testcase));
        };
    }
}

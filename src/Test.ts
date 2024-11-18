import { describe, it } from '@std/testing/bdd';
import { type AssertCase } from './Assert.ts';

export type TestCase = (value: unknown) => void;
export type TestCaseCallable = (name: string, assertion: AssertCase) => () => void;
export type TestItem = (() => void) | void;

export default class Test {
    public static group(
        description: string,
        ...items: (TestItem | (() => void))[]
    ): () => void {
        return () =>
            describe(description, () => {
                items.forEach((item) => {
                    if (typeof item === 'function') {
                        item();
                    }
                });
            });
    }

    public static case(name: string, assertion: AssertCase): () => void {
        return () => it(name, assertion);
    }
}

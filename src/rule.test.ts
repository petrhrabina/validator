// import * as types from '@std/testing/types';
import Test from './Test.ts';
import Assert from './Assert.ts';
import Presets from './Preset.ts';
import Builder from './Builder.ts';
import Quantifiers from './Quantifiers.ts';
import * as c from 'jsr:@std/fmt/colors';

const cases: (() => void)[] = [];
cases.push(
    () => {
        const regexp = Builder.of('class')
            .add(Presets.any).quantifier(Quantifiers.zeroOrMore())
            .add('\\}')
            .add(Presets.end)
            .build('u');

        Test.group(
            `Regexp: ${c.yellow(regexp.source)}`,
            ...[`\
class name {
            private value: string;
            public constructor(value: string) {
                this.value = value;
            }
}`].map((value: string) =>
                Test.case(`True: ${value}`, Assert.matchRegexp(regexp, value))
            ),
        )();
    },
);

cases.forEach((test) => test());

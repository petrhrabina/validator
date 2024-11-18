import type { QuantifierType } from './Quantifiers.ts';

type Rule = RegExp;

interface BuilderInterface {
    quantifier(quantifier: QuantifierType): BuilderInterface;
    add(...values: string[]): BuilderInterface;
    build(flags?: string): Rule;
}

export default class Builder implements BuilderInterface {
    private rules: string[] = [];

    private constructor() {}

    private push(...values: string[]): void {
        this.rules.push(...values);
    }

    public static of(...values: string[]): BuilderInterface {
        const builder = new Builder();
        return builder.add(...values);
    }

    public add(...values: string[]): BuilderInterface {
        let final: string;

        if (values.length === 1) {
            final = values.at(0) ?? '';
        } else {
            final = `(${values.join('|')})`;
        }

        this.push(final);

        return this;
    }

    public quantifier(quantifier: QuantifierType): BuilderInterface {
        this.push(quantifier);

        return this;
    }

    public build(flags?: string): Rule {
        let final: string = '';

        this.rules.forEach((rule) => {
            final += rule;
        });

        return new RegExp(final, flags);
    }
}

export type QuantifierType = string;

export default class Quantifiers {
    public static exactly(n: number): QuantifierType {
        return `{${n}}`;
    }

    public static atLeast(n: number): QuantifierType {
        return `{${n},}`;
    }

    public static between(n: number, m: number): QuantifierType {
        return `{${n},${m}}`;
    }

    public static zeroOrMore(lazy: boolean = false): QuantifierType {
        return lazy ? '*?' : '*';
    }

    public static oneOrMore(lazy: boolean = false): QuantifierType {
        return lazy ? '+?' : '+';
    }

    public static zeroOrOne(lazy: boolean = false): QuantifierType {
        return lazy ? '??' : '?';
    }
}

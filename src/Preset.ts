type PresetType = string;

export default class Presets {
    // POSIX Character Classes
    public static readonly posixAlnum: PresetType = '[[:alnum:]]'; // Alphanumeric characters (letters and digits)
    public static readonly posixDigit: PresetType = '[[:digit:]]'; // Digits (0-9)
    public static readonly posixAlpha: PresetType = '[[:alpha:]]'; // Alphabetic characters (letters)
    public static readonly posixAscii: PresetType = '[[:ascii:]]'; // ASCII characters
    public static readonly posixBlank: PresetType = '[[:blank:]]'; // Space and tab characters
    public static readonly posixCntrl: PresetType = '[[:cntrl:]]'; // Control characters
    public static readonly posixGraph: PresetType = '[[:graph:]]'; // Visible characters (excluding space)
    public static readonly posixLower: PresetType = '[[:lower:]]'; // Lowercase letters
    public static readonly posixPrint: PresetType = '[[:print:]]'; // Printable characters (including space)
    public static readonly posixPunct: PresetType = '[[:punct:]]'; // Punctuation characters
    public static readonly posixSpace: PresetType = '[[:space:]]'; // Whitespace characters
    public static readonly posixUpper: PresetType = '[[:upper:]]'; // Uppercase letters
    public static readonly posixXdigit: PresetType = '[[:xdigit:]]'; // Hexadecimal digits

    // Shorthand Character Classes
    public static readonly digit: PresetType = '\\d'; // Digits (0-9)
    public static readonly nonDigit: PresetType = '\\D'; // Non-digit characters
    public static readonly word: PresetType = '\\w'; // Word characters (letters, digits, and underscore)
    public static readonly nonWord: PresetType = '\\W'; // Non-word characters
    public static readonly whitespace: PresetType = '\\s'; // Whitespace characters
    public static readonly nonWhitespace: PresetType = '\\S'; // Non-whitespace characters
    public static readonly any: PresetType = '[\\s\\S\\w\\W\\d\\D]'; // Any character

    // Custom Character Classes
    public static readonly unsigned: PresetType = '[0-9]'; // Unsigned integers
    public static readonly latin: PresetType = '[a-zA-Z]'; // Latin letters (uppercase and lowercase)
    public static readonly latinLower: PresetType = '[a-z]'; // Latin lowercase letters
    public static readonly latinUpper: PresetType = '[A-Z]'; // Latin uppercase letters

    // Special Characters
    public static readonly anyExceptNewLine: PresetType = '.'; // Any character except newline
    public static readonly tab: PresetType = '\\t'; // Tab character
    public static readonly newLine: PresetType = '\\n'; // Newline character
    public static readonly carriageReturn: PresetType = '\\r'; // Carriage return character
    public static readonly hexadecimal: PresetType = '\\xAA'; // Hexadecimal character (e.g., \xAA)
    public static readonly utf16: PresetType = '\\uAAAA'; // UTF-16 character (e.g., \uAAAA)
    public static readonly unicode: PresetType = '\\u{AAAA}'; // Unicode character (e.g., \u{AAAA})

    // Anchors
    public static readonly start: PresetType = '^'; // Start of the string
    public static readonly end: PresetType = '$'; // End of the string
    public static readonly wordBoundary: PresetType = '\\b'; // Word boundary
    public static readonly nonWordBoundary: PresetType = '\\B'; // Non-word boundary

    // Capturing Group
    public static readonly capture = (name: string, pattern: string) =>
        `(?<${name}>${pattern})`;
}

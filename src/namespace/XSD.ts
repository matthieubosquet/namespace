export default class XSD {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/2001/XMLSchema#";
    public static readonly prefixLabel: string = "xsd";
    public static readonly version: string = "";

    // Names
    public static readonly NCName: String = XSD.baseURI.concat("NCName");
    public static readonly NMTOKEN: String = XSD.baseURI.concat("NMTOKEN");
    public static readonly Name: String = XSD.baseURI.concat("Name");
    public static readonly anyURI: String = XSD.baseURI.concat("anyURI");
    public static readonly base64Binary: String = XSD.baseURI.concat("base64Binary");
    public static readonly boolean: String = XSD.baseURI.concat("boolean");
    public static readonly byte: String = XSD.baseURI.concat("byte");
    public static readonly datatypes: String = XSD.baseURI.concat("datatypes");
    public static readonly date: String = XSD.baseURI.concat("date");
    public static readonly dateTime: String = XSD.baseURI.concat("dateTime");
    public static readonly dateTimeStamp: String = XSD.baseURI.concat("dateTimeStamp");
    public static readonly dayTimeDuration: String = XSD.baseURI.concat("dayTimeDuration");
    public static readonly decimal: String = XSD.baseURI.concat("decimal");
    public static readonly double: String = XSD.baseURI.concat("double");
    public static readonly duration: String = XSD.baseURI.concat("duration");
    public static readonly float: String = XSD.baseURI.concat("float");
    public static readonly gDay: String = XSD.baseURI.concat("gDay");
    public static readonly gMonth: String = XSD.baseURI.concat("gMonth");
    public static readonly gMonthDay: String = XSD.baseURI.concat("gMonthDay");
    public static readonly gYear: String = XSD.baseURI.concat("gYear");
    public static readonly gYearMonth: String = XSD.baseURI.concat("gYearMonth");
    public static readonly hexBinary: String = XSD.baseURI.concat("hexBinary");
    public static readonly int: String = XSD.baseURI.concat("int");
    public static readonly integer: String = XSD.baseURI.concat("integer");
    public static readonly language: String = XSD.baseURI.concat("language");
    public static readonly long: String = XSD.baseURI.concat("long");
    public static readonly negativeInteger: String = XSD.baseURI.concat("negativeInteger");
    public static readonly nonNegativeInteger: String = XSD.baseURI.concat("nonNegativeInteger");
    public static readonly nonPositiveInteger: String = XSD.baseURI.concat("nonPositiveInteger");
    public static readonly normalizedString: String = XSD.baseURI.concat("normalizedString");
    public static readonly positiveInteger: String = XSD.baseURI.concat("positiveInteger");
    public static readonly short: String = XSD.baseURI.concat("short");
    public static readonly string: String = XSD.baseURI.concat("string");
    public static readonly time: String = XSD.baseURI.concat("time");
    public static readonly token: String = XSD.baseURI.concat("token");
    public static readonly unsignedByte: String = XSD.baseURI.concat("unsignedByte");
    public static readonly unsignedInt: String = XSD.baseURI.concat("unsignedInt");
    public static readonly unsignedLong: String = XSD.baseURI.concat("unsignedLong");
    public static readonly unsignedShort: String = XSD.baseURI.concat("unsignedShort");
    public static readonly yearMonthDuration: String = XSD.baseURI.concat("yearMonthDuration");
}
export default class DC {
    // Namespace description
    public static readonly baseURI: string = "http://purl.org/dc/elements/1.1/";
    public static readonly prefixLabel: string = "dc";
    public static readonly version: string = "2012-06-14";

    // Names
    public static readonly contributor: String = DC.baseURI.concat("contributor");
    public static readonly coverage: String = DC.baseURI.concat("coverage");
    public static readonly creator: String = DC.baseURI.concat("creator");
    public static readonly date: String = DC.baseURI.concat("date");
    public static readonly description: String = DC.baseURI.concat("description");
    public static readonly format: String = DC.baseURI.concat("format");
    public static readonly identifier: String = DC.baseURI.concat("identifier");
    public static readonly language: String = DC.baseURI.concat("language");
    public static readonly publisher: String = DC.baseURI.concat("publisher");
    public static readonly relation: String = DC.baseURI.concat("relation");
    public static readonly rights: String = DC.baseURI.concat("rights");
    public static readonly source: String = DC.baseURI.concat("source");
    public static readonly subject: String = DC.baseURI.concat("subject");
    public static readonly title: String = DC.baseURI.concat("title");
    public static readonly type: String = DC.baseURI.concat("type");
}
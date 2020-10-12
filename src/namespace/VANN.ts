export default class VANN {
    // Namespace description
    public static readonly baseURI: string = "http://purl.org/vocab/vann/";
    public static readonly prefixLabel: string = "vann";
    public static readonly version: string = "2005-04-01";

    // Names
    public static readonly changes: String = VANN.baseURI.concat("changes");
    public static readonly example: String = VANN.baseURI.concat("example");
    public static readonly preferredNamespacePrefix: String = VANN.baseURI.concat("preferredNamespacePrefix");
    public static readonly preferredNamespaceUri: String = VANN.baseURI.concat("preferredNamespaceUri");
    public static readonly termGroup: String = VANN.baseURI.concat("termGroup");
    public static readonly usageNote: String = VANN.baseURI.concat("usageNote");
}
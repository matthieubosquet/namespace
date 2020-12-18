export class VANN {
    // Namespace description
    public static readonly baseURI: string = "http://purl.org/vocab/vann/";
    public static readonly prefixLabel: string = "vann";
    public static readonly version: string = "2005-04-01";

    // Names
    public static readonly changes: string = VANN.baseURI.concat("changes");
    public static readonly example: string = VANN.baseURI.concat("example");
    public static readonly preferredNamespacePrefix: string = VANN.baseURI.concat("preferredNamespacePrefix");
    public static readonly preferredNamespaceUri: string = VANN.baseURI.concat("preferredNamespaceUri");
    public static readonly termGroup: string = VANN.baseURI.concat("termGroup");
    public static readonly usageNote: string = VANN.baseURI.concat("usageNote");
}
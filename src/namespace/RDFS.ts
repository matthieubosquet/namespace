export default class RDFS {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/2000/01/rdf-schema#";
    public static readonly prefixLabel: string = "rdfs";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Class: String = RDFS.baseURI.concat("Class");
    public static readonly Container: String = RDFS.baseURI.concat("Container");
    public static readonly ContainerMembershipProperty: String = RDFS.baseURI.concat("ContainerMembershipProperty");
    public static readonly Datatype: String = RDFS.baseURI.concat("Datatype");
    public static readonly Literal: String = RDFS.baseURI.concat("Literal");
    public static readonly Resource: String = RDFS.baseURI.concat("Resource");
    public static readonly comment: String = RDFS.baseURI.concat("comment");
    public static readonly domain: String = RDFS.baseURI.concat("domain");
    public static readonly isDefinedBy: String = RDFS.baseURI.concat("isDefinedBy");
    public static readonly label: String = RDFS.baseURI.concat("label");
    public static readonly member: String = RDFS.baseURI.concat("member");
    public static readonly range: String = RDFS.baseURI.concat("range");
    public static readonly seeAlso: String = RDFS.baseURI.concat("seeAlso");
    public static readonly subClassOf: String = RDFS.baseURI.concat("subClassOf");
    public static readonly subPropertyOf: String = RDFS.baseURI.concat("subPropertyOf");
}
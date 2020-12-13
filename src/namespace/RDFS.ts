export default class RDFS {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/2000/01/rdf-schema#";
    public static readonly prefixLabel: string = "rdfs";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Class: string = RDFS.baseURI.concat("Class");
    public static readonly Container: string = RDFS.baseURI.concat("Container");
    public static readonly ContainerMembershipProperty: string = RDFS.baseURI.concat("ContainerMembershipProperty");
    public static readonly Datatype: string = RDFS.baseURI.concat("Datatype");
    public static readonly Literal: string = RDFS.baseURI.concat("Literal");
    public static readonly Resource: string = RDFS.baseURI.concat("Resource");
    public static readonly comment: string = RDFS.baseURI.concat("comment");
    public static readonly domain: string = RDFS.baseURI.concat("domain");
    public static readonly isDefinedBy: string = RDFS.baseURI.concat("isDefinedBy");
    public static readonly label: string = RDFS.baseURI.concat("label");
    public static readonly member: string = RDFS.baseURI.concat("member");
    public static readonly range: string = RDFS.baseURI.concat("range");
    public static readonly seeAlso: string = RDFS.baseURI.concat("seeAlso");
    public static readonly subClassOf: string = RDFS.baseURI.concat("subClassOf");
    public static readonly subPropertyOf: string = RDFS.baseURI.concat("subPropertyOf");
}
export class RDF {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    public static readonly prefixLabel: string = "rdf";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Alt: string = RDF.baseURI.concat("Alt");
    public static readonly Bag: string = RDF.baseURI.concat("Bag");
    public static readonly HTML: string = RDF.baseURI.concat("HTML");
    public static readonly List: string = RDF.baseURI.concat("List");
    public static readonly PlainLiteral: string = RDF.baseURI.concat("PlainLiteral");
    public static readonly Property: string = RDF.baseURI.concat("Property");
    public static readonly Seq: string = RDF.baseURI.concat("Seq");
    public static readonly Statement: string = RDF.baseURI.concat("Statement");
    public static readonly XMLLiteral: string = RDF.baseURI.concat("XMLLiteral");
    public static readonly first: string = RDF.baseURI.concat("first");
    public static readonly langString: string = RDF.baseURI.concat("langString");
    public static readonly nil: string = RDF.baseURI.concat("nil");
    public static readonly object: string = RDF.baseURI.concat("object");
    public static readonly predicate: string = RDF.baseURI.concat("predicate");
    public static readonly rest: string = RDF.baseURI.concat("rest");
    public static readonly subject: string = RDF.baseURI.concat("subject");
    public static readonly type: string = RDF.baseURI.concat("type");
    public static readonly value: string = RDF.baseURI.concat("value");
}
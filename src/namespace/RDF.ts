export default class RDF {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    public static readonly prefixLabel: string = "rdf";
    public static readonly version: string = "2014-02-25";

    // Names
    public static readonly Alt: String = RDF.baseURI.concat("Alt");
    public static readonly Bag: String = RDF.baseURI.concat("Bag");
    public static readonly HTML: String = RDF.baseURI.concat("HTML");
    public static readonly List: String = RDF.baseURI.concat("List");
    public static readonly PlainLiteral: String = RDF.baseURI.concat("PlainLiteral");
    public static readonly Property: String = RDF.baseURI.concat("Property");
    public static readonly Seq: String = RDF.baseURI.concat("Seq");
    public static readonly Statement: String = RDF.baseURI.concat("Statement");
    public static readonly XMLLiteral: String = RDF.baseURI.concat("XMLLiteral");
    public static readonly first: String = RDF.baseURI.concat("first");
    public static readonly langString: String = RDF.baseURI.concat("langString");
    public static readonly nil: String = RDF.baseURI.concat("nil");
    public static readonly object: String = RDF.baseURI.concat("object");
    public static readonly predicate: String = RDF.baseURI.concat("predicate");
    public static readonly rest: String = RDF.baseURI.concat("rest");
    public static readonly subject: String = RDF.baseURI.concat("subject");
    public static readonly type: String = RDF.baseURI.concat("type");
    public static readonly value: String = RDF.baseURI.concat("value");
}
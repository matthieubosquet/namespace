export default class DCTERMS {
    // Namespace description
    public static readonly baseURI: string = "http://purl.org/dc/terms/";
    public static readonly prefixLabel: string = "dcterms";
    public static readonly version: string = "2010-10-11";

    // Names
    public static readonly Agent: string = DCTERMS.baseURI.concat("Agent");
    public static readonly AgentClass: string = DCTERMS.baseURI.concat("AgentClass");
    public static readonly BibliographicResource: string = DCTERMS.baseURI.concat("BibliographicResource");
    public static readonly Box: string = DCTERMS.baseURI.concat("Box");
    public static readonly DCMIType: string = DCTERMS.baseURI.concat("DCMIType");
    public static readonly DDC: string = DCTERMS.baseURI.concat("DDC");
    public static readonly FileFormat: string = DCTERMS.baseURI.concat("FileFormat");
    public static readonly Frequency: string = DCTERMS.baseURI.concat("Frequency");
    public static readonly IMT: string = DCTERMS.baseURI.concat("IMT");
    public static readonly ISO3166: string = DCTERMS.baseURI.concat("ISO3166");
    public static readonly ISO639_2: string = DCTERMS.baseURI.concat("ISO639-2");
    public static readonly ISO639_3: string = DCTERMS.baseURI.concat("ISO639-3");
    public static readonly Jurisdiction: string = DCTERMS.baseURI.concat("Jurisdiction");
    public static readonly LCC: string = DCTERMS.baseURI.concat("LCC");
    public static readonly LCSH: string = DCTERMS.baseURI.concat("LCSH");
    public static readonly LicenseDocument: string = DCTERMS.baseURI.concat("LicenseDocument");
    public static readonly LinguisticSystem: string = DCTERMS.baseURI.concat("LinguisticSystem");
    public static readonly Location: string = DCTERMS.baseURI.concat("Location");
    public static readonly LocationPeriodOrJurisdiction: string = DCTERMS.baseURI.concat("LocationPeriodOrJurisdiction");
    public static readonly MESH: string = DCTERMS.baseURI.concat("MESH");
    public static readonly MediaType: string = DCTERMS.baseURI.concat("MediaType");
    public static readonly MediaTypeOrExtent: string = DCTERMS.baseURI.concat("MediaTypeOrExtent");
    public static readonly MethodOfAccrual: string = DCTERMS.baseURI.concat("MethodOfAccrual");
    public static readonly MethodOfInstruction: string = DCTERMS.baseURI.concat("MethodOfInstruction");
    public static readonly NLM: string = DCTERMS.baseURI.concat("NLM");
    public static readonly Period: string = DCTERMS.baseURI.concat("Period");
    public static readonly PeriodOfTime: string = DCTERMS.baseURI.concat("PeriodOfTime");
    public static readonly PhysicalMedium: string = DCTERMS.baseURI.concat("PhysicalMedium");
    public static readonly PhysicalResource: string = DCTERMS.baseURI.concat("PhysicalResource");
    public static readonly Point: string = DCTERMS.baseURI.concat("Point");
    public static readonly Policy: string = DCTERMS.baseURI.concat("Policy");
    public static readonly ProvenanceStatement: string = DCTERMS.baseURI.concat("ProvenanceStatement");
    public static readonly RFC1766: string = DCTERMS.baseURI.concat("RFC1766");
    public static readonly RFC3066: string = DCTERMS.baseURI.concat("RFC3066");
    public static readonly RFC4646: string = DCTERMS.baseURI.concat("RFC4646");
    public static readonly RFC5646: string = DCTERMS.baseURI.concat("RFC5646");
    public static readonly RightsStatement: string = DCTERMS.baseURI.concat("RightsStatement");
    public static readonly SizeOrDuration: string = DCTERMS.baseURI.concat("SizeOrDuration");
    public static readonly Standard: string = DCTERMS.baseURI.concat("Standard");
    public static readonly TGN: string = DCTERMS.baseURI.concat("TGN");
    public static readonly UDC: string = DCTERMS.baseURI.concat("UDC");
    public static readonly URI: string = DCTERMS.baseURI.concat("URI");
    public static readonly W3CDTF: string = DCTERMS.baseURI.concat("W3CDTF");
    public static readonly abstract: string = DCTERMS.baseURI.concat("abstract");
    public static readonly accessRights: string = DCTERMS.baseURI.concat("accessRights");
    public static readonly accrualMethod: string = DCTERMS.baseURI.concat("accrualMethod");
    public static readonly accrualPeriodicity: string = DCTERMS.baseURI.concat("accrualPeriodicity");
    public static readonly accrualPolicy: string = DCTERMS.baseURI.concat("accrualPolicy");
    public static readonly alternative: string = DCTERMS.baseURI.concat("alternative");
    public static readonly audience: string = DCTERMS.baseURI.concat("audience");
    public static readonly available: string = DCTERMS.baseURI.concat("available");
    public static readonly bibliographicCitation: string = DCTERMS.baseURI.concat("bibliographicCitation");
    public static readonly conformsTo: string = DCTERMS.baseURI.concat("conformsTo");
    public static readonly contributor: string = DCTERMS.baseURI.concat("contributor");
    public static readonly coverage: string = DCTERMS.baseURI.concat("coverage");
    public static readonly created: string = DCTERMS.baseURI.concat("created");
    public static readonly creator: string = DCTERMS.baseURI.concat("creator");
    public static readonly date: string = DCTERMS.baseURI.concat("date");
    public static readonly dateAccepted: string = DCTERMS.baseURI.concat("dateAccepted");
    public static readonly dateCopyrighted: string = DCTERMS.baseURI.concat("dateCopyrighted");
    public static readonly dateSubmitted: string = DCTERMS.baseURI.concat("dateSubmitted");
    public static readonly description: string = DCTERMS.baseURI.concat("description");
    public static readonly educationLevel: string = DCTERMS.baseURI.concat("educationLevel");
    public static readonly extent: string = DCTERMS.baseURI.concat("extent");
    public static readonly format: string = DCTERMS.baseURI.concat("format");
    public static readonly hasFormat: string = DCTERMS.baseURI.concat("hasFormat");
    public static readonly hasPart: string = DCTERMS.baseURI.concat("hasPart");
    public static readonly hasVersion: string = DCTERMS.baseURI.concat("hasVersion");
    public static readonly identifier: string = DCTERMS.baseURI.concat("identifier");
    public static readonly instructionalMethod: string = DCTERMS.baseURI.concat("instructionalMethod");
    public static readonly isFormatOf: string = DCTERMS.baseURI.concat("isFormatOf");
    public static readonly isPartOf: string = DCTERMS.baseURI.concat("isPartOf");
    public static readonly isReferencedBy: string = DCTERMS.baseURI.concat("isReferencedBy");
    public static readonly isReplacedBy: string = DCTERMS.baseURI.concat("isReplacedBy");
    public static readonly isRequiredBy: string = DCTERMS.baseURI.concat("isRequiredBy");
    public static readonly isVersionOf: string = DCTERMS.baseURI.concat("isVersionOf");
    public static readonly issued: string = DCTERMS.baseURI.concat("issued");
    public static readonly language: string = DCTERMS.baseURI.concat("language");
    public static readonly license: string = DCTERMS.baseURI.concat("license");
    public static readonly mediator: string = DCTERMS.baseURI.concat("mediator");
    public static readonly medium: string = DCTERMS.baseURI.concat("medium");
    public static readonly modified: string = DCTERMS.baseURI.concat("modified");
    public static readonly provenance: string = DCTERMS.baseURI.concat("provenance");
    public static readonly publisher: string = DCTERMS.baseURI.concat("publisher");
    public static readonly references: string = DCTERMS.baseURI.concat("references");
    public static readonly relation: string = DCTERMS.baseURI.concat("relation");
    public static readonly replaces: string = DCTERMS.baseURI.concat("replaces");
    public static readonly requires: string = DCTERMS.baseURI.concat("requires");
    public static readonly rights: string = DCTERMS.baseURI.concat("rights");
    public static readonly rightsHolder: string = DCTERMS.baseURI.concat("rightsHolder");
    public static readonly source: string = DCTERMS.baseURI.concat("source");
    public static readonly spatial: string = DCTERMS.baseURI.concat("spatial");
    public static readonly subject: string = DCTERMS.baseURI.concat("subject");
    public static readonly tableOfContents: string = DCTERMS.baseURI.concat("tableOfContents");
    public static readonly temporal: string = DCTERMS.baseURI.concat("temporal");
    public static readonly title: string = DCTERMS.baseURI.concat("title");
    public static readonly type: string = DCTERMS.baseURI.concat("type");
    public static readonly valid: string = DCTERMS.baseURI.concat("valid");
}
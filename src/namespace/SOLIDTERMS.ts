export default class SOLIDTERMS {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/ns/solid/terms#";
    public static readonly prefixLabel: string = "solid";
    public static readonly version: string = "2015-11-16";

    // Names
    public static readonly Account: string = SOLIDTERMS.baseURI.concat("Account");
    public static readonly Inbox: string = SOLIDTERMS.baseURI.concat("Inbox");
    public static readonly ListedDocument: string = SOLIDTERMS.baseURI.concat("ListedDocument");
    public static readonly Notification: string = SOLIDTERMS.baseURI.concat("Notification");
    public static readonly Patch: string = SOLIDTERMS.baseURI.concat("Patch");
    public static readonly Timeline: string = SOLIDTERMS.baseURI.concat("Timeline");
    public static readonly TypeIndex: string = SOLIDTERMS.baseURI.concat("TypeIndex");
    public static readonly TypeRegistration: string = SOLIDTERMS.baseURI.concat("TypeRegistration");
    public static readonly UnlistedDocument: string = SOLIDTERMS.baseURI.concat("UnlistedDocument");
    public static readonly account: string = SOLIDTERMS.baseURI.concat("account");
    public static readonly deletes: string = SOLIDTERMS.baseURI.concat("deletes");
    public static readonly forClass: string = SOLIDTERMS.baseURI.concat("forClass");
    public static readonly inbox: string = SOLIDTERMS.baseURI.concat("inbox");
    public static readonly inserts: string = SOLIDTERMS.baseURI.concat("inserts");
    public static readonly instance: string = SOLIDTERMS.baseURI.concat("instance");
    public static readonly instanceContainer: string = SOLIDTERMS.baseURI.concat("instanceContainer");
    public static readonly loginEndpoint: string = SOLIDTERMS.baseURI.concat("loginEndpoint");
    public static readonly logoutEndpoint: string = SOLIDTERMS.baseURI.concat("logoutEndpoint");
    public static readonly notification: string = SOLIDTERMS.baseURI.concat("notification");
    public static readonly oidcIssuer: string = SOLIDTERMS.baseURI.concat("oidcIssuer");
    public static readonly patches: string = SOLIDTERMS.baseURI.concat("patches");
    public static readonly privateTypeIndex: string = SOLIDTERMS.baseURI.concat("privateTypeIndex");
    public static readonly publicTypeIndex: string = SOLIDTERMS.baseURI.concat("publicTypeIndex");
    public static readonly read: string = SOLIDTERMS.baseURI.concat("read");
    public static readonly storageQuota: string = SOLIDTERMS.baseURI.concat("storageQuota");
    public static readonly storageUsage: string = SOLIDTERMS.baseURI.concat("storageUsage");
    public static readonly timeline: string = SOLIDTERMS.baseURI.concat("timeline");
    public static readonly typeIndex: string = SOLIDTERMS.baseURI.concat("typeIndex");
    public static readonly where: string = SOLIDTERMS.baseURI.concat("where");
}
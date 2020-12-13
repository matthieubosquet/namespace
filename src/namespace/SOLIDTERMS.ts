export default class SOLIDTERMS {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/ns/solid/terms#";
    public static readonly prefixLabel: string = "solid";
    public static readonly version: string = "2015-11-16";

    // Names
    public static readonly Account: String = SOLIDTERMS.baseURI.concat("Account");
    public static readonly Inbox: String = SOLIDTERMS.baseURI.concat("Inbox");
    public static readonly ListedDocument: String = SOLIDTERMS.baseURI.concat("ListedDocument");
    public static readonly Notification: String = SOLIDTERMS.baseURI.concat("Notification");
    public static readonly Patch: String = SOLIDTERMS.baseURI.concat("Patch");
    public static readonly Timeline: String = SOLIDTERMS.baseURI.concat("Timeline");
    public static readonly TypeIndex: String = SOLIDTERMS.baseURI.concat("TypeIndex");
    public static readonly TypeRegistration: String = SOLIDTERMS.baseURI.concat("TypeRegistration");
    public static readonly UnlistedDocument: String = SOLIDTERMS.baseURI.concat("UnlistedDocument");
    public static readonly account: String = SOLIDTERMS.baseURI.concat("account");
    public static readonly deletes: String = SOLIDTERMS.baseURI.concat("deletes");
    public static readonly forClass: String = SOLIDTERMS.baseURI.concat("forClass");
    public static readonly inbox: String = SOLIDTERMS.baseURI.concat("inbox");
    public static readonly inserts: String = SOLIDTERMS.baseURI.concat("inserts");
    public static readonly instance: String = SOLIDTERMS.baseURI.concat("instance");
    public static readonly instanceContainer: String = SOLIDTERMS.baseURI.concat("instanceContainer");
    public static readonly loginEndpoint: String = SOLIDTERMS.baseURI.concat("loginEndpoint");
    public static readonly logoutEndpoint: String = SOLIDTERMS.baseURI.concat("logoutEndpoint");
    public static readonly notification: String = SOLIDTERMS.baseURI.concat("notification");
    public static readonly oidcIssuer: String = SOLIDTERMS.baseURI.concat("oidcIssuer");
    public static readonly patches: String = SOLIDTERMS.baseURI.concat("patches");
    public static readonly privateTypeIndex: String = SOLIDTERMS.baseURI.concat("privateTypeIndex");
    public static readonly publicTypeIndex: String = SOLIDTERMS.baseURI.concat("publicTypeIndex");
    public static readonly read: String = SOLIDTERMS.baseURI.concat("read");
    public static readonly storageQuota: String = SOLIDTERMS.baseURI.concat("storageQuota");
    public static readonly storageUsage: String = SOLIDTERMS.baseURI.concat("storageUsage");
    public static readonly timeline: String = SOLIDTERMS.baseURI.concat("timeline");
    public static readonly typeIndex: String = SOLIDTERMS.baseURI.concat("typeIndex");
    public static readonly where: String = SOLIDTERMS.baseURI.concat("where");
}
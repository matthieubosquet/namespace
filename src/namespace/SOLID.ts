export default class SOLID {
    // Namespace description
    public static readonly baseURI: string = "http://www.w3.org/ns/solid/terms#";
    public static readonly prefixLabel: string = "solid";
    public static readonly version: string = "2020-12-18";

    // Names
    public static readonly Account: string = SOLID.baseURI.concat("Account");
    public static readonly Inbox: string = SOLID.baseURI.concat("Inbox");
    public static readonly ListedDocument: string = SOLID.baseURI.concat("ListedDocument");
    public static readonly Notification: string = SOLID.baseURI.concat("Notification");
    public static readonly Patch: string = SOLID.baseURI.concat("Patch");
    public static readonly Timeline: string = SOLID.baseURI.concat("Timeline");
    public static readonly TypeIndex: string = SOLID.baseURI.concat("TypeIndex");
    public static readonly TypeRegistration: string = SOLID.baseURI.concat("TypeRegistration");
    public static readonly UnlistedDocument: string = SOLID.baseURI.concat("UnlistedDocument");
    public static readonly account: string = SOLID.baseURI.concat("account");
    public static readonly deletes: string = SOLID.baseURI.concat("deletes");
    public static readonly forClass: string = SOLID.baseURI.concat("forClass");
    public static readonly identityProvider: string = SOLID.baseURI.concat("identityProvider");
    public static readonly inbox: string = SOLID.baseURI.concat("inbox");
    public static readonly inserts: string = SOLID.baseURI.concat("inserts");
    public static readonly instance: string = SOLID.baseURI.concat("instance");
    public static readonly instanceContainer: string = SOLID.baseURI.concat("instanceContainer");
    public static readonly loginEndpoint: string = SOLID.baseURI.concat("loginEndpoint");
    public static readonly logoutEndpoint: string = SOLID.baseURI.concat("logoutEndpoint");
    public static readonly notification: string = SOLID.baseURI.concat("notification");
    public static readonly oidcIssuer: string = SOLID.baseURI.concat("oidcIssuer");
    public static readonly patches: string = SOLID.baseURI.concat("patches");
    public static readonly privateTypeIndex: string = SOLID.baseURI.concat("privateTypeIndex");
    public static readonly publicTypeIndex: string = SOLID.baseURI.concat("publicTypeIndex");
    public static readonly read: string = SOLID.baseURI.concat("read");
    public static readonly storageQuota: string = SOLID.baseURI.concat("storageQuota");
    public static readonly storageUsage: string = SOLID.baseURI.concat("storageUsage");
    public static readonly timeline: string = SOLID.baseURI.concat("timeline");
    public static readonly typeIndex: string = SOLID.baseURI.concat("typeIndex");
    public static readonly where: string = SOLID.baseURI.concat("where");
}
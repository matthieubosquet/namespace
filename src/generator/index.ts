import { getPreferredNamespacePrefix, getPreferredNamespaceUri, getStore, getLatestIssuedDate, getIsDefinedBy } from './store';
import { writeFile } from 'fs';

export function sanitizeClassName(name: string): string {
    return name
        .replace('-', '_')
        .replace(/^name$/, "name_");
}

export function generateNamespaceClass(className: string, baseURI: string, prefixLabel: string, version: string = "", names: string[]) {
    return `export class ${className} {
    // Namespace description
    public static readonly baseURI: string = "${baseURI}";
    public static readonly prefixLabel: string = "${prefixLabel}";
    public static readonly version: string = "${version}";

    // Names${names.map(name => `\n    public static readonly ${sanitizeClassName(name)}: string = ${className}.baseURI.concat("${name}");`).join("")}\n}`;
}

export async function writeNamespaceClass(className: string, ontology: NodeJS.ReadableStream, outDir: string): Promise<void> {
    const filename = outDir.concat(`${className}.ts`);
    const store = await getStore(ontology);
    const namespaceUri = getPreferredNamespaceUri(store);
    const namespacePrefix = getPreferredNamespacePrefix(store);
    const version = getLatestIssuedDate(store);
    const names = getIsDefinedBy(store);

    writeFile(
        filename,
        generateNamespaceClass(className, namespaceUri, namespacePrefix, version, names),
        function(err) {
            if (err) {
                return console.error(err);
            }
            console.log(`- ${className}`);
        }
    );
}

export function writeNamespaceClasses(namespaceClasses: { className: string, ontology: NodeJS.ReadableStream }[], outDir: string): void {
    console.log("Writing ontologies:");
    namespaceClasses.forEach(namespaceClass => writeNamespaceClass(namespaceClass.className, namespaceClass.ontology, outDir));
}

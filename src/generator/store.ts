import { DataFactory,  Store } from 'n3';
import rdfParser from 'rdf-parse';
import { storeStream } from "rdf-store-stream";
import { DC, RDFS, VANN } from '../../dist'

export async function getStore(ontology: NodeJS.ReadableStream): Promise<Store> {
    return storeStream(rdfParser.parse(ontology, { contentType: 'text/turtle' })) as Promise<Store>;
}

export function getPreferredNamespacePrefix(store: Store): string {
    return store
        .getObjects(null, DataFactory.namedNode(VANN.preferredNamespacePrefix), null)[0]
        ?.value;
}

export function getPreferredNamespaceUri(store: Store): string {
    return store
        .getObjects(null, DataFactory.namedNode(VANN.preferredNamespaceUri), null)[0]
        ?.value;
}

export function getLatestIssuedDate(store: Store): string {
    return store
        .getObjects(null, DataFactory.namedNode(DC.issued), null)
        .sort((a, b) => {
            if (a.value > b.value) { return -1; }
            else if (b.value > a.value) { return 1; }
            return 0;
        })
        .sort()[0]
        ?.value;
}

export function getIsDefinedBy(store: Store): string[] {
    return store
        .getQuads(null, DataFactory.namedNode(RDFS.isDefinedBy), null, null)
        .map(quad => quad.subject.value.slice(getPreferredNamespaceUri(store).length))
        .filter(name => name.length > 0)
        .sort();
}

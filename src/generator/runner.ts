
import * as path from 'path';
import * as ontl from 'ontl';
import { writeNamespaceClasses } from './index';

const namespaces = [
    { className: "RDF", ontology: ontl.RDF },
    { className: "RDFS", ontology: ontl.RDFS },
    { className: "OWL", ontology: ontl.OWL },
    { className: "XSD", ontology: ontl.XSD },
    { className: "DC", ontology: ontl.DCTERMS },
    { className: "SHACL", ontology: ontl.SHACL },
    { className: "SOLID", ontology: ontl.SOLIDTERMS },
    { className: "VANN", ontology: ontl.VANN }

];

writeNamespaceClasses(namespaces, path.join(__dirname, "../namespace/"));

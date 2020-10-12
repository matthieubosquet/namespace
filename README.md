# Namespace

A collection of RDF namespaces as javascript classes.

## Usage

Install with `npm install nmspc`. Each namespace has a base URI and a prefix label for the sake of writing prefixed names (see the [Turtle spec IRIs](https://www.w3.org/TR/turtle/#sec-iri) and the [Wikipedia article on compact URIs](https://en.wikipedia.org/wiki/CURIE)). Other properties return the full URI of each resource defined in the namespace.

```javascript
import * as NS from '../index';

console.log("DC:", NS.DC.baseURI, NS.DC.creator);
// outputs: DC: http://purl.org/dc/elements/1.1/ http://purl.org/dc/elements/1.1/creator
console.log("RDF:", NS.RDF.baseURI, NS.RDF.Alt);
// outputs: RDF: http://www.w3.org/1999/02/22-rdf-syntax-ns# http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt
```

## Note

There is a generator written in typescript in the project. To generate namespace classes:
- Clone this project `git clone git@github.com:matthieubosquet/namespace.git`
- Install dev dependencies running `npm install`
- Edit `src/generator/runner.ts` adding in your own ontology as NodeJS Readable stream
- Run `npm run build-namespace` to generate a namespace class corresponding to your ontology

The prefixes used/recognised/required by the generator are:
- `vann:preferredNamespacePrefix` for the prefixLabel property
- `vann:preferredNamespaceUri` for the baseUri property
- `rdfs:isDefinedBy` for every name defined in the namespace
- `dcterms:issued` for the version property

See the [matthieubosquet/ontologies](https://github.com/matthieubosquet/ontologies) repository for example ontologies serialised as turtle and described using those aforementioned prefixes and [OWL 2 annotation properties](https://www.w3.org/TR/owl-syntax/#Annotation_Properties) where possible.

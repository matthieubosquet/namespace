import * as NS from '../src/index';

test('Get namespace base URI', () => {
  expect(NS.DC.baseURI).toBe("http://purl.org/dc/terms/");
});

test('Get string from DC namespace URI', () => {
  expect(NS.DC.creator).toBe("http://purl.org/dc/terms/creator");
});

test('Get string from RDF namespace URI', () => {
  expect(NS.RDF.Alt).toBe("http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt");
});

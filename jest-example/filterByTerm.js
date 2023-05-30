function filterByTerm(array, term) {
  return array.filter((e) => e.url.match(term));
}

module.exports = filterByTerm;

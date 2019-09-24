var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var object = recipes
  delete object.key;
}
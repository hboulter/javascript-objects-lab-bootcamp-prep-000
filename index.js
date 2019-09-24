var recipes = { food : 'item' }

function updateObjectWithKeyAndValue(object, key, value) {
  key = food
  value = item
  return Object.assign(recipes, { [key] : value})
}

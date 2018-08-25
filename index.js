var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {key : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}

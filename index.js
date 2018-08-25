var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key]
  return delete object.key
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}

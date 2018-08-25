var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {

  return delete object.key
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}

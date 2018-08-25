var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj = Object.assign({}, obj, {[key] : value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}

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
  obj = Object.assign({}, obj, {[key]:})
  return obj
}

function deleteFromObjectByKey(obj, key) {
  return delete obj.key
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  return delete obj.key
}

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
  return Object.assign({}, obj, {[key] : undefined})
}

function deleteFromObjectByKey(obj, key) {
  return delete obj.key
}

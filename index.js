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

console.log(obj)
console.log("=================================")

  return delete obj.key
}

function deleteFromObjectByKey(obj, key) {
  return delete obj.key
}

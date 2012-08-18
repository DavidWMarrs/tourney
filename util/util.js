var util = exports;

// Returns a filtered object containing only whitelisted attributes
util.filter = function(obj, keys) {
  var filtered = {};
  for (key in keys) {
    filtered[keys[key]] = obj[keys[key]];
  }
  return filtered;
}

// Gets an array of all the properties of an object
util.values = function(obj) {
  var key, array = [];
  for (key in obj) {
    array.push(obj[key]);
  }
  return array;
};

// Gets an array of all the property names of an object
util.keys = function(obj) {
  var key, array = [];
  for (key in obj) {
    array.push(key);
  }
  return array;
};

// Produces a object from an array using a function to choose each key
util.hash = function(array, fn) {
  var obj = {};
  array.map(function(item, key) { obj[fn(item, key)] = item; });
  return obj;
};

// Maps the key/values of an object to an array
util.dehash = function(obj, fn) {
  var array = [];
  for (key in obj) {
    array.push(fn(obj[key], key));
  };
  return array;
};

// Extracts an array of a particular attribute from an array of objects
util.pluck = function(array, key) {
  var values = [];
  array.map(function(item) { values.push(item[key]); });
  return values;
};

// Creates a shallow clone of an object
util.clone = function(obj) {
  var next = {};
  for (i in obj) next[i] = obj[i];
  return next;
};

// Merges two objects, creating empty objects if neccessary
util.merge = function(a, b) {
  a = a || {};
  b = b || {};
  for (i in b) a[i] = b[i];
  return a;
};

// Returns an object which finds a key
util.key = function(key) { return function(obj) { return obj[key] }; };

// Returning the given object useful for other function methods
util.self = function(item) { return item; };

// Clear way to cast to values
util.cast = function(type, value) {
  if (type == "b") return !!value;
  if (type == "s") return value+"";
  if (type == "i") return parseInt(value);
  if (type == "f") return parseFloat(value);
}

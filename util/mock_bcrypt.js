module.exports = {
  genSaltSync: function() { return "SALTY"; },
  hashSync: function(password, salt) { return "OMG-"+password+"-SECURITEE"; },
  compare: function(password, hash, callback) { callback(false, "OMG-"+password+"-SECURITEE" == hash); }
};
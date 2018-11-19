'use strict'

module.exports = function(value) {
  var float = parseFloat(value)

  if (isNaN(float)) return false
  if (!isFinite(float)) return false
  
  return String(float) === String(value)
}

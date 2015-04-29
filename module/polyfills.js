if (!Array.from) Array.from =
  Function.prototype.call.bind(Array.prototype.slice)
;

if (!Object.assign) Object.assign =
  require('object-assign')
;

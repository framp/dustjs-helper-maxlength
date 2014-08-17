(function(dust){
dust.helpers.maxlength = function (chunk, ctx, bodies, params) {
  var str = dust.helpers.tap(params.str, chunk, ctx);
  var originalLength = str.length;
  var breakWord = dust.helpers.tap(params.break, chunk, ctx) === 'true';
  var limitByWord = dust.helpers.tap(params.type, chunk, ctx) === 'words';
  var limit = parseInt(dust.helpers.tap(params.limit, chunk, ctx)) || originalLength;
  var ellipsis = dust.helpers.tap(params.ellipsis, chunk, ctx);
  if (typeof(ellipsis) === 'undefined')
    ellipsis = '...';
  
  if (limitByWord){
    var words = str.replace(/['";:,.?¿\-!¡]+/g, '').trim().match(/\S+/g) || [];
    if (words.length>limit){
      var word = words[limit];
      var matches = 1;
      for (var i=0; i<limit; i++){
        matches += (words[i].match(new RegExp(word, 'g')) || []).length;
      }
      var i = -1;
      while (matches-- && i++ < str.length){
        i = str.indexOf(word, i);
        if (i < 0) break;
      }
      if (i>-1)
        str = str.substr(0, i);
    }
  }
  if (breakWord){
    str = str.substr(0, limit);
  }
  if (!limitByWord && !breakWord && originalLength>limit){
    var trimmed = str.substr(0, limit);  
    str = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")));
  }
  ellipsis = originalLength===str.length ? '' : ellipsis;
  return chunk.write(str.trim() + ellipsis);
};
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust));

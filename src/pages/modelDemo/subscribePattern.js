

var Event = (function () {
   var clientList = {},
       listen,
       trigger,
       remove;

   listen = function (key,fn) {
       if(!clientList[key]){
           clientList[key] = [];
       }
       clientList[key].push(fn);
   }

   trigger = function () {
      var key = Array.prototype.shift.call(arguments);
      var fns = clientList[key];
      if(!fns || fns.length === 0){
          return false;
      }
      for(var i = 0; i < fns.length; i++){
          var tempfn = fns[i];
          tempfn.apply(this, arguments);
      }
   }

   remove = function (key,fn) {
      var fns = clientList[key];
      if(!fns) return false;
      if(!fn){
          fns && (fns.length = 0);
      }else{
          for(var l = fns.length-1; l >= 0; l--){
              var tempfn = fns[l];
              if(tempfn === fn){
                  fns.splice(l,1);
              }
          }
      }
   }

   return{
       listen: listen,
       tigger: trigger,
       remove: remove
   }

})()


Event.listen("a",function (mess) {
    console.log(mess)
})

// Event.tigger("a","this is subscrib message!")

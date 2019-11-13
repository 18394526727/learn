
['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
  document.addEventListener(ev, function(event){
    return event.returnValue = false
  })
});

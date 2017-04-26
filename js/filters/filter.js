angular.module("filters",[])

.filter('tagsFilter', function() {
  
  return function (question,query) {
    
    var filtered = [];
    
    for (var i = 0; i < question.length; i++) {
      var item = question[i];
      var title =  item.title.toLowerCase();
      
      if (query == "" || query == undefined){
        filtered.push(item);
      }
      else if (title.indexOf(query) > -1){
        filtered.push(item)
      } 
      else { item.tags.forEach(function(element) {
        if (element.indexOf(query.toUpperCase()) > -1){
          filtered.push(item)
        }}
        )}
      }
      return filtered
    }
  });
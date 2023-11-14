// Falsey Bouncer//
function bouncer(arr) {
    function bouncer(arr) {
        var result = [];
        for (var elem of arr){
          if (elem)result.push(elem);
        }
        return result;
      }
      
      
      bouncer([7, "ate", "", false, 9]);
  }
  
  bouncer([7, "ate","", false, 9]);
  

 //Chunky MOnkey //
 function chunkArrayInGroups(arr, size) {
    var groups= [];
    while (arr.length>0){
      groups.push(arr.slice(0,size));
      arr=arr.slice(size)
    }
    return groups;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  
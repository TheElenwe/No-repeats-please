function permAlone(str){
  let regex=/(.)\1+/

  let arr=str.split("");
  let permutations=[];
  let tmp;

  if(str.match(regex) !==null && str.match(regex)[0] === str)return 0
  
  function swap(index1,index2){
    tmp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=tmp;
  }

  function generate(int){
    if(int ===1){
      permutations.push(arr.join(""))
    }else {
      for( let i=0; i != int; ++i){
        generate(int - 1);
        swap(int % 2 ? 0 : i, int -1)
      }
    }
  }
  generate(arr.length);

  let filtered=permutations.filter(function (string){
    return !string.match(regex)
  })
  return filtered.length;
}

console.log(permAlone("aab"))


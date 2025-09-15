const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let output=[];
let sum=0;
let result=[];
const divide = (arr, n) => {
  for(let i=0; i<arr.length; i++){
      sum+=arr[i];
	  if(sum<=n){
		  result.push(arr[i]);
	  }
	  else{
       output.push(result);
		  sum=arr[i];
		  result=[arr[i]];
	  }
  }
	 if (result.length > 0) {
    output.push(result);
  }
	return output;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));

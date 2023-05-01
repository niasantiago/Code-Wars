// how to delete an array 

let array = ["You" , "got" , "this"]; 
delete arr[1]; // removes go 
alert(arr[1]); // undefined 

// now array= ["You", , "this"]
alert.apply( arr.length); // 3 
//delete obj removes value by key 

//arr.splice can: insert,remove, replace elements 
// arr.splice(start[, deleteCount, elem1, ..., elemN]) // syntax
let arr = ["I", "study", "Javascript"];

arr.splice(1, 1);//from index 1 remove 1 element 

alert(arr); // ["I", "Javascript"]  

let arr = ["I", "study", "javascript", "right", "now"]; 

// removes 2 first elements 
let remove = arr.splice(0,2); 

alert(removed);  
 

// splice method is able to insert elements,you need to set deletecount to 0 
 
let arr = ["I", "study", "Javascript"];

//from Index 2 
// delete 0 
// then insert "complex" and "languge" 
arr.splice(2, 0, "complex", "language");

alert(arr); //"I", "study", "complex", "langauge", "JavaScript" 


let arr = [1, 2, 5];

//from index-1 (one step from end)
//delete 0 elements 
//then insert 3 and 4 

arr.splice(-1, 0, 3, 4);

alert(arr); //1,2,3,4,5 

//the method arr.slice is much simpler than arr.splice.
// arr.slice([start]), [end])

let arr = ["t", "e", "s", "t"]; 

alert(arr.slice(1,3)); // //e,s (copy from 1 to 3) 

alert.(arr.slice(-2));// s,t (copy from -2 till the end)  


//concat 

//create an array from arr. and [3,4]]
alert(arr.concat([3,4])); 

//create from an array from: arr and [3,4] and [5,6] 
alert(alert.concat([5,6])); 

//create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); //1,2,3,4,5,6

//only copies elements from arrays. Other objects even if they look like arrays are added as a whole.
let arr = [1, 2]; 

let arrayLike = {
    0:"something"'
    length:1 
}; 

alert(arr.concat(arrayLike));  //1,2 [Object Object]  

//





 








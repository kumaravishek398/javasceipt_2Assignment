//question 1
function square(x){ return (x*x);}
function double(x){return (x*2);}

function ComposedVlue(square,double,value){
    return square(double(value));
}
var result=ComposedVlue(square,double,5);
console.log(result);


//Question 2

function square(x){ return (x*x);}
function double(x){return (x*2);}

function Compose(sq,dob){      //receiving square(sq) and double(dob) function

    return  (function fun(value){
             return sq(dob(value));
    });
    

}
   //first we have to define the function then only we can pass or else it will be variable of any type
var f1=Compose(square,double);  //passing functions as a parameter and and getting function as result
console.log("Result of first function",f1(5));  //calling the returned function


var f2=Compose(double,square);
console.log("Result of second function by changing the parameter",f2(5));


//question 3
function isEven(num) {return num%2==0;}

function find(arr,isEven){
  
    var i=0;
    while(i<arr.length){
        if(isEven(arr[i])==true)
        return arr[i];

        i++;
    }
}


var result=find([1,6,7,2,4],isEven);
console.log("First element in the array which is even ",result);


//Question 4

function square(num){return num*num;}
function Map(arr,square){


    var i=0,arr2=[];
    while(i<arr.length){
      arr2.push(square(arr[i]));   //usng push method of array
      i++;  
    }
    return arr2;
}

var newArray=Map([1,2,3,5],square);
console.log("Returning newarray after squaring each element ",newArray);



//Advanced programming


function Even(num) {return num%2==0;}

function Find(arr,Even){
  
    var i=0;
    if(Even(arr[i]))
    return arr[i];
        
    i++;
     
}


var result=Find([1,6,7,2,4],Even);
console.log("First element in the array which is even ",result);
//Practice JS kodlari silmedim cunki hem baxacam hemde elim gelmedi
//TASK 64 setirden baslayir

// function Sum(arr,func){
//   let result = 0;
//   for(let num of arr)
//   {
//     if(isEven(num))
//     {
//        result+=num;
//     }
//   }
//   console.log(result);
// }

// function isEven(number){
//   return number % 2 ==0;
// }

// let arr = [2,6,3,4,5,8,12,13,21,24,27,28]

// Sum(arr)
//  arr.forEach((val,i,arr) => {
//    arr[i]=val+5;
//    console.log(arr[i]);
   
//  });


//  console.log(arr[4]);

//  let result = arr.map((val,i,arr)=>
//  {
//     return val+5;
//  })

//  console.log(result);
//DEYISIKLIK ISDEYIRSIZSE MAP
//SADECE UZERINDE DEYISIKLIK ETMEK ISDEYIRSIZSE VE USDUNDE PROSES ICRA ETMEK ISDEYIRSIZSE FOREACH
//FILTER PROSESI ISDEYIRSIZSE FILTER EDIRSIZ

//  let res = arr.filter((val,i,arr) =>
//  {
//    return val%2==0;
//  })

//  console.log(res);


// let result = arr.filter(Boolean && Number)
// // console.log(result);
// let total = arr.reduce((t,val,i,array)=>
// {
//   return t+=val;
// });






//----------------------------------------------------------------------------------------------------------

//------Task 1: M ededini N quvvetine yukseltmek



// function Strong(M,N){
//     return 9**5;
// }

// console.log(Strong());


// Strong()

//------Task 2: Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function

// let numbers = [2,18,76,54,45,67]
// let findNumber = numbers.indexOf(45)
// console.log(findNumber);




//------Task 3: Her hansı bir stringin içərisindəki yazıları söz sırası və hərf sırası daxil olmaqla tərs yazdıran bir function yazın

// let word = "Tural Hamidzade Vuqar"
// let emptyWord = ""
// for (let index = word.length-1; index >=0 ; index--) {
//     emptyWord+=word[index];
    
// }
// console.log(emptyWord);
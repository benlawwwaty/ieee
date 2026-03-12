let arr = [[1,2,3,4],[5,6,7,8],[9,10,11]];

let result = arr.flat();

console.log(result)




// -------------------------------------------------------------------




let arr1 = [1,5,5,9,0,5,7,7,7];



let un = [...new Set(arr1)];
un.sort( (a,b) => a-b );

let sum = 0;
for(let num of un)
{
    sum += num;
}



console.log(sum);



// -----------------------------------------------


let text = prompt("enter a words:");
let words = text.split(" ");

let wordCount = words.length;

let charCount = text.replace(/ /g, "").length;

let f = {};
let maxW = "";
let maxC = 0;

for(let word of words){
    f[word] = (f[word] || 0 )  + 1;

    if(f[word] > maxC)
    {
        maxC = f[word];
        maxW = word;
    }
}

console.log(wordCount);
console.log(charCount);
console.log(maxW);
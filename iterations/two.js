
//exmaple of filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);



//map function 
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)//this num consist of updated value which is updated by above map
                .filter( (num) => num >= 40)

console.log(newNums);



//reduce
const num = [1,2,3,4];
const myTotal = num.reduce(function(acc,curval){
    console.log(`acc:${acc} and curval:${curval}`);
    return acc + curval;
} , 0)//this is the initilize value of acc
console.log(myTotal);
//o/p
// acc:0 and curval:1
// acc:1 and curval:2
// acc:3 and curval:3
// acc:6 and curval:4
// 10

const total = num.reduce( (acc, curr) => acc + curr , 0);//do same work as above !
console.log(total);
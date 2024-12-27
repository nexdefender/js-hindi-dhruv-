const coding = ["js","ruby", "java","python","cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// } )

// console.log(values);  // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4  )
console.log(newNums);


const newNums2 = []

myNums.forEach((num) => { 
    if(num>4){
        newNums2.push(num)
    }
});

console.log(newNums2);


const books = [
    {
        title: 'book one',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004,
    },

    {
        title: 'book two',
        genre: 'Non-Fiction',
        publish: 1985,
        edition: 2008,
    },

    {
        title: 'book three',
        genre: 'history',
        publish: 1989,
        edition: 2006,
    },

    {
        title: 'book four',
        genre: 'Non-fiction',
        publish: 1997,
        edition: 2004,
    },

    {
        title: 'book five',
        genre: 'science',
        publish: 1999,
        edition: 2010,
    },

    {
        title: 'book six',
        genre: 'Fiction',
        publish: 2002,
        edition: 2016,
    },

    {
        title: 'book seven',
        genre: 'science',
        publish: 1988,
        edition: 2003,
    },

    {
        title: 'book eight',
        genre: 'history',
        publish: 1990,
        edition: 2007,
    },
]

const userBook = books.filter((bk) => bk.genre === 'history')

const userBooks2 = books.filter( (bk) => {return bk.publish >= 1990  } )

console.log(userBook);
console.log(userBooks2);


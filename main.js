/*1*/
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

const strings = [str1, str2, str3];
for (const str of strings) {
    console.log(str.length);
}

/*2*/
const strings2 = [str1, str2, str3];
for (const str of strings2) {
    console.log(str.toUpperCase());
}

/*3*/
let s1 = 'HELLO WORLD';
let s2 = 'LOREM IPSUM';
let s3 = 'JAVASCRIPT IS COOL';
const strings3 = [s1, s2, s3];
for (const s of strings3) {
    console.log(s.toLowerCase());
}

/*4*/
let str = ' dirty string   '
const s = str.trim();
console.log(s);

/*5*/
let stringToarray = (str) => {
    if (str){
        const split = str.split(' ');
        return split;
    }
}
console.log(stringToarray('Ревуть воли як ясла повні'));

/*6*/
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringsA = numbers.map(number => number + '');
console.log(stringsA);

/*7*/
function sortNums(arrayOfNums,direction) {
    arrayOfNums = [11,21,3];
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a -b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
}
console.log(sortNums('arrayOfNums', 'ascending'));
console.log(sortNums('arrayOfNums', 'descending'));

/*8*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 let map = coursesAndDurationArray

    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index +1;
        return value;
    });
console.log(map);

/*9*/
const suits = ['spade', 'diamond','heart', 'club'];
const values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];
const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }else  { card.color = 'black';
        }
        cards.push(card);
    }}
console.log(cards);
console.log(cards.find(card => card.value === 'ace' && card.cardSuit ===  'spade'));
console.log(cards.filter( card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

/*10*/
const reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
        return accum;
    }, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    });
console.log(reduce);
/*11*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
    ];
console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));













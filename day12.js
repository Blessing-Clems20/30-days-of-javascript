/*const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)*/

/*const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/gi, 'javaScript')
console.log(matchReplaced)


const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let matches = txt.replace(/%/g, '')
console.log(matches)  

const pattern = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  

const pattern = /\d/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
*/
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const regex = /\d+/g;
const matches = text.match(regex);
let totalMonthlyIncome = 0;
matches.forEach(match => {
    totalMonthlyIncome =+ parseInt(match, 10);
})

const totalAnnualIncome = totalMonthlyIncome * 12;
console.log(`Total Annual income: ${totalAnnualIncome} euro` )

function tenMostFrequentWords(paragraph) {
    // Remove punctuation and convert to lowercase
    const cleanParagraph = paragraph.toLowerCase().replace(/[.,]/g, '');

    // Split the paragraph into words
    const words = cleanParagraph.split(' ');

    // Create an object to store word frequencies
    const wordFreq = {};

    // Count word frequencies
    words.forEach(word => {
        if (wordFreq[word]) {
            wordFreq[word]++;
        } else {
            wordFreq[word] = 1;
        }
    });

    // Sort the words by frequency
    const sortedWords = Object.keys(wordFreq).sort((a, b) => wordFreq[b] - wordFreq[a]);

    // Get the ten most frequent words
    return sortedWords.slice(0, 10);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

function cleanText(sentence) {
    // Remove special characters and convert to lowercase
    const cleanSentence = sentence.toLowerCase().replace(/[%$@&#;.,!?]/g, '');

    // Split the cleaned sentence into words
    const words = cleanSentence.split(' ');

    // Create an object to store word frequencies
    const wordFreq = {};

    // Count word frequencies
    words.forEach(word => {
        if (wordFreq[word]) {
            wordFreq[word]++;
        } else {
            wordFreq[word] = 1;
        }
    });

    // Sort the words by frequency
    const sortedWords = Object.keys(wordFreq).sort((a, b) => wordFreq[b] - wordFreq[a]);

    // Get the three most frequent words
    return sortedWords.slice(0, 3);
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));










const students = ['person1','person2','person3','person4','person5','person6','person7','person8','person9','person10','person11','person12','person13','person14','person15','person16','person17','person18'];
// FUNCTIONS
// Fisher-Yates Shuffle
function shuffle(array) {
    var currentIndex = array.length,
    temporaryValue,
    randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array;
}

let groupSize = 3;
let shuffled = shuffle(students);

function createGroups(array, groupSize) {
    let slicedArray;
    console.log('\n')
    if (array.length > 0) {
        
        for (let i = 0; i < groupSize; i++) {
            console.log(array[i]);
            slicedArray = array.slice(groupSize);
        }
        console.log('\n--------')
        createGroups(slicedArray, groupSize);
    }
        
    console.log('Groups complete!') 

}

createGroups(shuffled, groupSize);
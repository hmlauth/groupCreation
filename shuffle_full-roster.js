require('./shufflePrototype.js');
let students = require('./students/student_full-roster.js');

let groupSize = 5;
let shuffled = students.shuffle();

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
    } else {
        console.log(`
Groups complete!
Total Students: ${students.length}
Group Size: ${groupSize} \n`);
    }
        
}

createGroups(shuffled, groupSize);
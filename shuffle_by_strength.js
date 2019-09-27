require('./shufflePrototype.js');
let { strongStudents, yetStrongStudents } = require('./students/students_by_strength.js');

// GLOBAL ARRAYS & OBJECTS

// FUNCTIONS
    function createGroups() {
    // if yetStrongStudents array still has students to assign to a group
    if (shuffledYetStrong.length > 0) {
        // Distribute each yetStrongStudent among strongStudents
        keysInObject.forEach(key => {
            // Select next student in line  
        let selected = shuffledYetStrong.shift();
        if (selected) {
            strongStudents[key].push(selected); // push student to array
        }
        });
        createGroups(shuffledYetStrong); // continue loop
    } else if (shuffledYetStrong.length === 0) { // until no more students available to assign
        console.log('\n', strongStudents, '\n'); // print final object with groups
    }
    }

// METHODS
// Shuffle students for random assignment
let shuffledYetStrong = yetStrongStudents.shuffle();

// Identify keys in strongStudents for reference in function
let keysInObject = Object.keys(strongStudents);
  
createGroups();
  
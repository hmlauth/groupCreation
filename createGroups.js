// GLOBAL ARRAYS & OBJECTS
    const strongStudents = {
        Kevin: [],
        Jason: [],
        Matt: [],
        Won: [],
        Haig: []
    };
  
const yetStrongStudents = ['Don','Mengyuan','Franciscus','Jeremy','Keiko','Lidia','Mark','Meredith','Sarah','Sharjeel','Sheena','Tansu'];
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
let shuffledYetStrong = shuffle(yetStrongStudents);

// Identify keys in strongStudents for reference in function
let keysInObject = Object.keys(strongStudents);
  
createGroups();
  
const nemo = ['Nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'nemo', 'bloat', 'nigel', 'darla'];
const largeGroup = new Array(10000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!')
        }
    }
}

findNemo(largeGroup); // O(n) --> Linear Time









const boxes = [0,1,2,3,4,5];

const logFirstTwoBoxes = (boxes) => {
    console.log(boxes[0]); // O(1) --> Constant Time
    console.log(boxes[1]); // O(1) --> Constant Time
}

logFirstTwoBoxes(boxes) // O(2) --> still considered Constant Time. Reduces down and still notated as O(1)











// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n) --> linear time because runs as many times as the loop runs
      let stranger = true; // O(n) --> linear time because runs as many times as the loop runs
      a++; // also O(n)
    }
    return a; // O(1) --> the return only runs once
  }

  // ANSWER: BIG O(3 + 4n) --> Simplified to O(n)













  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)
  
    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
  }

// ANSWER: BIG O(4 + 7n) --> Simplified to O(n)





const nemo = ['Nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'nemo', 'bloat', 'nigel', 'darla', 'squirt', 'crush'];
const largeGroup = new Array(10000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('running')
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // <-- prevents this code from running after 'nemo' is found
        }
    }
}

findNemo(everyone);
// This is an example of Worst Case: If nemo was at the end of the array
// Big O only cares about worst case. Worst Case for this example is O(n)








const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
    console.log(items[0]);

    const middleIndex = Math.floor(items.length / 2);
    const index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (let i = 0; i <100; i++) {
        console.log('hi');
    }
}
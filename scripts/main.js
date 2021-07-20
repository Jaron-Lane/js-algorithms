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
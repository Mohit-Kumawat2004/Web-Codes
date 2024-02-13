function transformArray(arr) {
    // Step 1: Calculate the sum of all even numbers
    const sumOfEvens = arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

    // Step 2: Find the maximum odd number
    const maxOdd = Math.max(...arr.filter(num => num % 2 !== 0));

    // Step 3: Compute the sum of all positive numbers
    const sumOfPositives = arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

    // Concatenate results into a single string
    const resultString = `${sumOfEvens}-${maxOdd}-${sumOfPositives}`;

    return resultString;
}

// Example usage
const inputArray = [3, 5, 2, 8, -1, 7];
const transformedOutput = transformArray(inputArray);

console.log(transformedOutput); // Output: "10-7-25"

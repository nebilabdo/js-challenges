function rotate(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap element at (i, j) with element at (j, i)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Test the function
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(matrix);
console.log(matrix);


// Step 1
const favoriteMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception"
  ];
  console.log("Second favorite movie:", favoriteMovies[1]);
  
  // Step 2
  const movies = new Array(5);
  movies[0] = "The Shawshank Redemption";
  movies[1] = "The Godfather";
  movies[2] = "The Dark Knight";
  movies[3] = "Pulp Fiction";
  movies[4] = "Inception";
  console.log("First movie in the array:", movies[0]);
  
  // Step 3
  movies[2] = "The Matrix";
  console.log("Length of the array:", movies.length);
  
  // Step 4
  let moviesLiteral = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception"
  ];
  delete moviesLiteral[0];
  console.log("Contents of the array:", moviesLiteral);
  
  // Step 5
  let moviesLoop = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Inception",
    "The Matrix",
    "Interstellar"
  ];
  console.log("Movies:");
  for (let index in moviesLoop) {
    console.log(moviesLoop[index]);
  }
  
  // Step 6
  console.log("Movies:");
  for (let movie of moviesLoop) {
    console.log(movie);
  }
  
  // Step 7
  console.log("Movies (sorted):");
  for (let movie of moviesLoop.sort()) {
    console.log(movie);
  }
  
  // Step 8
  let leastFavMovies = [
    "Movie 1",
    "Movie 2",
    "Movie 3"
  ];
  console.log("Movies I like:");
  for (let movie of moviesLoop) {
    console.log(movie);
  }
  console.log("\nMovies I regret watching:");
  for (let movie of leastFavMovies) {
    console.log(movie);
  }
  
  // Step 9
  let mergedMovies = moviesLoop.concat(leastFavMovies);
  console.log("Merged movies (reverse sorted):");
  mergedMovies.sort().reverse().forEach(movie => console.log(movie));
  
  // Step 10
  console.log("Last item in the merged array:", mergedMovies.slice(-1)[0]);
  
  // Step 11
  console.log("First item in the merged array:", mergedMovies[0]);
  
  // Step 12
  let indicesOfLeastFavMovies = leastFavMovies.map(movie => mergedMovies.indexOf(movie));
  indicesOfLeastFavMovies.forEach(index => {
    mergedMovies[index] = "New Favorite Movie";
  });
  console.log("Updated merged array:");
  console.log(mergedMovies);
  
  // Step 13
  let moviesRanking = [
    ["The Shawshank Redemption", 1],
    ["The Godfather", 2],
    ["The Dark Knight", 3],
    ["Pulp Fiction", 4],
    ["Inception", 5]
  ];
  console.log("Filtered movie names:");
  moviesRanking.filter(movie => typeof movie[0] === "string").forEach(movie => console.log(movie[0]));
  
  // Step 14
  let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
  function showEmployee(arr) {
    console.log("Employees:");
    arr.forEach(employee => console.log(employee.toUpperCase()));
  }
  showEmployee(employees);
  
  // Step 15
  function filterValues(arr) {
    return arr.filter(value => value || value === 0 || typeof value === "boolean");
  }
  console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
  
  // Step 16
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // Step 17
  function getLargestNumber(arr) {
    return Math.max(...arr);
  }
  console.log(getLargestNumber([1, 2, 3, 4, 5]));
  
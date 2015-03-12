/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var dirtyRow = {};
  var dirtyCol = {};
  for (var i = 0; i < n; i++) {
    var row = []; // TODO how to fill with n zeroes
    if (!dirtyRow.hasOwnProperty(i) || !dirtyCol.hasOwnProperty(i)) {
      row[i] = 1;
      solution.push(row);
      dirtyRow[i] = 1;
      dirtyCol[i] = 1;
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  // some function to iteratively create and test boards
  var boardGenerator = function(n){
    var board = new Board({'n':n});
    var rows = board.rows();
    //rows[0][0] = 1;
    var i = 0, j = 0;
    for(; i < n; i++, j++){
      row[i] = 1;
      row = rows[i++];

      // if board.hasColConflictsAt(i)
    }

    if(!board.hasAnyRooksConflicts()){
      solutionCount += 1;
    }
  };
  boardGenerator(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

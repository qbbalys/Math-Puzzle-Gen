var puzzles = [];

function randomInt(min, max) { // [min, max)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generatePuzzles() {
    var range = document.querySelector('input[name="valueRange"]:checked').value
    puzzles = [];

    for (var i = 0; i < 12; ++i) {
        puzzles.push(new Puzzle(range));
    }

    document.getElementById("printBtn").disabled = false;
    displayPuzzles();
}

function displayPuzzles() {
    var solved = document.getElementById("solvedCheckbox").checked;
    var html = "";
    
    for (var i = 0; i < puzzles.length; ++i) {
        html += puzzles[i].render(solved);
    }

    document.getElementById("puzzles").innerHTML = html;
}

class Puzzle {

    constructor(maxValue) {
        this.board = new Array(initialBoard.length);
        for (var i = 0; i < initialBoard.length; ++i) {
            this.board[i] = initialBoard[i].slice();
        }

        this.setupValues(maxValue);
        this.mask = masks[randomInt(0, masks.length)];
    }

    setupValues(maxValue) {
        this.board[0][0] = randomInt(2, maxValue);
        this.board[0][2] = randomInt(1, this.board[0][0] - 1);
        this.board[0][4] = this.board[0][0] - this.board[0][2];
        
        this.board[4][4] = randomInt(this.board[0][4], maxValue);
        this.board[2][4] = this.board[4][4] - this.board[0][4];

        this.board[2][2] = randomInt(1, maxValue);
        this.board[2][0] = this.board[2][4] + this.board[2][2];
        this.board[4][0] = this.board[0][0] + this.board[2][0];
        this.board[4][2] = this.board[0][2] + this.board[2][2];
    }

    render(solved) {
        var html = '<table class="puzzle">';

        for (var row = 0; row < this.board.length; row++) {
            html += '<tr>';

            for (var col = 0; col < this.board[row].length; col++) {
                var data = this.board[row][col];
                var visible = this.mask[row][col];

                if (data == null) {
                    html += '<td class="filled" />';
                } else {
                    if (solved) {
                        html += visible ? '<td>' : '<td class="solved">';
                        html += data;
                        html += '</td>';
                    } else {
                        html += '<td>';
                        html += visible ? data : "";
                        html += '</td>';
                    }
                }
            }

            html += '</tr>';
        }

        html += '</table>';
        return html;
    }
}
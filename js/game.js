/**
 * Tic Tac Toe Game Logic
 * Handles game state, moves, and win conditions
 */

class TicTacToeGame {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = {
            X: 0,
            O: 0,
            draws: 0
        };
        
        // Winning combinations
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
    }

    /**
     * Make a move at the specified position
     * @param {number} position - The position on the board (0-8)
     * @returns {boolean} - Whether the move was successful
     */
    makeMove(position) {
        if (!this.gameActive || this.board[position] !== '') {
            return false;
        }

        this.board[position] = this.currentPlayer;
        
        if (this.checkWinner()) {
            this.gameActive = false;
            this.scores[this.currentPlayer]++;
            return true;
        }

        if (this.checkDraw()) {
            this.gameActive = false;
            this.scores.draws++;
            return true;
        }

        this.switchPlayer();
        return true;
    }

    /**
     * Check if there's a winner
     * @returns {Array|null} - Winning combination or null
     */
    checkWinner() {
        for (const combination of this.winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                return combination;
            }
        }
        return null;
    }

    /**
     * Check if the game is a draw
     * @returns {boolean} - Whether the game is a draw
     */
    checkDraw() {
        return this.board.every(cell => cell !== '') && !this.checkWinner();
    }

    /**
     * Switch to the next player
     */
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    /**
     * Get the current game state
     * @returns {Object} - Current game state
     */
    getGameState() {
        const winner = this.checkWinner();
        const draw = this.checkDraw();
        
        return {
            board: [...this.board],
            currentPlayer: this.currentPlayer,
            gameActive: this.gameActive,
            winner: winner,
            draw: draw,
            scores: {...this.scores}
        };
    }

    /**
     * Reset the game board
     */
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
    }

    /**
     * Reset all scores
     */
    resetScores() {
        this.scores = {
            X: 0,
            O: 0,
            draws: 0
        };
    }

    /**
     * Get valid moves for AI (future enhancement)
     * @returns {Array} - Array of valid positions
     */
    getValidMoves() {
        return this.board
            .map((cell, index) => cell === '' ? index : null)
            .filter(index => index !== null);
    }
} 
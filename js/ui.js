/**
 * UI Controller for Tic Tac Toe Game
 * Handles DOM manipulation and user interactions
 */

class GameUI {
    constructor(game) {
        this.game = game;
        this.cells = document.querySelectorAll('.cell');
        this.currentPlayerText = document.getElementById('current-player-text');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');
        this.scoreDraws = document.getElementById('score-draws');
        this.gameStatus = document.getElementById('game-status');
        this.statusMessage = document.getElementById('status-message');
        this.restartBtn = document.getElementById('restart-btn');
        this.resetScoreBtn = document.getElementById('reset-score-btn');
        
        this.initializeEventListeners();
        this.updateUI();
    }

    /**
     * Initialize all event listeners
     */
    initializeEventListeners() {
        // Cell click events
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });

        // Button events
        this.restartBtn.addEventListener('click', () => this.handleRestart());
        this.resetScoreBtn.addEventListener('click', () => this.handleResetScore());

        // Keyboard events for accessibility
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    /**
     * Handle cell click events
     * @param {number} index - Index of the clicked cell
     */
    handleCellClick(index) {
        if (this.game.makeMove(index)) {
            this.updateUI();
            this.animateCell(index);
        }
    }

    /**
     * Handle restart button click
     */
    handleRestart() {
        this.game.resetGame();
        this.updateUI();
        this.clearBoard();
    }

    /**
     * Handle reset score button click
     */
    handleResetScore() {
        this.game.resetScores();
        this.updateUI();
    }

    /**
     * Handle keyboard events for accessibility
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleKeydown(event) {
        if (event.key >= '1' && event.key <= '9') {
            const index = parseInt(event.key) - 1;
            this.handleCellClick(index);
        } else if (event.key === 'r' || event.key === 'R') {
            this.handleRestart();
        }
    }

    /**
     * Update the entire UI based on game state
     */
    updateUI() {
        const gameState = this.game.getGameState();
        
        this.updateBoard(gameState.board);
        this.updateCurrentPlayer(gameState.currentPlayer);
        this.updateScores(gameState.scores);
        this.updateGameStatus(gameState);
    }

    /**
     * Update the game board display
     * @param {Array} board - Current board state
     */
    updateBoard(board) {
        this.cells.forEach((cell, index) => {
            cell.textContent = board[index];
            cell.className = 'cell';
            
            if (board[index] === 'X') {
                cell.classList.add('x');
            } else if (board[index] === 'O') {
                cell.classList.add('o');
            }
        });
    }

    /**
     * Update current player display
     * @param {string} currentPlayer - Current player ('X' or 'O')
     */
    updateCurrentPlayer(currentPlayer) {
        this.currentPlayerText.textContent = `Current Player: ${currentPlayer}`;
    }

    /**
     * Update score display
     * @param {Object} scores - Score object with X, O, and draws
     */
    updateScores(scores) {
        this.scoreX.textContent = `X: ${scores.X}`;
        this.scoreO.textContent = `O: ${scores.O}`;
        this.scoreDraws.textContent = `Draws: ${scores.draws}`;
    }

    /**
     * Update game status message
     * @param {Object} gameState - Current game state
     */
    updateGameStatus(gameState) {
        if (gameState.winner) {
            this.showStatus(`Player ${gameState.currentPlayer} wins!`, 'winner');
            this.highlightWinningCells(gameState.winner);
        } else if (gameState.draw) {
            this.showStatus("It's a draw!", 'draw');
        } else if (gameState.gameActive) {
            this.hideStatus();
        }
    }

    /**
     * Show game status message
     * @param {string} message - Message to display
     * @param {string} type - Type of message ('winner' or 'draw')
     */
    showStatus(message, type) {
        this.statusMessage.textContent = message;
        this.gameStatus.className = `game-status ${type}`;
        this.gameStatus.classList.remove('hidden');
    }

    /**
     * Hide game status message
     */
    hideStatus() {
        this.gameStatus.classList.add('hidden');
    }

    /**
     * Highlight winning cells
     * @param {Array} winningCombination - Array of winning cell indices
     */
    highlightWinningCells(winningCombination) {
        winningCombination.forEach(index => {
            this.cells[index].classList.add('winner');
        });
    }

    /**
     * Animate cell when clicked
     * @param {number} index - Index of the cell to animate
     */
    animateCell(index) {
        const cell = this.cells[index];
        cell.style.transform = 'scale(0.8)';
        setTimeout(() => {
            cell.style.transform = 'scale(1)';
        }, 150);
    }

    /**
     * Clear the board display
     */
    clearBoard() {
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
            cell.style.transform = 'scale(1)';
        });
    }
} 
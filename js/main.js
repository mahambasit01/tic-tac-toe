/**
 * Main Application Entry Point
 * Initializes the game and UI
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the game
    const game = new TicTacToeGame();
    const ui = new GameUI(game);
    
    // Add some helpful console messages for developers
    console.log('🎮 Tic Tac Toe Game Loaded!');
    console.log('Keyboard shortcuts:');
    console.log('- Press 1-9 to make moves');
    console.log('- Press R to restart game');
    
    // Optional: Add some fun easter eggs
    let konami = [];
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    
    document.addEventListener('keydown', function(e) {
        konami.push(e.keyCode);
        if (konami.length > konamiCode.length) {
            konami.shift();
        }
        
        if (konami.length === konamiCode.length && 
            konami.every((code, i) => code === konamiCode[i])) {
            console.log('🎉 Konami Code activated! You found the easter egg!');
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            konami = [];
        }
    });
});

// Add error handling for the entire application
window.addEventListener('error', function(event) {
    console.error('Game Error:', event.error);
    // In a production app, you might want to show a user-friendly error message
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`🚀 Game loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }, 0);
    });
} 
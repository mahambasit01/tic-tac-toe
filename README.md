# Tic Tac Toe Game

A modern, responsive tic-tac-toe game built with vanilla HTML, CSS, and JavaScript. Features a clean design, score tracking, and keyboard accessibility.

## 🎮 Features

- **Clean, Modern UI**: Responsive design that works on desktop and mobile
- **Score Tracking**: Keep track of wins and draws across multiple games
- **Keyboard Support**: Play using keyboard shortcuts (1-9 for moves, R for restart)
- **Smooth Animations**: Visual feedback for moves and wins
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Easter Eggs**: Hidden features for curious players

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- No additional dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing!

```bash
# If using a local server (recommended for development)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 How to Play

1. Players take turns clicking on empty cells
2. First player to get three in a row (horizontally, vertically, or diagonally) wins
3. If all cells are filled without a winner, it's a draw
4. Click "New Game" to start over
5. Click "Reset Score" to clear all scores

### Keyboard Shortcuts

- **1-9**: Make a move in the corresponding cell
- **R**: Restart the current game
- **Konami Code**: Try the classic cheat code for a surprise!

## 🏗️ Project Structure

```
tic-tac-toe-game/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All styles and responsive design
├── js/
│   ├── game.js         # Core game logic and state management
│   ├── ui.js           # UI controller and DOM manipulation
│   └── main.js         # Application initialization and utilities
└── README.md           # This file
```

## 🔧 Technical Details

### Architecture

The game follows a clean separation of concerns:

- **Game Logic (`game.js`)**: Handles game state, move validation, and win detection
- **UI Controller (`ui.js`)**: Manages DOM updates and user interactions
- **Main App (`main.js`)**: Initializes the application and handles global events

### Key Classes

#### `TicTacToeGame`
- Manages game state and board
- Validates moves and detects wins/draws
- Tracks scores across multiple games

#### `GameUI`
- Handles all DOM manipulation
- Manages user interactions
- Provides visual feedback and animations

### Features Implementation

- **Responsive Design**: CSS Grid and Flexbox for layout
- **Animations**: CSS transitions and keyframe animations
- **Accessibility**: Keyboard navigation and semantic HTML
- **Performance**: Efficient DOM updates and event handling

## 🎨 Customization

### Changing Colors

Edit the CSS custom properties in `styles/main.css`:

```css
:root {
    --primary-color: #4299e1;
    --secondary-color: #e2e8f0;
    --accent-color: #48bb78;
}
```

### Adding New Features

The modular architecture makes it easy to extend:

1. Add new methods to `TicTacToeGame` for game logic
2. Add new UI methods to `GameUI` for visual features
3. Initialize new features in `main.js`

## 🧪 Testing

The game includes built-in error handling and performance monitoring. Open browser developer tools to see:

- Load time metrics
- Error logging
- Debug information

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Inspired by classic tic-tac-toe games
- Built with modern web standards
- Designed for learning and fun!

---

Made with ❤️ for testing GitHub analysis tools and enjoying classic games! 
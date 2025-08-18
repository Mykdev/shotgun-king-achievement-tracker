# Shotgun King Achievement Tracker - React SPA

A modern React Single Page Application (SPA) for tracking achievements and card selection in the game Shotgun King: The Final Checkmate.

## Features

- **Achievement Tracking**: Track progress on all game achievements with visual progress bars
- **Card Selection**: Select up to 20 cards from your current run to see which achievements you qualify for
- **Real-time Updates**: See qualifying achievements and missing cards as you select cards
- **Search & Filter**: Search through achievements and cards, filter by completion status
- **Progress Persistence**: Your progress is automatically saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful, modern interface with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shotgun-king-achievement-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How to Use

1. **View Achievements**: Browse all available achievements in the main grid
2. **Track Progress**: Click on achievement cards to increment progress
3. **Select Cards**: Use the card selection section to choose cards from your current run
4. **See Qualifying Achievements**: View which achievements you qualify for based on your selected cards
5. **Find Missing Cards**: See which cards you still need to complete achievements
6. **Search & Filter**: Use the search and filter controls to find specific achievements

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── StatsBar.jsx
│   ├── CardSelection.jsx
│   ├── CardItem.jsx
│   ├── QualifyingAchievements.jsx
│   ├── MissingCardsSummary.jsx
│   ├── AchievementGrid.jsx
│   ├── AchievementCard.jsx
│   └── Footer.jsx
├── data/               # Data files
│   ├── achievements.js
│   └── cards.js
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Features in Detail

### Achievement System
- 15+ unique achievements with different difficulty levels
- Progress tracking with visual progress bars
- Automatic completion detection
- Local storage persistence

### Card Selection
- Select up to 20 cards from your current run
- Visual feedback for selected cards with count indicators
- Right-click to remove cards
- Search functionality to find specific cards
- Only shows cards required for incomplete achievements

### Real-time Analysis
- Shows qualifying achievements based on selected cards
- Displays missing cards needed for achievements
- Visual indicators for complete, partial, and missing requirements
- Summary sections for easy overview

### Search & Filter
- Search achievements by title or description
- Filter by completion status (All, Completed, Incomplete)
- Search cards by name
- Real-time filtering with instant results

## Contributing

This is a fan-made tool created for educational and entertainment purposes. Feel free to contribute by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## Disclaimer

This tool is not affiliated with, endorsed by, or connected to the official Shotgun King: The Final Checkmate game or its developers. All game content, achievements, and card information belong to their respective owners. This tracker is created for educational and entertainment purposes only.

## License

MIT License - see LICENSE file for details. 
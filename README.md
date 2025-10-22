# Multi-Feature Mobile App

A comprehensive React Native application with TypeScript that combines multiple useful features in one place.

## Features

### 1. Games
- **Truth or Dare**
  - Simple Mode: Play with predefined challenges
  - All Set Mode: Create custom challenges for each player
  - Interactive bottle spinning animation
  - Player management system

- **Dumb Charades**
  - Team setup with customizable player assignments
  - Multiple categories to choose from
  - Configurable timer settings
  - Score tracking system

### 2. Utilities
- **Toss**
  - Coin flip with animation
  - Dice roll with 3D animation
  - History of recent results

- **Do-To (Task Manager)**
  - Add, complete, and delete tasks
  - Persistent storage using SQLite
  - Clean and intuitive interface

- **My Notes**
  - Create, edit, and delete notes
  - Rich text editing capabilities
  - Organized note listing

- **Calculators**
  - Standard calculator with addition, subtraction, multiplication, and division
  - BMI calculator that calculates body mass index and provides health category feedback
  - Discount calculator that computes final prices and shows amount saved
  - Age calculator that precisely determines years, months, and days between dates

## Technical Implementation

### Architecture
- React Native with TypeScript
- Navigation using React Navigation
- Context API for state management
- AsyncStorage and SQLite for data persistence

### Key Components
- Custom animations for interactive elements
- Reusable UI components
- Responsive layouts for different screen sizes
- Efficient data management

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- React Native development environment

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
4. Run on Android:
   ```
   npm run android
   ```
   or iOS:
   ```
   npm run ios
   ```

## Project Structure
```
src/
├── components/       # Reusable UI components
├── context/          # Context providers for state management
├── navigation/       # Navigation configuration
├── screens/          # Screen components
│   ├── games/        # Game-related screens
│   ├── toss/         # Toss feature screens
│   ├── doTo/         # Task manager screens
│   ├── notes/        # Notes feature screens
│   └── calculators/  # Calculator screens
├── utils/            # Utility functions and helpers
└── assets/           # Images, fonts, and other static assets
```

## Future Enhancements
- User authentication
- Cloud synchronization
- Theme customization
- Additional games and utilities
- Performance optimizations

## License
MIT
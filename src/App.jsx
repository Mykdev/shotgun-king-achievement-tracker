import React, { useState, useEffect } from 'react';
import { achievements } from './data/achievements';
import { allCards, getLocalImagePath, cardDetails } from './data/cards';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import CardSelection from './components/CardSelection';
import AchievementGrid from './components/AchievementGrid';
import Footer from './components/Footer';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [achievementData, setAchievementData] = useState(achievements);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [cardSearchTerm, setCardSearchTerm] = useState('');

  const [isInitialized, setIsInitialized] = useState(false);

  // Load saved progress on component mount
  useEffect(() => {
    loadProgress();
    setIsInitialized(true);
  }, []);

  // Save progress whenever achievement data changes (but not during initial load)
  useEffect(() => {
    if (isInitialized && achievementData.length > 0) {
      saveProgress();
    }
  }, [achievementData, isInitialized]);

  const loadProgress = () => {
    const saved = localStorage.getItem('shotgunKingProgress');
    if (saved) {
      try {
        const savedAchievements = JSON.parse(saved);
        console.log('Loading saved progress:', savedAchievements);
        setAchievementData(prevAchievements => 
          prevAchievements.map(achievement => {
            const savedAchievement = savedAchievements.find(a => a.id === achievement.id);
            if (savedAchievement) {
              return {
                ...achievement,
                progress: savedAchievement.progress || 0,
                completed: savedAchievement.completed || false
              };
            }
            return achievement;
          })
        );
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    } else {
      console.log('No saved progress found');
    }
  };

  const saveProgress = () => {
    try {
      const dataToSave = achievementData.map(achievement => ({
        id: achievement.id,
        progress: achievement.progress,
        completed: achievement.completed
      }));
      localStorage.setItem('shotgunKingProgress', JSON.stringify(dataToSave));
      console.log('Progress saved:', dataToSave);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const toggleCardSelection = (card) => {
    if (selectedCards.length < 20) {
      setSelectedCards(prev => [...prev, card]);
    }
  };

  const removeCardSelection = (card) => {
    setSelectedCards(prev => {
      const index = prev.lastIndexOf(card);
      if (index > -1) {
        const newCards = [...prev];
        newCards.splice(index, 1);
        return newCards;
      }
      return prev;
    });
  };

  const clearCardSelection = () => {
    setSelectedCards([]);
  };

  const toggleAchievementProgress = (achievementId) => {
    setAchievementData(prev => 
      prev.map(achievement => {
        if (achievement.id === achievementId) {
          if (achievement.progress < achievement.maxProgress) {
            const newProgress = achievement.progress + 1;
            return {
              ...achievement,
              progress: newProgress,
              completed: newProgress >= achievement.maxProgress
            };
          } else {
            return {
              ...achievement,
              progress: 0,
              completed: false
            };
          }
        }
        return achievement;
      })
    );
  };

  const clearAllProgress = () => {
    setAchievementData(prev => 
      prev.map(achievement => ({
        ...achievement,
        progress: 0,
        completed: false
      }))
    );
  };

  const getQualifyingAchievements = () => {
    return achievementData.filter(achievement => {
      if (achievement.completed) return false;
      
      if (achievement.requiredCards && achievement.requiredCards.length > 0) {
        return achievement.requiredCards.some(card => selectedCards.includes(card));
      }
      return false;
    });
  };

  const getMissingCards = () => {
    const qualifyingAchievements = getQualifyingAchievements();
    const missingCards = {};
    const selectedCardCounts = {};
    
    // Count selected cards
    selectedCards.forEach(card => {
      selectedCardCounts[card] = (selectedCardCounts[card] || 0) + 1;
    });
    
    // Check each qualifying achievement for missing cards
    qualifyingAchievements.forEach(achievement => {
      const requiredCardCounts = {};
      achievement.requiredCards.forEach(card => {
        requiredCardCounts[card] = (requiredCardCounts[card] || 0) + 1;
      });
      
      Object.entries(requiredCardCounts).forEach(([card, requiredCount]) => {
        const selectedCount = selectedCardCounts[card] || 0;
        const missingCount = Math.max(0, requiredCount - selectedCount);
        
        if (missingCount > 0) {
          if (!missingCards[card]) {
            missingCards[card] = 0;
          }
          missingCards[card] = Math.max(missingCards[card], missingCount);
        }
      });
    });
    
    return missingCards;
  };

  const getFilteredAchievements = () => {
    return achievementData.filter(achievement => {
      const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesFilter = true;
      if (filter === 'completed') {
        matchesFilter = achievement.completed;
      } else if (filter === 'incomplete') {
        matchesFilter = !achievement.completed;
      }
      
      return matchesSearch && matchesFilter;
    });
  };

  const getFilteredCards = () => {
    // Collect all cards required for at least one locked achievement
    const lockedRequiredCards = new Set();
    achievementData.forEach(achievement => {
      if (!achievement.completed && Array.isArray(achievement.requiredCards)) {
        achievement.requiredCards.forEach(card => lockedRequiredCards.add(card));
      }
    });

    // Only show cards that are required for a locked achievement
    const filteredCards = allCards.filter(card => lockedRequiredCards.has(card));
    
    // Apply search filter
    if (cardSearchTerm) {
      return filteredCards.filter(card => 
        card.toLowerCase().includes(cardSearchTerm.toLowerCase())
      );
    }
    
    return filteredCards;
  };

  const stats = {
    totalAchievements: achievementData.length,
    completedAchievements: achievementData.filter(a => a.completed).length,
    completionPercentage: Math.round((achievementData.filter(a => a.completed).length / achievementData.length) * 100)
  };

  return (
    <div className="container">
      <Header />
      <StatsBar 
        stats={stats} 
        onClearAllProgress={clearAllProgress} 
      />
      
      <CardSelection
        selectedCards={selectedCards}
        onToggleCard={toggleCardSelection}
        onRemoveCard={removeCardSelection}
        onClearSelection={clearCardSelection}
        searchTerm={cardSearchTerm}
        onSearchChange={setCardSearchTerm}
        filteredCards={getFilteredCards()}
        qualifyingAchievements={getQualifyingAchievements()}
        missingCards={getMissingCards()}
        getLocalImagePath={getLocalImagePath}
        cardDetails={cardDetails}
      />

      <div className="controls">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search achievements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`filter-btn ${filter === 'incomplete' ? 'active' : ''}`}
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
        </div>
      </div>

      <AchievementGrid
        achievements={getFilteredAchievements()}
        onToggleProgress={toggleAchievementProgress}
      />

      <Footer />
    </div>
  );
}

export default App;

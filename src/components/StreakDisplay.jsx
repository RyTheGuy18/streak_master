import React from 'react';
import PropTypes from 'prop-types';
import './StreakDisplay.css'; // Assuming there's a CSS file for styles

const StreakDisplay = ({ currentStreak, level, totalXP, levelProgress }) => {
    return (
        <div className="streak-display">
            <div className="stat-card">
                <h2>Current Streak</h2>
                <p>{currentStreak}</p>
            </div>
            <div className="stat-card">
                <h2>Level</h2>
                <p>{level}</p>
            </div>
            <div className="stat-card">
                <h2>Total XP</h2>
                <p>{totalXP}</p>
            </div>
            <div className="stat-card">
                <h2>Level Progress</h2>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${levelProgress}%` }}></div>
                </div>
                <p>{levelProgress}%</p>
            </div>
        </div>
    );
};

StreakDisplay.propTypes = {
    currentStreak: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    totalXP: PropTypes.number.isRequired,
    levelProgress: PropTypes.number.isRequired,
};

export default StreakDisplay;
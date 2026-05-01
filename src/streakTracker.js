// streakTracker.js

class StreakTracker {
    constructor() {
        this.streaks = {};
    }

    addTask(date) {
        const day = this.formatDate(date);
        if (!this.streaks[day]) {
            this.streaks[day] = 0;
        }
        this.streaks[day]++; // Increment the task count for the day
    }

    getStreakLength(date) {
        const day = this.formatDate(date);
        let streakLength = 0;
        let currentDate = new Date(day);

        while (this.streaks[this.formatDate(currentDate)]) {
            streakLength++;
            currentDate.setDate(currentDate.getDate() - 1);
        }
        return streakLength;
    }

    formatDate(date) {
        return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
    }
}

// Example usage:
const tracker = new StreakTracker();
tracker.addTask(new Date('2026-05-01T17:45:34Z')); // Add task for today
console.log(tracker.getStreakLength(new Date('2026-05-01T17:45:34Z'))); // Get streak length for today

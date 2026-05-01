// Fetch habits from the backend and display them
async function fetchHabits() {
  const response = await fetch('/habits');
  const habits = await response.json();
  const habitsContainer = document.getElementById('habits');

  habits.forEach(habit => {
      const habitElement = document.createElement('div');
      habitElement.className = 'habit';

      // Create a span for the habit name
      const habitName = document.createElement('span');
      habitName.textContent = habit.name;
      habitElement.appendChild(habitName);

      // Create a container for the counter and buttons
      const counterContainer = document.createElement('div');
      counterContainer.className = 'counter-container';

      // Create a minus button
      const minusButton = document.createElement('button');
      minusButton.textContent = '-';
      minusButton.className = 'counter-button minus-button';

      // Create a counter display
      const counterDisplay = document.createElement('span');
      counterDisplay.textContent = '0';
      counterDisplay.className = 'counter-display';

      // Create a plus button
      const plusButton = document.createElement('button');
      plusButton.textContent = '+';
      plusButton.className = 'counter-button plus-button';

      // Add event listeners for the buttons
      minusButton.addEventListener('click', () => {
          let count = parseInt(counterDisplay.textContent);
          if (count > 0) { // Prevent negative counts
              count--;
              counterDisplay.textContent = count.toString();
          }
      });

      plusButton.addEventListener('click', () => {
          let count = parseInt(counterDisplay.textContent);
          count++;
          counterDisplay.textContent = count.toString();
      });

      // Append buttons and counter to the container
      counterContainer.appendChild(minusButton);
      counterContainer.appendChild(counterDisplay);
      counterContainer.appendChild(plusButton);

      // Append the counter container to the habit element
      habitElement.appendChild(counterContainer);

      // Append the habit element to the habits container
      habitsContainer.appendChild(habitElement);
  });
}

// Load habits when the page loads
window.onload = fetchHabits;
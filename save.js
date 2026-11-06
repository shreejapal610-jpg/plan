// save
localStorage.setItem('itinerary', JSON.stringify(itinerary));

// load
const todos = JSON.parse(localStorage.getItem('itinerary') || '[]');

// remove
localStorage.removeItem('itinerary');
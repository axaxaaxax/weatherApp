import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.get(`http://localhost:3001/weather?city=${city}`);
            console.log('API Response:', response.data); // Debugging
            setWeather(response.data);
            setCity(''); // Clear the input field after getting the weather
        } catch (err) {
            console.error('Error fetching weather data:', err);
            setError('Failed to fetch weather data. Please try again.');
        }
    };

    return (
        <div className="app">
            <div className="container">
                <h1>Check the Weather</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                    />
                    <button type="submit">Submit</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {weather && <WeatherDisplay weather={weather} />}
            </div>
        </div>
    );
}

export default App;

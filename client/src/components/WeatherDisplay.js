import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weather }) {
    if (!weather || !weather.current || !weather.location) {
        return <div className="weather-error">Weather data is not available</div>;
    }

    const { condition, temp_c } = weather.current;
    const { text } = condition;

    let weatherClass = 'default';

    if (text.toLowerCase().includes('sunny')) {
        weatherClass = 'sun';
    } else if (text.toLowerCase().includes('cloudy') || text.toLowerCase().includes('overcast')) {
        weatherClass = 'clouds';
    } else if (text.toLowerCase().includes('rain')) {
        weatherClass = 'rain';
    }

    return (
        <div className={`weather-display ${weatherClass}`}>
            <div className="weather-info">
                <h2>{weather.location.name}</h2>
                <div className="weather-description">
                    <h3>{text}</h3>
                    <p>{temp_c}°C</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;

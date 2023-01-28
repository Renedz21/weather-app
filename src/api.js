import axios from "axios";

export const getWeather = async (city, setError) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        setError("");
        // console.log(response.data);
        return response.data
    } catch (error) {
        setError("No se encontro la ciudad");
        // return error;
    }
}
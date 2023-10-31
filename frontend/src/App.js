import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('https://workouts-56vi.onrender.com'); // Replace with your Render backend URL
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home data={data} />} /> {/* Pass the fetched data to the Home component */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

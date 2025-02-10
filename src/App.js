import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BreakingNews from './server/BreakingNews';
import Weather from './server/Weather';
import Stock from './server/Stock';
import Premium from './server/Premium';
import Sports from './server/Sports';
import Politics from './server/Politics';
import Technology from './server/Technology';
import Health from './server/Health';
import Settings from './Settings';

import Business from './server/Business';
import Science from './server/Science';
import Entertainment from './server/Entertainment';
import Religion from './server/Religion';
import Education from './server/Education';
import Travel from './server/Travel';
import Environment from './server/Environment';

import './client/BreakingNews.css';
import './client/Weather.css';
import './client/Premium.css';
import './client/Navbar.css';
import './client/Stock.css';


function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/breaking" element={<BreakingNews />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/stock" element={<Stock />} /> {/* Changed to Stock */}
                    <Route path="/premium" element={<Premium />} /> {/* Changed to Premium */}
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/politics" element={<Politics />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/health" element={<Health />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/science" element={<Science />} />
                    <Route path="/entertainment" element={<Entertainment />} />
                    <Route path="/religion" element={<Religion />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/travel" element={<Travel />} />

                    <Route path="/environment" element={<Environment />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetail from './components/LaunchDetail';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <LaunchList />
            <LaunchDetail />
        </div>
    );
};

export default App;
import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import HeaderBar from './components/HeaderBar'
import LaunchList from './components/LaunchList';
import LaunchDetail from './components/LaunchDetail';

function App() {
  return (
    <div className="App">
          
          <Grid container spacing={0} xs={12}>
              <Grid item xs={12}>
                  <HeaderBar />
                  <div className="App">
                      <LaunchList />
                      <LaunchDetail />
                  </div>
              </Grid>
          </Grid>
    </div>
  );
}

export default App;

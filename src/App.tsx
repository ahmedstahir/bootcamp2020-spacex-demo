import React from 'react';
import MainBody from './components/MainBody';
import Grid from '@material-ui/core/Grid';
import HeaderBar from './components/HeaderBar';

const App = () => {
    return (
        <Grid container spacing={0} xs={12} style={{ backgroundColor: 'yellow', height: '90vh' }}>
            <Grid item xs={12}>
                <HeaderBar />
                <MainBody />
            </Grid>
        </Grid>
    );
};

export default App;
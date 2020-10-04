import React from 'react';
import MainBody from './components/MainBody';
import Grid from '@material-ui/core/Grid';

const App = () => {
    return (
        <Grid container spacing={0} xs={12}>
            <Grid item xs={12}>
                <MainBody />
            </Grid>
        </Grid>
    );
};

export default App;
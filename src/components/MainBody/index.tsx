import React from 'react';
import LaunchList from '../LaunchList';
import LaunchDetail from '../LaunchDetail';
import Grid from '@material-ui/core/Grid';
import './style.css';

const MainBody: React.FC = () => {
    return (
        <div className="MainBody">
            <Grid container spacing={0} xs={12}>
                <Grid item xs={3}>
            <LaunchList />
                </Grid>
                <Grid item xs={9}>
            <LaunchDetail />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainBody;
import React, { useState, useCallback } from 'react';
import LaunchList from '../LaunchList';
import LaunchDetail from '../LaunchDetail';
import Grid from '@material-ui/core/Grid';
import './style.css';

const MainBody: React.FC = () => {
    const [launchId, setLaunchId] = useState(42);
    const handleIdChange = useCallback(newId => {
        setLaunchId(newId);
    }, []);

    return (
        <div className="MainBody">
            <Grid container spacing={0} xs={12}>
                <Grid item xs={3}>
                    <LaunchList handleIdChange={handleIdChange} />
                </Grid>
                <Grid item xs={9}>
                    <LaunchDetail launchId={launchId} />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainBody;
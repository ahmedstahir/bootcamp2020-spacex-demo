import React from 'react';
import { useLaunchDetailQuery } from '../../generated/graphql';
import LaunchDetail from './LaunchDetail';
import Loader from '../Loader';

const LaunchDetailContainer = () => {
    const { data, error, loading } = useLaunchDetailQuery({ variables: { launchId: '42' } });

    if (loading) {
        return <Loader open={true} />
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a launch from the menu</div>;
    }

    return <LaunchDetail data={data} />;
};

export default LaunchDetailContainer;
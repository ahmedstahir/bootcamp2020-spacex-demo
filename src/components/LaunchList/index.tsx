import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';
import Loader from '../Loader';

const LaunchListContainer = () => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <Loader open={true} />
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} />;
};

export default LaunchListContainer;
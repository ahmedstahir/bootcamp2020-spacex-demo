import React from 'react'
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';
import Loader from '../Loader';

const LaunchListContainer = (props: OwnProps) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <Loader open={true} />
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
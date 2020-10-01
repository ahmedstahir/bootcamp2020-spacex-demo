import React from 'react';
import { useLaunchDetailQuery } from '../../generated/graphql';
import LaunchDetail from './LaunchDetail';

export default function LaunchDetailContainer() {
    const { data, error, loading } = useLaunchDetailQuery({ variables: { launchId: '42' } });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a flight from the panel</div>;
    }

    return <LaunchDetail data={data} />;
};
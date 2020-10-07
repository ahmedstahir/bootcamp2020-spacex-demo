import React, { useEffect } from 'react';
import { useLaunchDetailQuery } from '../../generated/graphql';
import LaunchDetail from './LaunchDetail';
import Loader from '../Loader';

interface OwnProps {
    launchId: number;
}

const LaunchDetailContainer = ({ launchId }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchDetailQuery({ variables: { launchId: String(launchId) } });

    useEffect(() => {
        refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [launchId]);


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
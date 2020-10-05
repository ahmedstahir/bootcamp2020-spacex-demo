import React from 'react'
import { LaunchListQuery } from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <div className={`${className}__title`}>ALL LAUNCHES</div>
        <ol className={`${className}__list`}>
            {!!data.launches &&
                data.launches.map(
                    (launch, i) =>
                        !!launch && (
                            <li key={i} className={`${className}__item`}>
                                {launch.mission_name} ({launch.launch_year}) ({JSON.stringify(launch.launch_success)})
                            </li>
                        ),
                )}
        </ol>
    </div>
);

export default LaunchList;
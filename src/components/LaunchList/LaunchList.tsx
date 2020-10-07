import React from 'react'
import { LaunchListQuery } from '../../generated/graphql';
import './style.css';
import success from '../../images/success.png';
import failed from '../../images/failed.png';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
    data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
    <div className={className}>
        <div className={`${className}__title`}>ALL LAUNCHES</div>
        <ol className={`${className}__list`}>
            {!!data.launches &&
                data.launches.map(
                    (launch, i) =>
                        !!launch && (
                            <li key={i} className={`${className}__item`} onClick={() => handleIdChange(launch.flight_number!)}>
                                #{launch.flight_number}{' - '}{launch.mission_name} ({launch.launch_year})
                                {launch.launch_success === null
                                    ? null
                                    : launch.launch_success
                                        ? <img src={success} alt="Success" className={`${className}__status`} />
                                        : <img src={failed} alt="Failed" className={`${className}__status`} />
                                }
                            </li>
                        ),
                )}
        </ol>
    </div>
);

export default LaunchList;
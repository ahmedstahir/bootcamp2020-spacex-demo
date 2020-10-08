import React from 'react';
import { LaunchDetailQuery } from '../../generated/graphql';
import './style.css';
import { format } from 'date-fns';
import ReactPlayer from 'react-player/lazy'

interface Props {
    data: LaunchDetailQuery;
}

const className = 'LaunchDetail';

const LaunchDetail: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>No launch available</div>;
    }

    return (
        <div className={className}>
            <div className={`${className}__status`}>
                {data.launch.launch_success === null
                    ? <span className="LaunchDetail__status-tbl">Mission # {data.launch.flight_number} is yet to launch </span>
                    : data.launch.launch_success
                        ? <span className={`${className}__status-succeeded`}>Mission # {data.launch.flight_number} succeeded </span>
                        : <span className={`${className}__status-failed`}>Mission # {data.launch.flight_number} failed </span>
                }
            </div>
            <h1 className={`${className}__title`}>
                {data.launch.mission_name}
                {data.launch.rocket &&
                    ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
            <p className={`${className}__date`}>
                {!!data.launch.launch_date_utc
                    ? <span>{format(new Date(data.launch.launch_date_utc), 'PPPPp')}</span>
                    : null
                }
            </p>
            <p className={`${className}__description`}>
                {!!data.launch.details
                    ? data.launch.details
                    : <span>-= No description is available for this mission =-</span>
                }
            </p>
            <p className={`${className}__description`}>
                {!!data.launch?.links?.wikipedia
                    ? <span>For more information, you can visit the <a href={data.launch?.links?.wikipedia} rel="noopener noreferrer" target="_blank">Wikipedia page</a> of this mission.</span>
                    : null
                }
            </p>
            <hr />
            <h1 className={`${className}__sub-title`}>
                Site Information
            </h1>
            <p className={`${className}__date`}>
                {!!data.launch?.launch_site?.site_name && !!data.launch?.launch_site?.site_name_long
                    ? `The launch site for this mission is '${data.launch?.launch_site?.site_name}', more commonly known as '${data.launch?.launch_site?.site_name_long}'.`
                    : <span>-= No site information is available for this mission =-</span>
                }
            </p>
            <hr />
            {data.launch?.links?.video_link === null
                ? <span className={`${className}__description`}>-= No video is available for this mission =-</span>
                : <div className={`${className}__video-container`}>
                    <ReactPlayer
                        className={`${className}__video`}
                        url={String(data.launch.links?.video_link)}
                        controls={true}
                    />
                  </div>
            }
            <hr />
            {data?.launch?.links?.flickr_images === null || data.launch.links === undefined || data.launch.links?.flickr_images === undefined || data.launch.links.flickr_images.length < 1
                ? <span className={`${className}__description`} style={{ paddingBottom: '2vh' }}>-= No image is available for this mission =-</span>
                : <div className={`${className}__image-list`}>
                    {data.launch.links.flickr_images.map(image =>
                        image ? <img src={image} className={`${className}__image`} key={image} alt='' /> : null,
                    )}
                  </div>
            }
        </div>
    );
};

export default LaunchDetail;
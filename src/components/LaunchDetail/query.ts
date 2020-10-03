import gql from 'graphql-tag';

export const QUERY_LAUNCH_DETAIL = gql`
  query LaunchDetail ($launchId: String!) {
    launch (id: $launchId) {
      flight_number
      mission_name
      launch_date_utc
      launch_success
      details
      launch_site {
        site_name
        site_name_long
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
        wikipedia
      }
    }
  }
`;
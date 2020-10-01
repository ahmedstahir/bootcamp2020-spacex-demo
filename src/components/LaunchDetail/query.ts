import gql from 'graphql-tag';

export const QUERY_LAUNCH_DETAIL = gql`
  query LaunchDetail ($launchId: String!) {
    launch(id: $launchId) {
      flight_number
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
      }
    }
  }
`;
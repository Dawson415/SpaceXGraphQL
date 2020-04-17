import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
    render() {
        // const props = {};
        // props.flight_number = 1;
        // let { flight_number } = 1;
        // console.log(props);
        // console.log(props.match);
        // console.log(props.match.params);

        // flight_number = parseInt(flight_number);
        // flight_number = 1;
        return (
            // <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
            <Query query={LAUNCH_QUERY} variables={{ flight_number: 1 }}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    if (error) console.log(error);

                    return (
                        <div>
                            <h4 className="my-3">Rocket Details</h4>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default Launch;

import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges{
				node{
					name
					description
					language
					stargazersCount
					forksCount
					reviewCount
					ratingAverage
					ownerAvatarUrl
				}
			}	
		}
	}
`;


export const GET_USER = gql`
	query {
		authorizedUser {
			id
			username
		}
	}
`;


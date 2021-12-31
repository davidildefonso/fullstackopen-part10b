import React from 'react';
import { View } from 'react-native';
import  RepositoryItem  from './RepositoryItem'
//import useRepositories from '../hooks/useRepositories'
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const RepositoryList = () => {
 	const { repositories, /*error, loading*/} = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		// Other options
	});

	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
		: [];

	return (
		<View>
			{ repositoryNodes.map( item => <RepositoryItem key= {item.id} item={item}  />	)}
		</View>
	
	);
};

export default RepositoryList;


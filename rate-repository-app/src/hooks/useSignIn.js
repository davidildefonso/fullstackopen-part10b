import  { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
	const authStorage = useAuthStorage();
	const [error, setError] = useState(null)	
	const [mutate, result ] = useMutation(LOGIN, {
		onError: (error) => {
			setError(error.message)  	
		}
	});

	const client = useApolloClient()

	const login = async ({ username, password }) => {
		const {data} = await mutate( { variables : {  username, password}} )
		if(data){
			authStorage.setAccessToken(data.authorize.accessToken);		
			client.resetStore();
			setError(null) 
		}				
		return data
	};

	return [login, result, error];
};

export default useSignIn

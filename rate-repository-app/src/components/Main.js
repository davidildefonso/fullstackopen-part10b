import React from 'react';
import {  StyleSheet, View , Text, Pressable} from 'react-native';
import RepositoryList  from './RepositoryList';
import useAuthStorage from '../hooks/useAuthStorage';
import AppBar from './AppBar';
import { Link, Route,  Routes } from 'react-router-native';
import SignIn from './SignIn';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';


const styles = StyleSheet.create({
  container: {   
    flexGrow: 1,
    flexShrink: 1,
	backgroundColor: "#e1e4e8",
  },
  appBar: {
	color: "white",
	fontSize: 20
  },
  textWhite: {
	color: "white",
	fontSize: 20,
	padding: 10
  }
});

const Main = () => {
	const authStorage = useAuthStorage();
	const client = useApolloClient();
	const { data, refetch } = useQuery(GET_USER, {
		fetchPolicy: 'cache-and-network',
		enabled: false
	});
	console.log(data.id, data.username)



	const logout = async () => {
		console.log("press")
		refetch()
		await authStorage.removeAccessToken()
		client.resetStore();
	}

  return (
    <View style={styles.container}>	
		<AppBar>
			<>
				<Link to="/" ><Text style={styles.textWhite} >Repositories</Text></Link>
				<Link to="/signin" ><Text style={styles.textWhite} >Sign in</Text></Link>	
				<Pressable onPress={logout} ><Text style={styles.textWhite} >Log out</Text></Pressable>			
			</>
		</AppBar>
		

		<>
			<Routes>
				<Route path="/"  element ={<RepositoryList />}  />		
				<Route path="/signin"  element ={<SignIn />}  />	
				
			</Routes>
		</>

	
	
	 
    </View>

  );
};

export default Main;
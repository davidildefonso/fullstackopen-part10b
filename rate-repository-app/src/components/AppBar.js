import React, { useState} from 'react';
import { View, StyleSheet, Image , Pressable} from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
	paddingBottom: 10,
	backgroundColor: "#000",
	
  },
  image: {
	width: 20,
	height: 20,
	borderRadius: 10

  },
  logoContainer: {
	display: "flex",
	alignItems: "flex-end",
	paddingRight: 10,	
  }
 
});

import imagePath from '../../assets/icon.png'

const AppBar = ({children}) => {

	const [showMenu, setShowMenu] = useState(false);

	if(!showMenu) return <View style={styles.container}>
		   	<View style={styles.logoContainer} >
				<Pressable	onPress={() => {setShowMenu(true);}} >
					<Image style={styles.image} source={imagePath} />
				</Pressable>
			</View>
	  		
	</View>


  	return <View style={styles.container}>
	  			<>
				  	<View style={styles.logoContainer} >
						<Pressable	onPress={() => {setShowMenu(false);}} >
							<Image style={styles.image} source={imagePath} />
						</Pressable>
					</View>
					
					{children}
				</>
	  			
	  		</View>;
};

export default AppBar;
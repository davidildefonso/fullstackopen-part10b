import React from 'react';
import { Text, View, Image, StyleSheet  } from 'react-native';
import { convertToThousands } from '../utils';

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		paddingBottom:15,
		display: 'flex',
		flexDirection: "column",
		backgroundColor: "white",
		marginBottom: 10
	},
	flexContainerCol: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
	},
	flexContainerColEven: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	flexContainerRow: {
		display: 'flex',
		flexDirection: 'row',			
			
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	avatar: {
		width: 66,
		height: 66,
		borderRadius:  33
	},
	flexGrowZero: {
		flexGrow: 0,
		paddingLeft: 10,
		paddingRight: 10
	},
	flexGrowOne: {
		flexGrow: 1
	},
	fontBold: {
		fontWeight: "bold"
	},
	fontLight: {
		fontWeight: "100"
	},
	decorated: {		
		backgroundColor: "#000",
		borderRadius: 5,
		padding: 5,
		alignSelf: "flex-start"
	},
	textWhite: {
		color: "white"
	},
	margin: {
		marginBottom: 3
	},
	marginRow: {
		marginBottom: 15
	}
});


const RepositoryItem = ({item}) => {

	return (
		<View style={styles.container} key= {item.id}  >
			<View style={[styles.flexContainerRow, styles.marginRow]} >
				<View  style={styles.flexGrowZero}   ><Image style={styles.avatar} source={ { uri: item.ownerAvatarUrl } }/></View>	
				<View style={styles.flexContainerCol} >
					<View style={styles.margin} ><Text>{item.fullName} </Text></View>
					<View style={ [ styles.fontLight, styles.margin]} ><Text>{item.description} </Text></View>
					<View  style={styles.decorated} ><Text style={styles.textWhite} >{item.language} </Text></View>
				</View>			
			</View>
		
			<View style={styles.flexContainerRow} >
				<View style={styles.flexContainerColEven} >
					<View >
						<Text  style={styles.fontBold} >{convertToThousands(item.stargazersCount)} </Text>
					</View>
					<View>
						<Text>Stars </Text>
					</View>
					
				</View>
				<View style={styles.flexContainerColEven} >
					<View >
						<Text  style={styles.fontBold}  >{convertToThousands(item.forksCount)} </Text>
					</View>
					<View>
						<Text>Forks </Text>
					</View>
					
				</View>
				<View style={styles.flexContainerColEven} >
					<View   >
						<Text style={styles.fontBold} >{convertToThousands(item.reviewCount)} </Text>
					</View>
					<View>
						<Text>Reviews </Text>
					</View>
					
				</View>
				<View style={styles.flexContainerColEven} >
					<View   >
						<Text style={styles.fontBold} >{convertToThousands(item.ratingAverage)} </Text>
					</View>
					<View>
						<Text>Rating </Text>
					</View>
				
				</View>		
			</View>
			
			
		</View>
	);

}

export default RepositoryItem;
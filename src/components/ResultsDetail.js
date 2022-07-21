import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const ResultsDetail=({result})=>{
    return <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri:result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} stars , {result.review_count} reviews</Text>
    </View>




}
const styles=StyleSheet.create({
    container:{
marginLeft:15

    },
    imageStyle:{
height:150,
width:250,
borderRadius:10,
marginBottom:5

    },
    name:{
        fontWeight:'bold',
        
    }






})
export default ResultsDetail
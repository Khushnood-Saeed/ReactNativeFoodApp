import React,{useState,useEffect} from "react";
import {Text,View,FlatList,Image,StyleSheet} from 'react-native'
import yelp from "../api/yelp";

const ReusltsShowScreen=({navigation})=>{
const id=navigation.getParam('id')
const [result,setResults]=useState(null)


const getResult=async(id)=>{
    const response=await yelp.get(`/${id}`)
   setResults(response.data)


}

useEffect(()=>{getResult(id)},[])

if(!result)
{
    return null
}

    return <View>
<Text>{result.name}</Text>
<FlatList 
data={result.photos}
keyExtractor={(photos)=>{photos}}
renderItem={({item})=>{
return <Image style={styles.imageStyle} source={{uri:item}} />

}}

/>
    </View>


}
const styles=StyleSheet.create({
   
    imageStyle:{
height:150,
width:250,
borderRadius:10,
marginBottom:5

    }
})
export default ReusltsShowScreen
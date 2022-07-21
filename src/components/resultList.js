import React from "react";
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList=({title,result,navigation})=>{
    if(!result.length)
    {
        return null
    }
    console.log(result)
return <View style={styles.container}>
    
<Text style={styles.textStyle}>{title}</Text>
<FlatList 
horizontal
data={result}
keyExtractor={(result)=>result.id}
showsHorizontalScrollIndicator={false}
renderItem={({item})=>{
return (
    <TouchableOpacity onPress={()=>{navigation.navigate('ReusltsShow',{id:item.id})}}>
<ResultsDetail result={item} />
</TouchableOpacity>

)
}}

/>
</View>



}
const styles=StyleSheet.create({
    container:{
        marginBottom:10
    },    
textStyle:{
fontSize:18,
fontWeight:'bold',
marginLeft:15,
marginBottom:5

}




})
export default withNavigation(ResultList)
import React,{useState,useEffect} from "react";
import { Text,View,ScrollView,StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/resultList";

const SearchScreen=()=>{
    const [term,setTerm]=useState('')
    const [searchAPI,results,errorMsg]=useResults()
    const filterResultsByPrice=(price)=>{
        return results.filter(
            results=>{
                return results.price===price
            }
        )
        
        
        
        }
    return <>
        <SearchBar
         term={term} 
         onTermChange={(newTerm)=>setTerm(newTerm)}
         onSubmitting={()=>searchAPI(term)}
         />
        {errorMsg? <Text>{errorMsg}</Text>:null}
        <ScrollView>
         <ResultList  result={filterResultsByPrice('$')} title='Cost Effective'/>
         <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin:15
  }}
/>
         <ResultList   result={filterResultsByPrice('$$')}  title='Bit Pricier'/>
         <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin:15
  }}
/>
         <ResultList  result={filterResultsByPrice('$$$')} title='Big Spender'/>
         </ScrollView>
         </>
         

}
export default SearchScreen
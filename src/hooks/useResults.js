import React,{useState,useEffect} from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [results,setResults]=useState([])
    const [errorMsg,setError]=useState('')
    const searchAPI=async(searchTerm)=>{
        try{const response=await yelp.get('/search',{
        params:{
            limit:50,
            term:searchTerm,
            location:'san jose'
    
    
     } })
       //response.data it is the returned object
       setResults(response.data.businesses)
    }
    catch(err)
    {
        setError('Something went wrong!')
    }
    }
    useEffect(()=>{searchAPI('pasta')},[])
    
    console.log('hi7')
    /*For some initial search if we used
searchAPI('pasta')
it will stuck in infinite loop as setters will also be called
Solution:
hoouk=>useEffect 
===>It is a hook which allows us to runn a code for only 
one time when our component is first rendered on the screen
useState(()=>{})=======>it will run the code every time a component is rendered
useState(()=>{},[])=======>it will run the code only one time when the component is first rendered
useState(()=>{},[value])=======>it will run the code only one time 
when the component is first rendered and when value changes


*/


return [searchAPI,results,errorMsg]
}

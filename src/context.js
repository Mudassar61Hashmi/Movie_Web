import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext();
export const API_URL= `http://www.omdbapi.com/?i=tt3896198&apikey=857ef2b8`;

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading]= useState(true)
  const [movie, setMovie]= useState([]);
  const[isError, setIsError]= useState({show:"true", msg:""})
  const[query, setQuery]= useState('titanic');
  const getmovies=async(url)=>{
try{
const res= await fetch(url);
const data= await res.json();
console.log(data)
if(data.Response==="True"){
  setIsLoading(false);
  setIsError({show: false,
    msg: "",
    })
  setMovie(data.Search)
}
else{
  setIsError({show: true,
  msg: data.Error,
  })
}
}
catch(error){
console.log(error)
}
  }
useEffect(()=>{
  let timeOut=setTimeout(() => {
    getmovies(`${API_URL}&s=${query}`)
  }, 500);
  return ()=>clearTimeout(timeOut)
},[query])
  return (
    <AppContext.Provider value={{isLoading,isError,movie,query, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext=()=>{
  return useContext(AppContext);
};

export{AppContext, AppProvider, useGlobalContext}

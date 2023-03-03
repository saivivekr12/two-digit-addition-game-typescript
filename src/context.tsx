import React, { useState, useContext, useReducer, useEffect } from 'react'
import { generateQuestions, Questions } from './data/questions'

type AppProviderProps={
  children:React.ReactNode
}
type AppContextProvider = {
  data:Questions;
}

const AppContext = React.createContext({} as AppContextProvider)


const AppProvider = ({ children }:AppProviderProps) => {
  const initialState = {
    data:generateQuestions(),
   }

   console.log(initialState,"initialstate")
  return (
    <AppContext.Provider
      value={{
        ...initialState
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = ():AppContextProvider  => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
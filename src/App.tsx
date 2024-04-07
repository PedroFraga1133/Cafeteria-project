import { createContext, useState, useEffect } from 'react'


import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import { SnackData } from './interfaces/SnackData'
import { getAcomps, getBurgers, getCombos, getDrinks, getIceCreams } from './services/api'
import { request } from 'http'

interface SnackContextProps {
    burgers: SnackData[]
    acomps: SnackData[]
    combos: SnackData[]
    drinks: SnackData[]
    iceCreams: SnackData[]
}


export const SnackContext = createContext({} as SnackContextProps)



export default function App() {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [acomps, setAcomps] = useState<SnackData[]>([])
  const [combos, setCombos] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

   useEffect(() => {
     ;(async () => {

        try {

        

        const burgerRequest = await getBurgers()
        const acompsRequest = await getAcomps()
        const combosRequest = await getCombos()
        const drinksRequest = await getDrinks()
        const iceCreamsRequest = await getIceCreams()

        const requests = [burgerRequest, acompsRequest, combosRequest, drinksRequest, iceCreamsRequest]

        const [ 
          {data: burgerResponse },
          {data: acompsResponse },
          {data: combosResponse },
          {data: drinksResponse},
          {data: iceCreamsResponse }, 
        ] = await Promise.all(requests)
        
        setBurgers(burgerResponse)
        setAcomps(acompsResponse)
        setCombos(combosResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamsResponse)
      } catch (error) {
          console.error(error)
      }
    })()
   }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burgers, acomps, combos, drinks, iceCreams }}>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}

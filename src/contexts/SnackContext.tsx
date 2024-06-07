import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getAcomps, getCombos, getDrinks, getIceCreams } from '../services/api'






interface SnackContextProps {
    burgers: SnackData[]
    acomps: SnackData[]
    combos: SnackData[]
    drinks: SnackData[]
    iceCreams: SnackData[]
}

interface SnackProviderProps {
    children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }:SnackProviderProps ) { 
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
        <SnackContext.Provider value={{ burgers, acomps, combos, drinks, iceCreams }}>
            {children}
        </SnackContext.Provider>
     )
}
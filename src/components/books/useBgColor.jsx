import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

export const useColor= () => {
  const ruter = useRouter()
  const bgColor = useMemo(() =>{
    return ruter.pathname === "/" ? "purple" : "green"
  },[ruter.pathname])

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    return()=>{
      document.body.style.backgroundColor = ""
    }
  }, [bgColor]);

}
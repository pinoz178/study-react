import { useCallback, useState } from 'react'
export const useCounter = () => {
  const [foo, setFoo] = useState(1)
  const [isShow, setisShow] = useState(true)

  const handleClick = useCallback((e) => {
    if(foo<10){
      setFoo(prevfoo => prevfoo + 1)
    }
  }, [foo])

  const handleDisplay = useCallback(() => {
    setisShow((previsShow) => !previsShow)
  },[])

  return { foo, isShow, handleClick, handleDisplay }
}
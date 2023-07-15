import { useCallback, useMemo, useState } from 'react'
export const useCounter = () => {
  const [foo, setFoo] = useState(1)
  const [isShow, setisShow] = useState(true)

  const doubleCount = useMemo(() => {
    return foo * 2
  }, [foo])

  const handleClick = useCallback((e) => {
    if(foo<10){
      setFoo(prevfoo => prevfoo + 1)
    }
  }, [foo])

  const handleDisplay = useCallback(() => {
    setisShow((previsShow) => !previsShow)
  },[])

  return { foo, doubleCount,  isShow, handleClick, handleDisplay }
}
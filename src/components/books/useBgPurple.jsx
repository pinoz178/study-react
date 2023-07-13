import { useEffect } from 'react'

export const useBgPurple = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "purple";
    return()=>{
      document.body.style.backgroundColor = "";
    }
  }, []);

}
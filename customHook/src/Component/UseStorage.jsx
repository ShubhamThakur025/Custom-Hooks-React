import { useEffect, useState } from "react"

export default function UseStorage(){
    const [state, setState] = useState("")
    useEffect(()=>{
        localStorage.setItem("key", state)
    },[state])
    return [state, setState]
}
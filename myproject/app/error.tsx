"use client"
import { useEffect } from "react";

export default function Error(
    {error, reset}: {error: Error; reset:()=>void}
    ){
         useEffect(() => {
            console.error(error)
         }, [error])

    return <div>
        <p>maaf ada error disini</p>
        <button onClick={()=> reset() } >reload halaman</button>
    </div>
} 
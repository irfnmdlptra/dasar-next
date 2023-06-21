"use client"
import Link from "next/link"
import { useState } from "react"

export default function Calculator() {

    const [angka1, setAngka1] = useState(0)
    const [angka2, setAngka2] = useState(0)
    const [hasil, setHasil] = useState(0)
    return (
        <div><Link href="/">Kembali</Link>
            <form action="">
                <input type="text" placeholder="angka 1" onChange={(e)=> setAngka1(Number(e.target.value))} />
                <input type="text" placeholder="angka 2" onChange={(e)=> setAngka2(Number(e.target.value))} />
                <button type="button" onClick={()=> setHasil(angka1+angka2)}>Jumlahkan</button>
                <p>Hasil : {hasil}</p>
            </form>
        </div>
    )
}
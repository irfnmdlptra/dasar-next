import Link from "next/link";

export default function Data({data}:any) {
    return <div>page {data}
        <button><Link href="/">Home</Link></button>
    </div>
}
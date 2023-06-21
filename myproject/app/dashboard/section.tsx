import { useRouter } from "next/router"
import { useNavigation } from 'next/navigation';
export default function Section() {
    const router = useRouter()
    const next = (url:string) => {
        router.push('url')
    }
    return <button onClick={()=> next('/settings')}>Section Button</button>
}
import { useRouter } from "next/router"

export default function index() {
    const router = useRouter()
    return (
        <div>
            <h1>this is at route : {router.query.adminname}</h1>
            <button onClick={() => {
                router.push({
                    pathname: '/admin/[adminname]/settings',
                    query: { adminname: router.query.adminname }
                })
            }}> Go to Settings</button>
            <button onClick={() => router.reload()}>Reload</button>
            <button onClick={() => router.replace('/')}>go to home</button>
        </div >
    )
}

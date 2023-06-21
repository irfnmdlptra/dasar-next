export default function layout({children}:{children: React.ReactNode}) {
    return <div>
        <p>ini adalah halaman layout khusus settings</p>
        {children}
        <button>
            jangan di klik!
        </button>
    </div>
}
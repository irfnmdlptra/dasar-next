import Link from "next/link";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>ini adalah halaman layout khusus settings</p>
      {children}
      <button>
        <Link href="/">jangan di klik!</Link>
      </button>
    </div>
  );
}

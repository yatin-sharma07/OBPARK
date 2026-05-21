import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">Obrive</Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/products">Products</Link>
        <Link href="/fastag" className="hover:text-brand-500 transition-colors">FASTag</Link>
        <Link href="/account">Account</Link>
        <Link href="/login">Login</Link>
        
      </nav>
    </header>
  )
}
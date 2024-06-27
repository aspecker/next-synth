import Link from 'next/link'

interface NavProps {
  page: string
}

export default function NavLink({ page }: NavProps) {
  const pageName = page.charAt(0).toUpperCase() + page.slice(1)

  return <Link href={`/${page}`}>{pageName}</Link>
}

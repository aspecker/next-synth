import { classNames } from '@/utils'
import NavLink from './nav-link'

export default function SideNav() {
  return (
    <div
      className={classNames(
        'w-2/12 h-full fixed right-0 z-10',
        'bg-slate-50 border-l-2 border-indigo-800 text-indigo-800'
      )}
    >
      <nav
        className={classNames(
          'container relative flex flex-col gap-2',
          'mx-auto p-8 text-xl'
        )}
      >
        <NavLink page='dashboard' />
      </nav>
    </div>
  )
}

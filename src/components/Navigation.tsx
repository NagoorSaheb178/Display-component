import { DarkModeToggle } from './DarkModeToggle'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        {/* Your other navigation items */}
      </div>
      <DarkModeToggle />
    </nav>
  )
}
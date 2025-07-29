import { Home, Settings, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">SmartHome</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Devices
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Automation
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Shield className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

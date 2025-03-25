import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400 border border-cyan-400 rounded p-1">
            Ticket-Generator
          </span>
        
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="#" className="text-white hover:text-cyan-400">
            Events
          </Link>
          <Link href="#" className="text-white hover:text-cyan-400">
            My Tickets
          </Link>
          <Link href="#" className="text-white hover:text-cyan-400">
            About Project
          </Link>
        </div>

        <button className="bg-white text-[#001a1e] px-4 py-1 rounded-full text-sm font-medium flex items-center">
          MY TICKETS <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}


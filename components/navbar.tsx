import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400 border border-cyan-400 rounded p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
              <path d="M8 10h8"></path>
              <path d="M8 14h4"></path>
              <path d="M16 3v4"></path>
              <path d="M19 6h-6"></path>
            </svg>
          </span>
          <span className="text-white font-medium">tktx</span>
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


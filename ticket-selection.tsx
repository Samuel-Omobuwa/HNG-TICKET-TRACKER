"use client"

import { useState } from "react"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function TicketSelection() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [ticketCount, setTicketCount] = useState(1)

  return (
    <div className="min-h-screen bg-[#001a1e] text-white">
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-[#002a30] rounded-lg overflow-hidden border border-[#003a40]">
          {/* Header */}
          <div className="p-6 border-b border-[#003a40] flex justify-between items-center">
            <h2 className="text-xl font-light text-white">Ticket Selection</h2>
            <span className="text-xs text-cyan-400">Step 1/3</span>
          </div>

          {/* Event Details */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-2">Techember Fest &apos;25</h1>
            <p className="text-center text-sm text-gray-300 mb-4">
              Join us for an unforgettable experience at
              <br />
              Techember Fest &apos;25
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center text-cyan-400 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>[Event Location]</span>
              </div>
              <div className="flex items-center text-cyan-400 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>March 13, 2023 | 7:00 PM</span>
              </div>
            </div>

            {/* Ticket Types */}
            <div className="mb-6">
              <h3 className="text-sm mb-3">Select Ticket Type:</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div
                  className={`bg-[#003a40] p-3 rounded cursor-pointer transition ${selectedTicket === "regular" ? "ring-2 ring-cyan-400" : ""}`}
                  onClick={() => setSelectedTicket("regular")}
                >
                  <div className="text-xs uppercase mb-1">Regular Access</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">25 left</span>
                    <span className="text-cyan-400 font-medium">Free</span>
                  </div>
                </div>

                <div
                  className={`bg-[#003a40] p-3 rounded cursor-pointer transition ${selectedTicket === "vip50" ? "ring-2 ring-cyan-400" : ""}`}
                  onClick={() => setSelectedTicket("vip50")}
                >
                  <div className="text-xs uppercase mb-1">VIP Access</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">25 left</span>
                    <span className="text-cyan-400 font-medium">$50</span>
                  </div>
                </div>

                <div
                  className={`bg-[#003a40] p-3 rounded cursor-pointer transition ${selectedTicket === "vip150" ? "ring-2 ring-cyan-400" : ""}`}
                  onClick={() => setSelectedTicket("vip150")}
                >
                  <div className="text-xs uppercase mb-1">VIP Access</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">25 left</span>
                    <span className="text-cyan-400 font-medium">$150</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Number of Tickets */}
            <div className="mb-6">
              <h3 className="text-sm mb-2">Number of Tickets</h3>
              <div className="relative">
                <select
                  className="w-full bg-[#001a1e] border border-[#003a40] rounded p-3 appearance-none text-white"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Number.parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 border border-cyan-400 text-cyan-400 py-2 rounded hover:bg-cyan-400/10 transition">
                Cancel
              </button>
              <button className="flex-1 bg-cyan-400 text-[#001a1e] py-2 rounded font-medium hover:bg-cyan-500 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


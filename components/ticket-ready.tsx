"use client"

import { QRCodeSVG } from "qrcode.react"

interface TicketReadyProps {
  ticketData: {
    type: string
    quantity: number
    attendee: {
      name: string
      email: string
      photo: File | null
      about: string
    }
  }
  onBookAnother: () => void
}

export default function TicketReady({ ticketData, onBookAnother }: TicketReadyProps) {
  const handleDownload = () => {
    // Implement ticket download logic here
    console.log("Downloading ticket...")
  }

  return (
    <div className="max-w-2xl mx-auto bg-[#002a30] rounded-lg overflow-hidden border border-[#003a40]">
      <div className="p-6 border-b border-[#003a40] flex justify-between items-center">
        <h2 className="text-xl font-light">Ready</h2>
        <span className="text-xs text-cyan-400">Step 3/3</span>
      </div>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Your Ticket is Booked!</h2>
        <p className="text-gray-400 mb-8">You can download or Check your email for a copy</p>

        <div className="bg-[#001a1e] p-6 rounded-lg inline-block mb-8">
          <div className="bg-white p-4 rounded-lg flex items-center gap-4">
            <QRCodeSVG value={JSON.stringify(ticketData)} size={100} level="H" includeMargin={true} />
            <div className="text-left text-black">
              <h3 className="font-bold text-lg">Techember Fest &apos;25</h3>
              <p className="text-sm text-gray-600">{new Date() }</p>
              <p className="text-sm text-gray-600">54 Bambose street, Ikeja, Lagos</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onBookAnother}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition"
          >
            Book Another Ticket
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-cyan-400 text-[#001a1e] rounded font-medium hover:bg-cyan-500 transition"
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  )
}


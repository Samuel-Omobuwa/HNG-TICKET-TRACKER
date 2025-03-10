"use client"

import { useState } from "react"
import TicketSelection from "@/components/ticket-selection"
import AttendeeDetails from "@/components/attendee-details"
import TicketReady from "@/components/ticket-ready"
import Navbar from "@/components/navbar"

export default function TicketBooking() {
  const [step, setStep] = useState(1)
  const [ticketData, setTicketData] = useState({
    type: "",
    quantity: 1,
    attendee: {
      name: "",
      email: "",
      photo: null as File | null,
      about: "",
    },
  })

  const handleTicketSelect = (data: { type: string; quantity: number }) => {
    setTicketData((prev) => ({ ...prev, ...data }))
    setStep(2)
  }

  const handleAttendeeSubmit = (data: { name: string; email: string; photo: File | null; about: string }) => {
    setTicketData((prev) => ({ ...prev, attendee: data }))
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-[#001a1e] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {step === 1 && <TicketSelection onNext={handleTicketSelect} />}
        {step === 2 && <AttendeeDetails onBack={() => setStep(1)} onNext={handleAttendeeSubmit} />}
        {step === 3 && <TicketReady ticketData={ticketData} onBookAnother={() => setStep(1)} />}
      </div>
    </div>
  )
}


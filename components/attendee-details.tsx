"use client";

import type React from "react";

import { useState } from "react";
import { Upload } from "lucide-react";

interface AttendeeDetailsProps {
  onBack: () => void;
  onNext: (data: {
    name: string;
    email: string;
    photo: File | null;
    about: string;
  }) => void;
}

export default function AttendeeDetails({
  onBack,
  onNext,
}: AttendeeDetailsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: null as File | null,
    about: "",
  });

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, photo: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#002a30] rounded-lg overflow-hidden border border-[#003a40]">
      <div className="p-6 border-b border-[#003a40] flex justify-between items-center">
        <h2 className="text-xl font-light">Attendee Details</h2>
        <span className="text-xs text-cyan-400">Step 2/3</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <p className="text-sm mb-3">Upload Profile Photo</p>
          <div
            className="w-32 h-32 bg-[#001a1e] rounded-lg flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-[#003a40]"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {formData.photo ? (
              <img
                src={URL.createObjectURL(formData.photo) || "/placeholder.svg"}
                alt="Profile preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <Upload className="w-6 h-6 text-cyan-400 mb-2" />
                <p className="text-xs text-center text-gray-400">
                  Drag & drop or click to upload
                </p>
              </>
            )}
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-[#001a1e] border border-[#003a40] rounded p-3 text-white placeholder-gray-400"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#001a1e] border border-[#003a40] rounded p-3 text-white placeholder-gray-400"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <textarea
            placeholder="About the project"
            className="w-full bg-[#001a1e] border border-[#003a40] rounded p-3 text-white placeholder-gray-400 min-h-[100px]"
            value={formData.about}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, about: e.target.value }))
            }
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 border border-cyan-400 text-cyan-400 py-2 rounded hover:bg-cyan-400/10 transition"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-cyan-400 text-[#001a1e] py-2 rounded font-medium hover:bg-cyan-500 transition"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { X, Send } from "lucide-react"

interface AIChatProps {
  onClose: () => void
}

export default function AIChat({ onClose }: AIChatProps) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full bg-white shadow-lg border-l">
      {/* Chat Header */}
      <div className="bg-blue-100 p-3 flex justify-between items-center">
        <h3 className="font-medium">AI Chat</h3>
        <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat History */}
      <div className="flex-grow p-4 overflow-y-auto">
        <p className="text-gray-500">AI Chat conversation history...</p>
      </div>

      {/* Message Input */}
      <div className="p-3 border-t">
        <div className="flex flex-col space-y-3">
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none min-h-[80px]"
          />
          <Button className="w-full" onClick={handleSend}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

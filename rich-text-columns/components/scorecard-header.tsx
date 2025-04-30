"use client"

import StrategicGoal, { type StrategicGoalKey } from "./strategic-goal"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScoreCardHeaderProps {
  onGoalFilterChange: (goal: StrategicGoalKey) => void
  onChatToggle: () => void
}

export default function ScoreCardHeader({ onGoalFilterChange, onChatToggle }: ScoreCardHeaderProps) {
  return (
    <div className="space-y-3 border-b pb-4">
      <div className="flex flex-col space-y-1">
        <h2 className="text-lg font-semibold">Scorecard Category</h2>
      </div>

      <StrategicGoal onGoalChange={onGoalFilterChange} />

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">ORD LT Sponsor: Sarah Johnson, COO</h2>
        </div>

        <Button variant="ghost" className="flex items-center gap-2" onClick={onChatToggle}>
          <Menu className="h-5 w-5" />
          <span>AI Chat</span>
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Strategic goal mapping
export const strategicGoalMap = {
  all: "All Strategic Goals",
  SG1: "Holding the line",
  SG2: "Letting it go",
  SG3: "This is the main",
}

export type StrategicGoalKey = keyof typeof strategicGoalMap

interface StrategicGoalProps {
  onGoalChange: (goal: StrategicGoalKey) => void
}

export default function StrategicGoal({ onGoalChange }: StrategicGoalProps) {
  const [selectedGoal, setSelectedGoal] = useState<StrategicGoalKey>("all")

  const handleGoalChange = (value: string) => {
    const goal = value as StrategicGoalKey
    setSelectedGoal(goal)
    onGoalChange(goal)
  }

  return (
    <div>
      <Select value={selectedGoal} onValueChange={handleGoalChange}>
        <SelectTrigger className="w-full max-w-xs">
          <SelectValue placeholder="Select a strategic goal" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Strategic Goals</SelectLabel>
            {Object.entries(strategicGoalMap).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {key !== "all" ? `${key}: ${value}` : value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

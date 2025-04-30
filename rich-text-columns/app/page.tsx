"use client"

import { useState } from "react"
import RichTextTable from "@/components/rich-text-table"
import ScoreCardHeader from "@/components/scorecard-header"
import AIChat from "@/components/ai-chat"
import { tableData } from "@/data/table-data"
import type { StrategicGoalKey } from "@/components/strategic-goal"

export default function Home() {
  const [goalFilter, setGoalFilter] = useState<StrategicGoalKey>("all")
  const [isChatExpanded, setIsChatExpanded] = useState(false)

  const handleChatToggle = () => {
    setIsChatExpanded(!isChatExpanded)
  }

  return (
    <main className="container mx-auto py-6 px-4">
      <ScoreCardHeader onGoalFilterChange={setGoalFilter} onChatToggle={handleChatToggle} />

      <div className={`mt-6 transition-all duration-300 ease-in-out ${isChatExpanded ? "pr-[320px]" : ""}`}>
        <RichTextTable data={tableData} goalFilter={goalFilter} />
      </div>

      {isChatExpanded && (
        <div className="fixed top-0 right-0 h-full w-[320px] z-50">
          <AIChat onClose={handleChatToggle} />
        </div>
      )}
    </main>
  )
}

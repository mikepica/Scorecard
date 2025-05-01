"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { TableData } from "@/data/table-data"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronRight, MessageSquare, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import type { StrategicGoalKey } from "./strategic-goal"

interface RichTextTableProps {
  data: TableData
  goalFilter: StrategicGoalKey
}

type CellShading = "none" | "blue" | "red" | "amber" | "green" | "grey"

export default function RichTextTable({ data, goalFilter }: RichTextTableProps) {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({})
  const [cellShadings, setCellShadings] = useState<Record<string, CellShading>>({})
  const [cellComments, setCellComments] = useState<Record<string, string>>({})
  const [commentDialogOpen, setCommentDialogOpen] = useState(false)
  const [activeCommentCell, setActiveCommentCell] = useState<string | null>(null)
  const [commentText, setCommentText] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Load saved data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/cell-data')
        const { shadings, comments } = await response.json()
        setCellShadings(shadings)
        setCellComments(comments)
      } catch (error) {
        console.error('Failed to load cell data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  // Save data whenever it changes
  useEffect(() => {
    if (!isLoading) {
      const saveData = async () => {
        try {
          await fetch('/api/cell-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              shadings: cellShadings,
              comments: cellComments,
            }),
          })
        } catch (error) {
          console.error('Failed to save cell data:', error)
        }
      }
      saveData()
    }
  }, [cellShadings, cellComments, isLoading])

  // Filter rows based on selected strategic goal
  const filteredRows = goalFilter === "all" ? data.rows : data.rows.filter((row) => row.strategicGoal === goalFilter)

  const toggleRow = (rowId: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }))
  }

  const setCellShading = (rowId: number, colId: string, shading: CellShading) => {
    const cellId = `${rowId}-${colId}`
    setCellShadings((prev) => ({
      ...prev,
      [cellId]: shading,
    }))
  }

  const openCommentDialog = (rowId: number, colId: string) => {
    const cellId = `${rowId}-${colId}`
    setActiveCommentCell(cellId)
    setCommentText(cellComments[cellId] || "")
    setCommentDialogOpen(true)
  }

  const saveComment = () => {
    if (activeCommentCell) {
      if (commentText.trim()) {
        setCellComments((prev) => ({
          ...prev,
          [activeCommentCell]: commentText,
        }))
      } else {
        // If comment is empty, remove it
        const newComments = { ...cellComments }
        delete newComments[activeCommentCell]
        setCellComments(newComments)
      }
    }
    setCommentDialogOpen(false)
  }

  const getShadingClass = (shading: CellShading) => {
    switch (shading) {
      case "blue":
        return "bg-blue-100/70"
      case "red":
        return "bg-red-100/70"
      case "amber":
        return "bg-amber-100/70"
      case "green":
        return "bg-green-100/70"
      case "grey":
        return "bg-gray-100/70"
      default:
        return ""
    }
  }

  return (
    <>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          {filteredRows.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No data available for the selected strategic goal.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead className="w-[320px]">Strategic Programs (Objectives)</TableHead>
                  {data.columns.slice(1).map((column) => (
                    <TableHead key={column.id} className="w-[200px] text-center">{column.title}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows.map((row) => {
                  const isExpanded = expandedRows[row.id] || false

                  return (
                    <TableRow key={row.id}>
                      <TableCell className="w-[50px] p-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleRow(row.id)}
                          aria-label={isExpanded ? "Collapse row" : "Expand row"}
                        >
                          {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </Button>
                      </TableCell>
                      {data.columns.map((column, colIdx) => {
                        const cellId = `${row.id}-${column.id}`
                        const cellContent = row.cells[column.id]
                        const cellShading = cellShadings[cellId] || "none"
                        const shadingClass = getShadingClass(cellShading)
                        const hasComment = cellComments[cellId] ? true : false

                        return (
                          <TableCell
                            key={`${row.id}-${column.id}`}
                            className={`relative p-0 ${shadingClass} ${colIdx === 0 ? "w-[320px]" : "w-[200px] text-center"}`}
                          >
                            <div className="flex justify-end absolute right-2 top-2 z-10 gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 rounded-full opacity-70 hover:opacity-100 relative"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openCommentDialog(row.id, column.id)
                                }}
                              >
                                <MessageSquare className="h-4 w-4" />
                                {hasComment && (
                                  <div
                                    className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-400 border-2 border-white"
                                    aria-label="Has comment"
                                  />
                                )}
                                <span className="sr-only">Cell comments</span>
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 rounded-full"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Palette className="h-4 w-4" />
                                    <span className="sr-only">Cell shading options</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "none")}>
                                    <div className="w-4 h-4 mr-2 rounded border border-gray-300"></div>
                                    None
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "blue")}>
                                    <div className="w-4 h-4 mr-2 rounded bg-blue-100 border border-blue-300"></div>
                                    Blue
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "red")}>
                                    <div className="w-4 h-4 mr-2 rounded bg-red-100 border border-red-300"></div>
                                    Red
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "amber")}>
                                    <div className="w-4 h-4 mr-2 rounded bg-amber-100 border border-amber-300"></div>
                                    Amber
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "green")}>
                                    <div className="w-4 h-4 mr-2 rounded bg-green-100 border border-green-300"></div>
                                    Green
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => setCellShading(row.id, column.id, "grey")}>
                                    <div className="w-4 h-4 mr-2 rounded bg-gray-100 border border-gray-300"></div>
                                    Grey
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="p-4 px-6 pr-12">
                              <div
                                className={`rich-text-content prose prose-sm max-w-none ${isExpanded ? "" : "line-clamp-2"}`}
                                style={{ textAlign: colIdx === 0 ? "left" : "center" }}
                              >
                                <div dangerouslySetInnerHTML={{ __html: cellContent }} />
                              </div>
                            </div>
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </Card>

      <Dialog open={commentDialogOpen} onOpenChange={setCommentDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cell Comment</DialogTitle>
            <DialogDescription>
              Add or edit a comment for this cell. Leave empty to remove the comment.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Add your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setCommentDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={saveComment}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

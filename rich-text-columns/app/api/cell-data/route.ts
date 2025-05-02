import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Use a more reliable path resolution for Next.js API routes
const DATA_FILE = path.join(process.cwd(), 'data', 'cell-data.json')

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Ensure the data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ shadings: {}, comments: {} }))
}

export async function GET() {
  try {
    console.log('Reading data from:', DATA_FILE)
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error reading cell data:', error)
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received POST request to save data')
    const { shadings, comments } = await request.json()
    console.log('Data to save:', { shadings, comments })
    
    const data = { shadings, comments }
    console.log('Writing to file:', DATA_FILE)
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
    console.log('Data saved successfully')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving cell data:', error)
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 })
  }
} 
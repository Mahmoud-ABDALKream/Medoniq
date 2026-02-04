import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('file') || 'medoniq.apk'

    // Security: Only allow downloading specific files from public directory
    if (!fileName.endsWith('.apk')) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      )
    }

    // Construct the file path - this will be served from public directory via Vercel
    const filePath = join(process.cwd(), 'public', fileName)
    
    try {
      const fileBuffer = await readFile(filePath)
      
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/vnd.android.package-archive',
          'Content-Length': fileBuffer.length.toString(),
          'Content-Disposition': `attachment; filename="${fileName}"`,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
    } catch (error) {
      console.error('[v0] File not found:', filePath)
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('[v0] Download error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

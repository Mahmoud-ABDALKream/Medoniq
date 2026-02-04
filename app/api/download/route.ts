import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('file') || 'medoniq.apk'

    // Security: Only allow downloading specific APK files
    if (!fileName.match(/^[a-zA-Z0-9._-]+\.apk$/)) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      )
    }

    // For Vercel: Redirect to the public file directly
    // Vercel serves /public files at the root path
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXTAUTH_URL 
      ? process.env.NEXTAUTH_URL
      : 'http://localhost:3000'
    
    const fileUrl = `${baseUrl}/${fileName}`
    
    // Return a redirect to the static file
    return NextResponse.redirect(fileUrl, {
      status: 307, // Temporary redirect - preserves method
    })
  } catch (error) {
    console.error('[v0] Download error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

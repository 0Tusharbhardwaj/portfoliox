import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every hour (ISR)

export async function GET() {
  // In production, this can query MongoDB Atlas or Redis for live counts
  const stats = {
    registeredUsers: 1000,
    totalVisitors: 30000,
    githubContributions: 1200,
    activeColleges: 50,
    lastUpdated: new Date().toISOString(),
  };

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

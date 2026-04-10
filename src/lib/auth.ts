import type { NextRequest } from "next/server";

export type Session = {
  userId: string;
  email: string;
} | null;

/**
 * Verifies the current session from the request cookies.
 *
 * Currently uses a simple signed cookie ("ki-session") as a placeholder.
 * To wire up Supabase Auth, replace the body of this function with:
 *
 *   import { createServerClient } from '@supabase/ssr'
 *   const supabase = createServerClient(
 *     process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
 *     { cookies: { get: (name) => request.cookies.get(name)?.value } }
 *   )
 *   const { data: { user } } = await supabase.auth.getUser()
 *   return user ? { userId: user.id, email: user.email! } : null
 */
export async function verifySession(request: NextRequest): Promise<Session> {
  const sessionCookie = request.cookies.get("ki-session");

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    // Decode the base64 session payload (set by /admin/login on success)
    const payload = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString("utf-8")
    );

    if (!payload?.userId || !payload?.email) {
      return null;
    }

    return { userId: payload.userId, email: payload.email };
  } catch {
    return null;
  }
}

/**
 * Creates a session cookie value for a given user.
 * Call this from your /admin/login API route after credentials are verified.
 */
export function createSessionToken(userId: string, email: string): string {
  return Buffer.from(JSON.stringify({ userId, email })).toString("base64");
}

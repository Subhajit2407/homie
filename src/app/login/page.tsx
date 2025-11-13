"use client"

import { FullScreenAuth } from "@/components/ui/full-screen-signup"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log("Login attempt:", { email, password })
    // For now, just redirect to home
    // router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <FullScreenAuth mode="login" onSubmit={handleLogin} />
    </div>
  )
}
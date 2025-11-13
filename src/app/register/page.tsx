"use client"

import { FullScreenAuth } from "@/components/ui/full-screen-signup"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const handleSignup = (email: string, password: string, name?: string) => {
    // TODO: Implement actual signup logic
    console.log("Signup attempt:", { email, password, name })
    // For now, just redirect to login
    // router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <FullScreenAuth mode="signup" onSubmit={handleSignup} />
    </div>
  )
}

"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Mail, Lock } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <section className="flex min-h-[calc(100vh-200px)] items-center py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <Card className="rounded-2xl border border-border/40 bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome Back</h1>
                <p className="text-muted-foreground">Sign in to your Homie account</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-[#FF8C42] hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-[#FF8C42] py-6 text-lg font-bold hover:bg-[#ff7a2e]">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link href="#" className="font-semibold text-[#FF8C42] hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

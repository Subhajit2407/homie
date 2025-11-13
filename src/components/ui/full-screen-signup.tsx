Sunburst } from "lucide-react"
import { useState } from "react"

interface FullScreenAuthProps {
  mode?: "login" | "signup"
  onSubmit?: (email: string, password: string, name?: string) => void
}

export const FullScreenAuth = ({ mode = "signup", onSubmit }: FullScreenAuthProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [nameError, setNameError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  const validatePassword = (value: string) => {
    return value.length >= 8
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.")
      valid = false
    } else {
      setEmailError("")
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters.")
      valid = false
    } else {
      setPasswordError("")
    }

    if (mode === "signup" && !name.trim()) {
      setNameError("Name is required.")
      valid = false
    } else {
      setNameError("")
    }

    setSubmitted(true)

    if (valid) {
      if (onSubmit) {
        onSubmit(email, password, name)
      } else {
        console.log("Form submitted!")
        console.log("Email:", email)
        if (mode === "signup") {
          console.log("Name:", name)
        }
      }
      setEmail("")
      setPassword("")
      setName("")
      setSubmitted(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden p-4">
      <div className="w-full relative max-w-5xl overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-3xl">
        {/* Animated Background Effects */}
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-transparent to-black/20 z-10 pointer-events-none"></div>
        
        <div className="flex absolute inset-0 overflow-hidden backdrop-blur-sm pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-full w-16 bg-gradient-to-b from-transparent via-black/50 to-transparent opacity-20"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="w-60 h-60 bg-orange-500 absolute -bottom-20 -left-20 rounded-full blur-3xl opacity-30 z-0"></div>
        <div className="w-32 h-20 bg-white absolute bottom-10 left-10 rounded-full blur-2xl opacity-20 z-0"></div>

        {/* Left Side - Branding */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-12 md:w-1/2 relative rounded-l-3xl overflow-hidden flex items-center">
          <div className="relative z-20">
            <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-6">
              Find your perfect stay with <span className="text-orange-500">Homie</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              Connecting students and professionals to verified PGs, flats & coliving homes across Bengaluru.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col bg-white relative z-20">
          <div className="flex flex-col items-left mb-8">
            <div className="text-orange-500 mb-4">
              <Sunburst className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-medium mb-2 tracking-tight text-foreground">
              {mode === "login" ? "Welcome Back" : "Get Started"}
            </h2>
            <p className="text-left text-muted-foreground">
              {mode === "login" 
                ? "Sign in to your Homie account" 
                : "Welcome to Homie — Let's get started"}
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            {mode === "signup" && (
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                    nameError ? "border-red-500" : "border-gray-300"
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!nameError}
                  aria-describedby="name-error"
                />
                {nameError && (
                  <p id="name-error" className="text-red-500 text-xs mt-1">
                    {nameError}
                  </p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="hi@homie.com"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!emailError}
                aria-describedby="email-error"
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {emailError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2 text-foreground">
                {mode === "login" ? "Password" : "Create new password"}
              </label>
              <input
                type="password"
                id="password"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-1 bg-white text-black focus:ring-orange-500 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!passwordError}
                aria-describedby="password-error"
                autoComplete="off"
              />
              {passwordError && (
                <p id="password-error" className="text-red-500 text-xs mt-1">
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mt-2"
            >
              {mode === "login" ? "Sign In" : "Create a new account"}
            </button>

            <div className="text-center text-gray-600 text-sm">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <a href="/register" className="text-foreground font-medium underline">
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have account?{" "}
                  <a href="/login" className="text-foreground font-medium underline">
                    Login
                  </a>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

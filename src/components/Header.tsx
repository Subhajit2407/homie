"use client"

import { Home, Building2, Users, Info, User, Shield, BookOpen } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function Header() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Find PGs', url: '/find-pgs', icon: Building2 },
    { name: 'Agents', url: '/agents', icon: Users },
    { name: 'Safety', url: '/safety', icon: Shield },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Login', url: '/login', icon: User }
  ]

  return <NavBar items={navItems} />
}
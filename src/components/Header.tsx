"use client"

import { Home, Building2, Users, Info, User } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function Header() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Find PGs', url: '#find-pgs', icon: Building2 },
    { name: 'Agents', url: '#agents', icon: Users },
    { name: 'About Us', url: '#about', icon: Info },
    { name: 'Login', url: '#login', icon: User }
  ]

  return <NavBar items={navItems} />
}
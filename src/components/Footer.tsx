"use client"

import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/30 bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="mb-4 block text-2xl font-bold text-foreground">homie.</span>
            <p className="mb-4 text-sm text-muted-foreground">
              Your trusted partner in finding the perfect PG and rental properties in Bengaluru.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-[#FF8C42] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-[#FF8C42] hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-[#FF8C42] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#support" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-[#FF8C42]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF8C42]" />
                <span>Koramangala, Bengaluru 560034</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#FF8C42]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#FF8C42]" />
                <span>contact@homie.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Homie. All rights reserved. Made with ❤️ in Bengaluru.
          </p>
        </div>
      </div>
    </footer>
  )
}
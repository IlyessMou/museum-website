"use client"

import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary/20" />
              <span className="text-xl font-bold">Battements d&apos;Espoir</span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              Un musée virtuel 3D dédié à la sensibilisation sur l&apos;état du système de santé tunisien 
              et aux solutions technologiques pour un avenir meilleur.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#mission", label: "Notre Mission" },
                { href: "#pavillons", label: "Les Pavillons" },
                { href: "#solutions", label: "Solutions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ODD */}
          <div>
            <h4 className="font-semibold mb-4">Nos ODD</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-background/70">ODD 3 — Bonne santé</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-background/70">ODD 9 — Innovation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-background/70">ODD 10 — Égalité</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © 2025-2026 Battements d&apos;Espoir. Projet universitaire — Classe 3A60.
            </p>
            <p className="text-background/50 text-sm flex items-center gap-1">
              Créé avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Tunisie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

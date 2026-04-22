"use client"

import { ArrowDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-hospital.jpg" 
          alt="Hôpital tunisien moderne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>
      
      {/* Animated pulse circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/10 animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-primary/20 animate-pulse delay-100" />
        <div className="absolute inset-16 rounded-full border border-primary/30 animate-pulse delay-200" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Musée Virtuel 3D Immersif
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          <span className="block text-balance">Battements</span>
          <span className="block text-primary">d&apos;Espoir</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed">
          Un voyage immersif au cœur du système de santé tunisien. 
          Du constat à l&apos;espoir, découvrez comment l&apos;innovation peut transformer les hôpitaux.
        </p>

        {/* Problem Statement */}
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-10">
          <p className="text-base md:text-lg text-foreground italic leading-relaxed">
            « Comment l&apos;innovation peut-elle aider à transformer les hôpitaux tunisiens 
            pour offrir de meilleurs soins à tous ? »
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" asChild>
            <Link href="#visite">
              <Play className="w-5 h-5 mr-2" />
              Commencer la Visite
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
            <Link href="#mission">
              Découvrir Notre Mission
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#mission" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Défiler</span>
            <ArrowDown className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

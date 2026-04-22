"use client"

import { Play, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CtaSection() {
  return (
    <section id="visite" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/medical-team.jpg" 
          alt="Équipe médicale tunisienne"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Heart */}
        <div className="mb-8">
          <div className="relative inline-block">
            <Heart className="w-16 h-16 text-white fill-white/20 animate-pulse" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
          Prêt à Découvrir le Musée ?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Explorez notre musée virtuel 3D sur Artsteps et vivez une expérience immersive 
          au cœur des défis et solutions du système de santé tunisien.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl"
          >
            <a href="https://metasteps.com/viewer/98de2aff-3bcb-4a81-92cb-5709fc3f5388" target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5 mr-2" />
              Visiter le Musée 3D
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <a href="https://metasteps.com/viewer/98de2aff-3bcb-4a81-92cb-5709fc3f5388" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Ouvrir sur Artsteps
            </a>
          </Button>
        </div>

        {/* Closing Quote */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <blockquote className="text-lg md:text-xl text-white/90 italic">
            « L&apos;avenir des hôpitaux tunisiens s&apos;écrit aujourd&apos;hui. 
            Chaque innovation est un battement d&apos;espoir. »
          </blockquote>
        </div>
      </div>
    </section>
  )
}

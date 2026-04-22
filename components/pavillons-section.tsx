"use client"

import { Eye, GraduationCap, Rocket, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const pavillons = [
  {
    number: "01",
    icon: Eye,
    title: "Le Miroir des Réalités",
    subtitle: "Le Constat",
    description: "Plongez dans la réalité des hôpitaux tunisiens. Un espace immersif qui confronte le visiteur aux défis quotidiens du système de santé.",
    image: "/images/hospital-challenge.jpg",
    features: [
      "Photos 360° des infrastructures",
      "Mur des témoignages de patients",
      "Carte interactive des inégalités",
      "Frise chronologique des incidents"
    ],
    bgColor: "from-red-500/10 to-red-600/5",
    accentColor: "text-red-500",
    borderColor: "border-red-200",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Espace Santé",
    subtitle: "Les ODD",
    description: "Comprenez les liens entre infrastructures, soins de qualité et inégalités à travers les Objectifs de Développement Durable.",
    image: "/images/rural-clinic.jpg",
    features: [
      "Fiches éducatives sur les ODD",
      "Schéma d'interconnexion",
      "Statistiques nationales",
      "Quiz interactif"
    ],
    bgColor: "from-orange-500/10 to-orange-600/5",
    accentColor: "text-orange-500",
    borderColor: "border-orange-200",
  },
  {
    number: "03",
    icon: Rocket,
    title: "L'Horizon Technologique",
    subtitle: "Les Solutions",
    description: "Découvrez les innovations qui peuvent transformer l'avenir des hôpitaux tunisiens. Une galerie futuriste pleine d'espoir.",
    image: "/images/innovation-hope.jpg",
    features: [
      "Modèles 3D de télémédecine",
      "Maquettes d'hôpitaux écologiques",
      "Technologies IA et IoT",
      "Roadmap de modernisation"
    ],
    bgColor: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
    borderColor: "border-primary/20",
  },
]

export function PavillonsSection() {
  return (
    <section id="pavillons" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Parcours de Visite
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Trois Pavillons, Un Voyage
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Du choc de la réalité à l&apos;espoir des solutions, suivez un parcours narratif 
            conçu pour informer et inspirer le changement.
          </p>
        </div>

        {/* Timeline */}
        <div className="hidden md:flex justify-center items-center gap-4 mb-12">
          <span className="text-sm font-medium text-red-500">Le Choc</span>
          <div className="h-0.5 w-32 bg-gradient-to-r from-red-500 to-orange-500" />
          <span className="text-sm font-medium text-orange-500">La Compréhension</span>
          <div className="h-0.5 w-32 bg-gradient-to-r from-orange-500 to-primary" />
          <span className="text-sm font-medium text-primary">L&apos;Espoir</span>
        </div>

        {/* Pavillons Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pavillons.map((pavilion, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 ${pavilion.borderColor} hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Pavilion Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={pavilion.image}
                  alt={pavilion.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pavilion.bgColor} opacity-70`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`text-6xl font-bold ${pavilion.accentColor} opacity-50`}>
                    {pavilion.number}
                  </span>
                </div>
              </div>
              
              <CardHeader className="relative pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-md`}>
                    <pavilion.icon className={`w-6 h-6 ${pavilion.accentColor}`} />
                  </div>
                </div>
                <p className={`text-sm font-medium ${pavilion.accentColor} mb-1`}>
                  {pavilion.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {pavilion.title}
                </h3>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pavilion.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {pavilion.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${pavilion.accentColor.replace('text', 'bg')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>


              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground italic max-w-3xl mx-auto">
            « L&apos;avenir des hôpitaux tunisiens s&apos;écrit aujourd&apos;hui. 
            Chaque innovation est un battement d&apos;espoir. »
          </blockquote>
        </div>
      </div>
    </section>
  )
}

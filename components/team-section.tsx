"use client"

import { Users } from "lucide-react"

const teamMembers = [
  { name: "Ranim Mahouechi", role: "Chef de projet" },
  { name: "Nada Hamza", role: "Membre" },
  { name: "Esiia Rezgui", role: "Membre" },
  { name: "Ilyess Moulazm", role: "Membre" },
  { name: "Chadi Chairi", role: "Membre" },
  { name: "Ines Ghribi", role: "Membre" },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Notre Équipe
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Les Créateurs du Musée
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Étudiants de la classe 3A60, passionnés par l&apos;innovation 
            et engagés pour un meilleur système de santé en Tunisie.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {member.role === "Chef de projet" && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full whitespace-nowrap">
                    Chef de projet
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-foreground text-sm">
                {member.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="mt-16 bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3A60</div>
              <div className="text-muted-foreground">Classe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2025-2026</div>
              <div className="text-muted-foreground">Année Universitaire</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3 ODD</div>
              <div className="text-muted-foreground">Objectifs de Développement Durable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

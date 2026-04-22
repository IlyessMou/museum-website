"use client"

import { Target, Eye, Lightbulb, AlertTriangle, BookOpen, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const objectives = [
  {
    icon: AlertTriangle,
    title: "Dénoncer",
    description: "Exposer visuellement l'impact de la dégradation hospitalière sur la dignité des patients",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: BookOpen,
    title: "Informer",
    description: "Démontrer l'efficacité de la télémédecine pour réduire les inégalités régionales",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Sparkles,
    title: "Inspirer",
    description: "Promouvoir les technologies durables dans les infrastructures médicales",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function MissionSection() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Notre Mission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sensibiliser pour Transformer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Notre musée virtuel 3D symbolise la transition entre un système de santé 
            en crise et un avenir technologique durable.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Eye className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Notre Vision
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Sensibiliser à l&apos;état critique des infrastructures hospitalières tunisiennes 
                en proposant une vision futuriste fondée sur l&apos;innovation. À travers trois pavillons 
                thématiques, nous guidons le visiteur du choc initial vers l&apos;espoir d&apos;un avenir meilleur.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {objectives.map((obj, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className={`w-14 h-14 rounded-2xl ${obj.bgColor} flex items-center justify-center mb-6`}>
                  <obj.icon className={`w-7 h-7 ${obj.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Objectif {index + 1}: {obj.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ODD Connection */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">En lien avec les Objectifs de Développement Durable</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
              ODD 3 — Bonne santé
            </span>
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm">
              ODD 9 — Innovation
            </span>
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium text-sm">
              ODD 10 — Réduction des inégalités
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Video, Smartphone, Brain, Wifi, Sun, Check, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const technologies = [
  {
    icon: Video,
    title: "Télémédecine",
    description: "Consultation médicale à distance par vidéo",
    benefit: "Accès aux soins pour les régions isolées",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Application de santé",
    description: "Suivre ses analyses, parler avec un médecin sur téléphone",
    benefit: "Plus besoin de se déplacer pour chaque question",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Brain,
    title: "IA médicale",
    description: "Aide au diagnostic et à la gestion des équipements",
    benefit: "Moins d'erreurs médicales, plus de rapidité",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Wifi,
    title: "Capteurs IoT",
    description: "Surveillance automatique des machines et des patients",
    benefit: "Prévention des pannes, alertes en temps réel",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Sun,
    title: "Énergie solaire",
    description: "Production d'électricité propre pour les hôpitaux",
    benefit: "Moins de coupures, économies sur le long terme",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
]

const roadmap = [
  {
    step: 1,
    title: "Rénover les bâtiments",
    description: "Réparer les structures, mettre aux normes les urgences et les blocs opératoires",
  },
  {
    step: 2,
    title: "Moderniser les équipements",
    description: "Remplacer les machines vétustes par des équipements numériques connectés",
  },
  {
    step: 3,
    title: "Créer une app nationale de santé",
    description: "Développer une application accessible à tous les Tunisiens pour consulter à distance",
  },
  {
    step: 4,
    title: "Former le personnel",
    description: "Apprendre aux médecins et infirmiers à utiliser les nouvelles technologies",
  },
  {
    step: 5,
    title: "Connecter les régions",
    description: "Installer la télémédecine dans les hôpitaux des zones éloignées",
  },
  {
    step: 6,
    title: "Passer aux énergies propres",
    description: "Installer des panneaux solaires pour réduire les coupures électriques",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            L&apos;Horizon Technologique
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Les Solutions Innovantes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Des technologies éprouvées qui peuvent révolutionner le système de santé tunisien 
            et offrir de meilleurs soins à tous les citoyens.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl ${tech.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {tech.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <Check className="w-4 h-4" />
                  {tech.benefit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example: Telemedicine Success */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                L&apos;exemple à suivre : Sehhaty
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                En Arabie Saoudite, l&apos;application Sehhaty permet à n&apos;importe quel citoyen de :
              </p>
              <ul className="space-y-3">
                {[
                  "Consulter ses analyses en ligne",
                  "Parler avec un médecin par messagerie ou vidéo",
                  "Prendre rendez-vous sans se déplacer",
                  "Suivre son dossier médical complet"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-primary font-medium">
                La Tunisie pourrait créer une application similaire pour que les habitants 
                de Kasserine ou Jendouba accèdent aux soins depuis leur téléphone.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <Image 
                src="/images/telemedicine.jpg"
                alt="Consultation de télémédecine en Tunisie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-bold mb-2">Application Nationale</h4>
                <p className="text-white/80 text-sm">
                  Une solution pour réduire les inégalités d&apos;accès aux soins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Roadmap : Comment Moderniser un Hôpital Tunisien ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmap.map((item, index) => (
              <div 
                key={index}
                className="relative bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < roadmap.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

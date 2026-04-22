"use client"

import { Quote, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote: "Mon fils avait besoin d'un scanner. L'appareil était en panne depuis 3 mois. On a dû aller à Tunis, à 4 heures de route.",
    author: "Une mère",
    location: "Kasserine",
    type: "patient",
  },
  {
    quote: "On reçoit 200 patients par jour aux urgences. On n'a pas assez de lits, pas assez de personnel. On fait ce qu'on peut.",
    author: "Un infirmier",
    location: "Hôpital Charles-Nicolle",
    type: "staff",
  },
  {
    quote: "J'ai attendu 6 heures aux urgences assis par terre. Il n'y avait plus de chaises, plus de brancards.",
    author: "Un patient",
    location: "Jendouba",
    type: "patient",
  },
]

const timeline = [
  {
    year: "2019",
    event: "Décès de 11 nouveau-nés à la Rabta",
    impact: "Scandale national, enquête ouverte",
  },
  {
    year: "2020",
    event: "Panne des appareils de radiothérapie à Gafsa",
    impact: "Patients sans traitement pendant des semaines",
  },
  {
    year: "2021",
    event: "Surcharge extrême des urgences pendant le COVID",
    impact: "Patients dans les couloirs et les parkings",
  },
  {
    year: "2023",
    event: "Grève des médecins dans les hôpitaux publics",
    impact: "Paralysie partielle du système de santé",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Quote className="w-4 h-4" />
            Témoignages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Les Voix du Terrain
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Des témoignages poignants qui illustrent la réalité quotidienne 
            des patients et du personnel soignant.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 aspect-[21/9]">
          <Image 
            src="/images/hospital-challenge.jpg"
            alt="Salle d'attente d'un hôpital tunisien"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-lg">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              La réalité quotidienne des hôpitaux publics tunisiens vue par ceux qui la vivent.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-foreground text-background relative overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-60" />
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  « {testimonial.quote} »
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="flex items-center gap-1 text-sm opacity-70">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Chronologie des Incidents (2019-2023)
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                    <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-background p-6 rounded-xl border border-border">
                      <div className="text-lg font-bold text-red-500 mb-1">{item.year}</div>
                      <div className="font-medium text-foreground mb-2">{item.event}</div>
                      <div className="text-sm text-muted-foreground">{item.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

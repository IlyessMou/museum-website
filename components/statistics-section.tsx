"use client"

import { TrendingDown, Users, Baby, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingDown,
    value: "6,2%",
    label: "du PIB pour la santé",
    detail: "2x moins que le minimum recommandé par l'OMS (15%)",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    value: "6x",
    label: "plus de médecins à Tunis",
    detail: "18 médecins/10 000 hab. à Tunis vs 3 à Kasserine",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Baby,
    value: "14‰",
    label: "mortalité infantile",
    detail: "14 bébés sur 1000 meurent avant l'âge d'un an",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    value: "76 ans",
    label: "espérance de vie moyenne",
    detail: "Cache de grandes inégalités selon les régions",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
]

const regions = [
  { name: "Grand Tunis", doctors: 18, hospitals: 12, problem: "Surcharge" },
  { name: "Sfax", doctors: 11, hospitals: 5, problem: "Manque de spécialistes" },
  { name: "Gafsa", doctors: 4, hospitals: 2, problem: "Pannes d'équipements" },
  { name: "Kasserine", doctors: 3, hospitals: 2, problem: "Désert médical" },
  { name: "Jendouba", doctors: 4, hospitals: 2, problem: "Transferts forcés" },
]

export function StatisticsSection() {
  return (
    <section id="odd" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Les Chiffres Clés
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            La Réalité en Chiffres
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Des statistiques qui révèlent l&apos;urgence d&apos;agir pour transformer 
            le système de santé tunisien.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-base font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Inequalities Table */}
        <div className="bg-background rounded-2xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-foreground">
              Carte des Inégalités Régionales
            </h3>
            <p className="text-muted-foreground mt-1">
              Plus on s&apos;éloigne de la capitale, moins on a accès à des soins de qualité
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Région</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Médecins / 10 000 hab.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Hôpitaux publics</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Problème principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {regions.map((region, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{region.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div 
                          className="h-2 rounded-full bg-primary" 
                          style={{ width: `${(region.doctors / 18) * 100}%`, maxWidth: '100px' }}
                        />
                        <span className="text-muted-foreground">{region.doctors}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{region.hospitals}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium">
                        {region.problem}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ODD Interconnection */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            L&apos;Interconnexion des ODD
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-orange-100 text-orange-700 px-6 py-4 rounded-xl text-center">
              <div className="font-bold">ODD 9</div>
              <div className="text-sm">Infrastructures vétustes</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="bg-green-100 text-green-700 px-6 py-4 rounded-xl text-center">
              <div className="font-bold">ODD 3</div>
              <div className="text-sm">Mauvaise qualité des soins</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="bg-red-100 text-red-700 px-6 py-4 rounded-xl text-center">
              <div className="font-bold">ODD 10</div>
              <div className="text-sm">Inégalités entre régions</div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            Les populations défavorisées et éloignées souffrent le plus de ce cercle vicieux.
          </p>
        </div>
      </div>
    </section>
  )
}

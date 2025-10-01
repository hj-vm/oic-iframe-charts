"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Occupational Segregation by Service and Sex"

const chartData = [
  { grade: "A", ELH_Female: 44, ELH_Male: 56, ESR_Female: 33, ESR_Male: 67, NSI_Female: 68, NSI_Male: 32, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 38, SPBS_Male: 62 },
  { grade: "B", ELH_Female: 74, ELH_Male: 26, ESR_Female: 0, ESR_Male: 100, NSI_Female: 27, NSI_Male: 73, OHAC_Female: 77, OHAC_Male: 23, SPBS_Female: 0, SPBS_Male: 100 },
  { grade: "C", ELH_Female: 81, ELH_Male: 19, ESR_Female: 23, ESR_Male: 77, NSI_Female: 29, NSI_Male: 71, OHAC_Female: 58, OHAC_Male: 42, SPBS_Female: 67, SPBS_Male: 33 },
  { grade: "D", ELH_Female: 90, ELH_Male: 10, ESR_Female: 50, ESR_Male: 50, NSI_Female: 3, NSI_Male: 97, OHAC_Female: 87, OHAC_Male: 13, SPBS_Female: 71, SPBS_Male: 29 },
  { grade: "E", ELH_Female: 90, ELH_Male: 10, ESR_Female: 21, ESR_Male: 79, NSI_Female: 33, NSI_Male: 67, OHAC_Female: 84, OHAC_Male: 16, SPBS_Female: 87, SPBS_Male: 13 },
  { grade: "F", ELH_Female: 82, ELH_Male: 18, ESR_Female: 65, ESR_Male: 35, NSI_Female: 17, NSI_Male: 83, OHAC_Female: 93, OHAC_Male: 7, SPBS_Female: 92, SPBS_Male: 8 },
  { grade: "G", ELH_Female: 82, ELH_Male: 18, ESR_Female: 44, ESR_Male: 56, NSI_Female: 50, NSI_Male: 50, OHAC_Female: 71, OHAC_Male: 29, SPBS_Female: 79, SPBS_Male: 21 },
  { grade: "H", ELH_Female: 62, ELH_Male: 38, ESR_Female: 56, ESR_Male: 44, NSI_Female: 29, NSI_Male: 71, OHAC_Female: 85, OHAC_Male: 15, SPBS_Female: 25, SPBS_Male: 75 },
  { grade: "I", ELH_Female: 69, ELH_Male: 31, ESR_Female: 57, ESR_Male: 43, NSI_Female: 32, NSI_Male: 68, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 55, SPBS_Male: 45 },
  { grade: "J", ELH_Female: 88, ELH_Male: 12, ESR_Female: 80, ESR_Male: 20, NSI_Female: 40, NSI_Male: 60, OHAC_Female: 89, OHAC_Male: 11, SPBS_Female: 100, SPBS_Male: 0 },
  { grade: "K", ELH_Female: 44, ELH_Male: 56, ESR_Female: 38, ESR_Male: 63, NSI_Female: 0, NSI_Male: 100, OHAC_Female: 67, OHAC_Male: 33, SPBS_Female: 33, SPBS_Male: 67 },
  { grade: "L", ELH_Female: 0, ELH_Male: 0, ESR_Female: 33, ESR_Male: 67, NSI_Female: 0, NSI_Male: 100, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 },
  { grade: "M", ELH_Female: 40, ELH_Male: 60, ESR_Female: 50, ESR_Male: 50, NSI_Female: 23, NSI_Male: 77, OHAC_Female: 100, OHAC_Male: 0, SPBS_Female: 56, SPBS_Male: 44 },
  { grade: "N", ELH_Female: 0, ELH_Male: 0, ESR_Female: 100, ESR_Male: 0, NSI_Female: 0, NSI_Male: 100, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 },
  { grade: "Chief Officials", ELH_Female: 33, ELH_Male: 67, ESR_Female: 0, ESR_Male: 100, NSI_Female: 50, NSI_Male: 50, OHAC_Female: 100, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 100 },
  { grade: "Lecturers", ELH_Female: 65, ELH_Male: 35, ESR_Female: 0, ESR_Male: 0, NSI_Female: 0, NSI_Male: 0, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 },
  { grade: "Teachers", ELH_Female: 78, ELH_Male: 22, ESR_Female: 0, ESR_Male: 0, NSI_Female: 0, NSI_Male: 0, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 },
  { grade: "Head Teachers", ELH_Female: 76, ELH_Male: 24, ESR_Female: 0, ESR_Male: 0, NSI_Female: 0, NSI_Male: 0, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 },
  { grade: "Others", ELH_Female: 100, ELH_Male: 0, ESR_Female: 2, ESR_Male: 98, NSI_Female: 0, NSI_Male: 0, OHAC_Female: 0, OHAC_Male: 0, SPBS_Female: 0, SPBS_Male: 0 }
]

const chartConfig = {
  female: {
    label: "Female",
    color: "var(--chart-1)",
  },
  male: {
    label: "Male", 
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const services = {
  ELH: { label: "ELH", color: "var(--chart-1)" },
  ESR: { label: "ESR", color: "var(--chart-2)" },
  NSI: { label: "NSI", color: "var(--chart-3)" },
  OHAC: { label: "OHAC", color: "var(--chart-4)" },
  SPBS: { label: "SPBS", color: "var(--chart-5)" },
} as const

export function OccupationalSegregationChart() {
  const [activeService, setActiveService] = React.useState<keyof typeof services>("ELH")

  const filteredData = React.useMemo(() => {
    return chartData
      .filter(item => 
        item[`${activeService}_Female`] > 0 || item[`${activeService}_Male`] > 0
      )
      .map(item => ({
        grade: item.grade,
        female: item[`${activeService}_Female`],
        male: item[`${activeService}_Male`]
      }))
  }, [activeService])

  const totalCounts = React.useMemo(() => {
    return Object.keys(services).reduce((acc, service) => {
      const serviceKey = service as keyof typeof services
      const totalFemale = chartData.reduce((sum, item) => sum + item[`${serviceKey}_Female`], 0)
      const totalMale = chartData.reduce((sum, item) => sum + item[`${serviceKey}_Male`], 0)
      const total = totalFemale + totalMale
      acc[serviceKey] = {
        female: total > 0 ? Math.round((totalFemale / total) * 100) : 0,
        male: total > 0 ? Math.round((totalMale / total) * 100) : 0,
        count: total
      }
      return acc
    }, {} as Record<keyof typeof services, { female: number; male: number; count: number }>)
  }, [])

  const femaleColor = services[activeService].color
  const maleColor = `color-mix(in oklab, ${services[activeService].color} 60%, white)`

  return (
    <div className="w-full h-full bg-background m-0 p-0">
      <Card className="w-full h-full border-none shadow-none bg-transparent m-0 p-0">
        <CardHeader className="flex flex-col items-stretch border-b !p-0 !m-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-6">
            <CardTitle>Occupational Segregation by Service and Sex</CardTitle>
            <CardDescription>
              Percentage breakdown of female and male employees by grade across services
            </CardDescription>
          </div>
          <div className="grid grid-cols-2 gap-0 sm:flex sm:flex-wrap">
            {Object.entries(services).map(([key, service]) => {
              const serviceKey = key as keyof typeof services
              const mutedColor = `color-mix(in oklab, ${service.color} 60%, white)`
              const [isHovered, setIsHovered] = React.useState(false)
              
              return (
                <button
                  key={serviceKey}
                  data-active={activeService === serviceKey}
                  className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t border-r even:border-r-0 last:border-r-0 px-3 py-2 text-left sm:border-t-0 sm:border-l sm:border-r-0 sm:even:border-l sm:px-4 sm:py-3 lg:px-6 lg:py-4 min-w-0 sm:min-w-[120px] transition-all duration-200 hover:bg-muted/30 cursor-pointer hover:shadow-sm"
                  style={{
                    borderLeft: activeService === serviceKey 
                      ? `3px solid ${service.color}` 
                      : `3px solid ${mutedColor}`,
                  }}
                  onMouseEnter={(e) => {
                    setIsHovered(true)
                    if (activeService !== serviceKey) {
                      e.currentTarget.style.borderLeft = `3px solid ${service.color}`
                    }
                  }}
                  onMouseLeave={(e) => {
                    setIsHovered(false)
                    if (activeService !== serviceKey) {
                      e.currentTarget.style.borderLeft = `3px solid ${mutedColor}`
                    }
                  }}
                  onClick={() => setActiveService(serviceKey)}
                >
                  <span className="text-muted-foreground text-xs flex items-center gap-2 whitespace-nowrap">
                    <span 
                      className="w-2 h-2 rounded-full transition-all duration-200 flex-shrink-0" 
                      style={{ 
                        backgroundColor: activeService === serviceKey || (isHovered && activeService !== serviceKey) 
                          ? service.color 
                          : 'transparent',
                        border: `2px solid ${service.color}`
                      }}
                    />
                    {service.label}
                  </span>
                  <div className="flex flex-row gap-2 text-xs whitespace-nowrap">
                    <span className="font-medium">
                      F: {totalCounts[serviceKey].female}%
                    </span>
                    <span className="font-medium">
                      M: {totalCounts[serviceKey].male}%
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </CardHeader>
        <CardContent className="flex-1 !p-0 !m-0 flex flex-col">
          <div className="flex-1">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[calc(100vh-180px)] min-h-[400px]"
            >
              <BarChart
                accessibilityLayer
                data={filteredData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <XAxis
                  dataKey="grade"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  angle={0}
                  textAnchor="middle"
                  height={60}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={false}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[180px]"
                      labelFormatter={(value) => `Grade: ${value}`}
                      formatter={(value, name) => {
                        const currentFemaleColor = services[activeService].color
                        const currentMaleColor = `color-mix(in oklab, ${services[activeService].color} 60%, white)`
                        
                        const isFemaleName = name === 'female' || name === 'Female'
                        
                        return [
                          <div key={name} className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-sm" 
                              style={{ 
                                backgroundColor: isFemaleName ? currentFemaleColor : currentMaleColor 
                              }}
                            />
                            <span>{value}%</span>
                          </div>,
                          isFemaleName ? 'Female' : 'Male'
                        ]
                      }}
                    />
                  }
                />
                <Bar 
                  dataKey="female" 
                  fill={femaleColor} 
                  name="Female"
                />
                <Bar 
                  dataKey="male" 
                  fill={maleColor} 
                  name="Male" 
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="flex justify-center gap-4 px-6 py-3 border-t bg-background">
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm border border-muted"
                style={{ backgroundColor: femaleColor }}
              />
              <span className="text-sm font-medium">Female</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm border border-muted"
                style={{ backgroundColor: maleColor }}
              />
              <span className="text-sm font-medium">Male</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OccupationalSegregationChart
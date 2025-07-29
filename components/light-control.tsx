"use client"

import { useState } from "react"
import { Lightbulb, LightbulbOff, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function LightControl() {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", status: true, brightness: 80, color: "warm" },
    { id: 2, name: "Kitchen", status: false, brightness: 60, color: "cool" },
    { id: 3, name: "Bedroom", status: true, brightness: 40, color: "warm" },
    { id: 4, name: "Outdoor", status: true, brightness: 100, color: "cool" },
  ])

  const toggleLight = (id: number) => {
    setLights((prev) => prev.map((light) => (light.id === id ? { ...light, status: !light.status } : light)))
  }

  const updateBrightness = (id: number, brightness: number[]) => {
    setLights((prev) => prev.map((light) => (light.id === id ? { ...light, brightness: brightness[0] } : light)))
  }

  const activeLights = lights.filter((light) => light.status).length

  return (
    <Card className="bg-card border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
          Smart Lights
        </CardTitle>
        <CardDescription>
          {activeLights} of {lights.length} lights on
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {lights.map((light) => (
          <div key={light.id} className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {light.status ? (
                  <Lightbulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <LightbulbOff className="w-4 h-4 text-muted-foreground" />
                )}
                <div>
                  <p className="text-foreground font-medium">{light.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={light.status ? "default" : "secondary"}
                      className={
                        light.status ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" : ""
                      }
                    >
                      {light.status ? "On" : "Off"}
                    </Badge>
                    {light.status && (
                      <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        <Palette className="w-3 h-3 mr-1" />
                        {light.color}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Switch checked={light.status} onCheckedChange={() => toggleLight(light.id)} />
            </div>

            {light.status && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Brightness</span>
                  <span className="text-foreground">{light.brightness}%</span>
                </div>
                <Slider
                  value={[light.brightness]}
                  onValueChange={(value) => updateBrightness(light.id, value)}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

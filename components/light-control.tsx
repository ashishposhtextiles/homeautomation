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
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          Smart Lights
        </CardTitle>
        <CardDescription className="text-slate-400">
          {activeLights} of {lights.length} lights on
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {lights.map((light) => (
          <div key={light.id} className="p-3 rounded-lg bg-slate-700/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                {light.status ? (
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                ) : (
                  <LightbulbOff className="w-4 h-4 text-slate-500" />
                )}
                <div>
                  <p className="text-white font-medium">{light.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={light.status ? "default" : "secondary"}
                      className={light.status ? "bg-yellow-500/20 text-yellow-400" : "bg-slate-600 text-slate-400"}
                    >
                      {light.status ? "On" : "Off"}
                    </Badge>
                    {light.status && (
                      <Badge className="bg-blue-500/20 text-blue-400">
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
                  <span className="text-slate-400">Brightness</span>
                  <span className="text-slate-300">{light.brightness}%</span>
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

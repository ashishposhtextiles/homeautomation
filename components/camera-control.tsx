"use client"

import { useState } from "react"
import { Camera, CameraOff, Video, VideoOff } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export function CameraControl() {
  const [cameras, setCameras] = useState([
    { id: 1, name: "Front Door", status: true, recording: true },
    { id: 2, name: "Living Room", status: false, recording: false },
    { id: 3, name: "Backyard", status: true, recording: false },
  ])

  const toggleCamera = (id: number) => {
    setCameras((prev) =>
      prev.map((camera) =>
        camera.id === id
          ? { ...camera, status: !camera.status, recording: camera.status ? false : camera.recording }
          : camera,
      ),
    )
  }

  const toggleRecording = (id: number) => {
    setCameras((prev) =>
      prev.map((camera) => (camera.id === id && camera.status ? { ...camera, recording: !camera.recording } : camera)),
    )
  }

  const activeCameras = cameras.filter((camera) => camera.status).length
  const recordingCameras = cameras.filter((camera) => camera.recording).length

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Camera className="w-5 h-5 text-blue-500" />
          Security Cameras
        </CardTitle>
        <CardDescription className="text-slate-400">
          {activeCameras} of {cameras.length} cameras active
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {cameras.map((camera) => (
          <div key={camera.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
            <div className="flex items-center gap-3">
              {camera.status ? (
                <Camera className="w-4 h-4 text-green-500" />
              ) : (
                <CameraOff className="w-4 h-4 text-slate-500" />
              )}
              <div>
                <p className="text-white font-medium">{camera.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant={camera.status ? "default" : "secondary"}
                    className={camera.status ? "bg-green-500/20 text-green-400" : "bg-slate-600 text-slate-400"}
                  >
                    {camera.status ? "Online" : "Offline"}
                  </Badge>
                  {camera.recording && (
                    <Badge className="bg-red-500/20 text-red-400">
                      <Video className="w-3 h-3 mr-1" />
                      Recording
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {camera.status && (
                <button
                  onClick={() => toggleRecording(camera.id)}
                  className="p-1 rounded hover:bg-slate-600 transition-colors"
                >
                  {camera.recording ? (
                    <Video className="w-4 h-4 text-red-400" />
                  ) : (
                    <VideoOff className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              )}
              <Switch checked={camera.status} onCheckedChange={() => toggleCamera(camera.id)} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

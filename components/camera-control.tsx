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
    <Card className="bg-card border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Security Cameras
        </CardTitle>
        <CardDescription>
          {activeCameras} of {cameras.length} cameras active
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {cameras.map((camera) => (
          <div key={camera.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              {camera.status ? (
                <Camera className="w-4 h-4 text-green-600 dark:text-green-400" />
              ) : (
                <CameraOff className="w-4 h-4 text-muted-foreground" />
              )}
              <div>
                <p className="text-foreground font-medium">{camera.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant={camera.status ? "default" : "secondary"}
                    className={camera.status ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" : ""}
                  >
                    {camera.status ? "Online" : "Offline"}
                  </Badge>
                  {camera.recording && (
                    <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
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
                  className="p-1 rounded hover:bg-muted transition-colors"
                >
                  {camera.recording ? (
                    <Video className="w-4 h-4 text-red-600 dark:text-red-400" />
                  ) : (
                    <VideoOff className="w-4 h-4 text-muted-foreground" />
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

import { CameraControl } from "@/components/camera-control"
import { LightControl } from "@/components/light-control"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { DeviceStatus } from "@/types/automation"

export default function Dashboard() {
  const [status, setStatus] = useState<DeviceStatus | null>(null)

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios.get('http://localhost:8000/status/all')
        setStatus(res.data)
      } catch (error) {
        alert("Error while fetching")
        console.log(error)
      }
    }
    getStatus()
  }, [])
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-8 h-screen overflow-y-auto scrollbar-thin scrollbar-track-muted scrollbar-thumb-muted-foreground hover:scrollbar-thumb-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Automation</h1>
            <p className="text-muted-foreground">Control devices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* System Status Overview */}
            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  System Status
                </CardTitle>
                <CardDescription>All systems operational</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Network</span>
                    <span className="text-green-600 dark:text-green-400 text-sm">Connected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Security</span>
                    <span className="text-green-600 dark:text-green-400 text-sm">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Power</span>
                    <span className="text-green-600 dark:text-green-400 text-sm">Normal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camera Controls */}
            <CameraControl />

            {/* Light Controls */}
            <LightControl />
          </div>
        </div>
      </main>
    </div>
  )
}

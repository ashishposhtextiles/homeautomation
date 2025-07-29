import { CameraControl } from "@/components/camera-control";
import { LightControl } from "@/components/light-control";
import { Header } from "@/components/header";
import Overview from "@/components/overview";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main className="pt-20 pb-8 h-screen overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Home Automation
            </h1>
            <p className="text-slate-400">Control your smart home devices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Overview />

            <CameraControl />

            <LightControl />
          </div>
        </div>
      </main>
    </div>
  );
}

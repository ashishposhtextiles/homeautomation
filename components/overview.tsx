import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Overview() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="size-3 bg-green-500 rounded-full animate-pulse"></div>
          System Status
        </CardTitle>
        <CardDescription className="text-slate-400">
          All systems operational
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Network</span>
            <span className="text-green-400 text-sm">Connected</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Security</span>
            <span className="text-green-400 text-sm">Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-300">Power</span>
            <span className="text-green-400 text-sm">Normal</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

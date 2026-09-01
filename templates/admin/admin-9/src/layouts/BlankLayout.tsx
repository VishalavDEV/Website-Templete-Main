/* src/layouts/BlankLayout.tsx */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Logo } from '../components/common';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Timer, AlertTriangle, CloudRain, Construction, Layers } from 'lucide-react';

export function BlankLayout() {
  // Let the nested child dictate or we can render full-screen shell
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <Outlet />
    </div>
  );
}

// Subcomponents showing the variations inside pages/pages/Blank/index.tsx
export function LandingLayoutPreview() {
  return (
    <div className="flex-1 flex flex-col bg-background relative overflow-hidden">
      {/* Background Periwinkle/Lavender Blur */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <header className="h-16 border-b border-border/50 px-6 flex items-center justify-between bg-card/65 backdrop-blur-md relative z-10">
        <Logo />
        <div className="flex items-center gap-4">
          <Link to="/auth/login"><Button variant="ghost" size="sm">Login</Button></Link>
          <Link to="/auth/register"><Button size="sm">Get Started</Button></Link>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 max-w-4xl mx-auto space-y-6 relative z-10 select-none">
        <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-semibold border border-primary/20 animate-pulse">
          Version 2.0 Released
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          A Beautiful Space for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Projects</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
          A high fidelity UI layout system built using the soft pastel periwinkle gradient colors from your uploaded image.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/"><Button variant="primary">Access Dashboard</Button></Link>
          <Link to="/elements/components"><Button variant="outline">Browse Elements</Button></Link>
        </div>
      </main>
    </div>
  );
}

export function ComingSoonPreview() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center p-6 text-center relative select-none">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
      <div className="relative z-10 max-w-md w-full space-y-6 border border-border bg-card p-8 rounded-2xl shadow-xl">
        <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
          <Timer className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-sm text-muted-foreground">We are working hard to bring you a brand new dashboard catalog template.</p>
        </div>
        {/* Countdown timers */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-muted p-2 rounded-lg"><p className="text-xl font-bold text-primary">12</p><p className="text-[10px] text-muted-foreground">Days</p></div>
          <div className="bg-muted p-2 rounded-lg"><p className="text-xl font-bold text-primary">08</p><p className="text-[10px] text-muted-foreground">Hours</p></div>
          <div className="bg-muted p-2 rounded-lg"><p className="text-xl font-bold text-primary">45</p><p className="text-[10px] text-muted-foreground">Mins</p></div>
          <div className="bg-muted p-2 rounded-lg"><p className="text-xl font-bold text-primary">19</p><p className="text-[10px] text-muted-foreground">Secs</p></div>
        </div>
        <div className="space-y-2">
          <Input placeholder="Enter your email" />
          <Button className="w-full">Notify Me</Button>
        </div>
        <Link to="/" className="text-xs text-primary hover:underline block">Return Home</Link>
      </div>
    </div>
  );
}

export function MaintenancePreview() {
  return (
    <div className="flex-1 flex items-center justify-center bg-background p-6 text-center select-none">
      <div className="max-w-md space-y-6">
        <div className="h-16 w-16 rounded-full bg-warning/10 text-warning flex items-center justify-center mx-auto animate-bounce">
          <Construction className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-foreground">Under Maintenance</h1>
          <p className="text-sm text-muted-foreground">
            Our servers are currently undergoing schedule performance updates. We will be back online shortly.
          </p>
        </div>
        <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden border border-border">
          <div className="bg-primary h-full rounded-full animate-pulse w-[70%]"></div>
        </div>
        <Button variant="outline" size="sm" onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    </div>
  );
}

export function EmptyStatePreview() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 select-none">
      <div className="max-w-sm text-center space-y-4">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto border border-border text-muted-foreground">
          <Layers className="h-8 w-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">No Projects Found</h3>
          <p className="text-xs text-muted-foreground">You haven't initialized any dashboard template layouts yet. Let's create your first layout project catalog.</p>
        </div>
        <Button size="sm">Create New Layout</Button>
      </div>
    </div>
  );
}

export function ErrorPagePreview() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 text-center select-none">
      <div className="max-w-md space-y-4">
        <h1 className="text-9xl font-black text-primary/30">404</h1>
        <h2 className="text-2xl font-bold">Route Lost in Space</h2>
        <p className="text-sm text-muted-foreground">
          The blank layout variation error view. The requested module catalog has been moved or doesn't exist.
        </p>
        <Link to="/"><Button>Back to Control Room</Button></Link>
      </div>
    </div>
  );
}

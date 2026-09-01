/* src/layouts/AuthLayout.tsx */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Logo } from '../components/common';
import { useSettings } from '../app/providers/SettingsProvider';

export function AuthLayout() {
  const { settings } = useSettings();
  const type = settings.authLayoutType;

  // Render variations dynamically
  if (type === 'split-screen') {
    return (
      <div className="min-h-screen flex bg-background">
        {/* Left Side: Gradient Image Banner */}
        <div className="hidden lg:flex lg:w-1/2 bg-[url('/background.jpg')] bg-cover bg-center items-center justify-center p-12 relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-md text-white text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md">Welcome to our Admin Platform</h1>
            <p className="text-sm text-white/90 drop-shadow-sm font-medium">
              A high performance boilerplate template featuring periwinkle/violet design tokens extracted from your upload.
            </p>
          </div>
        </div>
        
        {/* Right Side: Form Container */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm space-y-6">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Logo />
              <h2 className="text-2xl font-bold tracking-tight text-foreground mt-2">Sign in to your account</h2>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'image-form') {
    // Glassmorphism login card floating on our gradient background!
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center px-4 py-12 relative select-none">
        <div className="absolute inset-0 bg-background/30 dark:bg-background/50 backdrop-blur-[5px]"></div>
        <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/30 bg-white/75 dark:bg-card/75 p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col items-center gap-2 mb-6">
            <Logo />
            <h2 className="text-xl font-bold tracking-tight text-foreground">Sign in to your account</h2>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }

  if (type === 'branding-form') {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-muted/20 px-4">
        <div className="w-full max-w-md flex flex-col items-center gap-6 p-8 border border-border bg-card rounded-2xl shadow-sm">
          <div className="text-center space-y-2">
            <Logo />
            <h1 className="text-2xl font-bold text-foreground">Brand Identity portal</h1>
            <p className="text-xs text-muted-foreground">Admin credentials dashboard authentication</p>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'minimal') {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <Logo />
            <p className="text-xs text-muted-foreground mt-2">Enter credentials below</p>
          </div>
          <div className="border-0 px-2">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'full-screen') {
    return (
      <div className="min-h-screen w-full flex bg-background">
        <div className="w-full md:max-w-md flex flex-col justify-center p-8 md:p-12 border-r border-border bg-card">
          <div className="mb-8">
            <Logo />
            <h2 className="text-2xl font-extrabold text-foreground mt-6">Login Panel</h2>
          </div>
          <Outlet />
        </div>
        <div className="hidden md:block flex-1 bg-[url('/background.jpg')] bg-cover bg-center"></div>
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/40 dark:bg-background px-4 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
          <div className="flex flex-col items-center gap-2 mb-6">
            <Logo />
            <h2 className="text-xl font-bold tracking-tight text-foreground">Secure System Access</h2>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }

  // default: centered card
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12 dark:bg-background">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <h2 className="text-xl font-bold tracking-tight text-foreground">Sign in to your account</h2>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

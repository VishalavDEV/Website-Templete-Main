/* src/components/navigation/Header/index.tsx */
import React, { useState } from 'react';
import { Bell, Search, Sun, Moon, LogOut, Menu, Globe, Plus, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '../../../app/providers/ThemeProvider';
import { useAuth } from '../../../app/providers/AuthProvider';
import { useSidebar } from '../../../app/providers/SidebarProvider';
import { useTranslation } from '../../../app/providers/LocalizationProvider';
import { useNotifications } from '../../../app/providers/NotificationProvider';
import { useSettings } from '../../../app/providers/SettingsProvider';
import { Badge } from '../../ui/Badge';
import { Breadcrumb } from '../Breadcrumb';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { toggleMobile } = useSidebar();
  const { locale, setLocale, t } = useTranslation();
  const { notifications, unreadCount, markAsRead } = useNotifications();
  const { settings, setActiveWorkspace } = useSettings();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showWsMenu, setShowWsMenu] = useState(false);

  const style = settings.headerStyle;
  const workspaces = ['Production HQ', 'Sandbox Staging', 'Development Lab'];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-card/85 backdrop-blur-md px-6 select-none">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobile} className="lg:hidden p-2 -ml-2 rounded-md hover:bg-accent text-foreground cursor-pointer shrink-0">
          <Menu className="h-5 w-5" />
        </button>

        {/* Variations left part */}
        {style === 'breadcrumb-embedded' ? (
          <div className="hidden md:block truncate">
            <Breadcrumb />
          </div>
        ) : style === 'global-search' ? (
          <div className="relative max-w-lg w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Global search tags, databases, components, logs..."
              className="h-10 w-full rounded-lg border border-primary/30 bg-background pl-10 pr-4 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        ) : (
          <div className="relative max-w-xs hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder={t('search_placeholder')}
              className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-4 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">


        {/* Quick Actions (Create New Button) */}
        {style === 'quick-actions' && (
          <button className="hidden sm:flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold shadow hover:bg-primary/95 cursor-pointer">
            <Plus className="h-4 w-4" />
            <span>Create New</span>
          </button>
        )}

        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => { setShowLangMenu(!showLangMenu); setShowNotifications(false); setShowProfileMenu(false); setShowWsMenu(false); }} 
            className="p-2 rounded-full hover:bg-accent text-foreground transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold uppercase"
          >
            <Globe className="h-4.5 w-4.5" />
            <span>{locale}</span>
          </button>
          {showLangMenu && (
            <div className="absolute right-0 mt-2.5 w-32 rounded-lg border border-border bg-card p-1 shadow-lg animate-in fade-in duration-200">
              <button onClick={() => { setLocale('en'); setShowLangMenu(false); }} className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-accent ${locale === 'en' ? 'text-primary font-semibold' : 'text-foreground'}`}>English</button>
              <button onClick={() => { setLocale('es'); setShowLangMenu(false); }} className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-accent ${locale === 'es' ? 'text-primary font-semibold' : 'text-foreground'}`}>Español</button>
              <button onClick={() => { setLocale('fr'); setShowLangMenu(false); }} className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-accent ${locale === 'fr' ? 'text-primary font-semibold' : 'text-foreground'}`}>Français</button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-accent text-foreground transition-colors cursor-pointer">
          {theme === 'light' ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => { setShowNotifications(!showNotifications); setShowLangMenu(false); setShowProfileMenu(false); setShowWsMenu(false); }} 
            className="p-2 rounded-full hover:bg-accent text-foreground transition-colors relative cursor-pointer"
          >
            <Bell className="h-4.5 w-4.5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-destructive-foreground">
                {unreadCount}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2.5 w-80 rounded-lg border border-border bg-card p-4 shadow-lg animate-in fade-in duration-200">
              <h4 className="font-semibold text-sm border-b border-border pb-2 mb-2 flex items-center justify-between">
                <span>Notifications</span>
                {unreadCount > 0 && <Badge variant="destructive">{unreadCount} unread</Badge>}
              </h4>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-4">No notifications</p>
                ) : (
                  notifications.map(n => (
                    <div 
                      key={n.id} 
                      onClick={() => markAsRead(n.id)}
                      className={`text-xs border-b border-border/50 pb-2 last:border-0 last:pb-0 cursor-pointer p-1.5 rounded hover:bg-accent/40 transition-colors ${!n.read ? 'bg-primary/5 font-medium' : ''}`}
                    >
                      <p className="font-medium text-foreground flex items-center justify-between">
                        <span>{n.title}</span>
                        {!n.read && <span className="h-2 w-2 rounded-full bg-primary inline-block"></span>}
                      </p>
                      <p className="text-muted-foreground mt-0.5">{n.message}</p>
                      <span className="text-[10px] text-muted-foreground/60">{n.time}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="relative">
          <button onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifications(false); setShowLangMenu(false); setShowWsMenu(false); }} className="flex items-center gap-2 focus:outline-none cursor-pointer">
            <img src={user?.avatar} alt={user?.name} className="h-8.5 w-8.5 rounded-full border border-border object-cover" />
            <div className="hidden text-left xl:block">
              <p className="text-xs font-semibold text-foreground leading-tight">{user?.name}</p>
              <p className="text-[10px] text-muted-foreground">{user?.role}</p>
            </div>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2.5 w-52 rounded-lg border border-border bg-card p-2 shadow-lg animate-in fade-in duration-200">
              <div className="px-3 py-2 border-b border-border/60 mb-1.5 text-xs">
                <p className="font-medium text-foreground">{user?.name}</p>
                <p className="text-muted-foreground/80 overflow-hidden text-ellipsis">{user?.email}</p>
              </div>
              <button onClick={logout} className="w-full flex items-center gap-2 rounded px-3 py-2 text-left text-xs text-destructive hover:bg-destructive/10 transition-colors cursor-pointer">
                <LogOut className="h-4 w-4" />
                <span>{t('logout')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

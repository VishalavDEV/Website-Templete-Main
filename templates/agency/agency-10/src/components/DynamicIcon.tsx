import React from 'react';
import {
  Brain,
  Sparkles,
  Terminal,
  Layout,
  Smartphone,
  Cpu,
  Cloud,
  Code,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Search,
  Compass,
  Palette,
  Globe,
  DollarSign,
  Heart,
  BookOpen,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Layers,
  Server,
  Database,
  Lock,
  Zap,
  Activity,
  Award,
  Users,
  Building,
  HelpCircle,
  FileText,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Upload,
  X,
  Menu,
  Sliders,
  Filter,
  Eye,
  Check,
  Share2,
  Copy,
  ChevronDown
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'brain':
      return <Brain className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'terminal':
      return <Terminal className={className} />;
    case 'layout':
      return <Layout className={className} />;
    case 'smartphone':
      return <Smartphone className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'cloud':
      return <Cloud className={className} />;
    case 'code':
      return <Code className={className} />;
    case 'shieldcheck':
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'rocket':
      return <Rocket className={className} />;
    case 'trendingup':
      return <TrendingUp className={className} />;
    case 'search':
      return <Search className={className} />;
    case 'compass':
      return <Compass className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'dollarsign':
      return <DollarSign className={className} />;
    case 'heart':
      return <Heart className={className} />;
    case 'bookopen':
      return <BookOpen className={className} />;
    case 'calendar':
      return <Calendar className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'server':
      return <Server className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'lock':
      return <Lock className={className} />;
    case 'zap':
      return <Zap className={className} />;
    case 'activity':
      return <Activity className={className} />;
    case 'award':
      return <Award className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'building':
      return <Building className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

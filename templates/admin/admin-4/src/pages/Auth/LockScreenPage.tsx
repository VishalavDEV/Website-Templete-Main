import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Avatar } from '../../components/Common/Avatar';
import { Button } from '../../components/Common/Button';
import { Lock, ArrowRight } from 'lucide-react';

export const LockScreenPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, addToast } = useApp();
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToast(`Session unlocked. Welcome back, ${currentUser.name}!`, 'success');
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-app-main flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-app-surface border border-app rounded-2xl shadow-2xl p-8 text-center space-y-6">
        <div className="space-y-3">
          <Avatar src={currentUser.avatar} name={currentUser.name} size="xl" className="mx-auto" />
          <div>
            <h1 className="text-xl font-bold text-app-primary">{currentUser.name}</h1>
            <p className="text-xs text-app-secondary">{currentUser.email}</p>
          </div>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div className="relative">
            <Lock className="w-4 h-4 text-app-muted absolute left-3.5 top-3" />
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password to unlock session..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-app-secondary border border-app text-sm text-app-primary focus:outline-none focus:border-blue-500"
              autoFocus
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-2.5" isLoading={isLoading} icon={<ArrowRight className="w-4 h-4" />}>
            Unlock Session
          </Button>
        </form>

        <button
          onClick={() => navigate('/login')}
          className="text-xs text-app-secondary hover:text-app-primary hover:underline"
        >
          Or sign in as another user
        </button>
      </div>
    </div>
  );
};

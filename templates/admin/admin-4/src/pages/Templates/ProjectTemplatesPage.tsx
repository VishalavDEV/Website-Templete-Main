import React from 'react';
import { useApp } from '../../context/AppContext';
import { initialProjectTemplates } from '../../data/mockData';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Badge } from '../../components/Common/Badge';
import { Layers, Plus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProjectTemplatesPage: React.FC = () => {
  const { addProject, clients, users } = useApp();
  const navigate = useNavigate();

  const handleUseTemplate = (tplName: string, desc: string) => {
    addProject({
      name: `New Project from ${tplName}`,
      description: desc,
      clientId: clients[0]?.id || 'c-1',
      clientName: clients[0]?.name || 'Corporate Client',
      projectManagerId: users[1]?.id || 'u-2',
      projectManagerName: users[1]?.name || 'Project Manager',
      projectManagerAvatar: users[1]?.avatar,
      teamMemberIds: ['u-1', 'u-3'],
      status: 'Planning',
      priority: 'High',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2026-09-30',
      budget: 160000,
      category: 'Template Blueprint',
      tags: ['Template', 'SaaS']
    });
    navigate('/projects');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Project Blueprints & Templates</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Pre-configured workspace project blueprints with pre-built tasks and milestones.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>New Template</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {initialProjectTemplates.map(tpl => (
          <Card key={tpl.id} className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <Badge variant="purple">{tpl.category}</Badge>
              <h3 className="text-base font-bold text-app-primary">{tpl.name}</h3>
              <p className="text-xs text-app-secondary leading-relaxed">{tpl.description}</p>
            </div>

            <div className="pt-3 border-t border-app space-y-3">
              <div className="flex justify-between text-xs text-app-muted">
                <span>Duration: <strong>{tpl.estimatedDurationWeeks} weeks</strong></span>
                <span>Tasks: <strong>{tpl.defaultTasksCount}</strong></span>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => handleUseTemplate(tpl.name, tpl.description)}
              >
                Use Template
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

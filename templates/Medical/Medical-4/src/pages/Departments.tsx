import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { getDepartments } from '../services/api';
import { DepartmentCard } from '../components/cards/DepartmentCard';
import { DepartmentCardSkeleton } from '../components/skeletons';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Department } from '../types';

export const Departments: React.FC = () => {
  const [departmentList, setDepartmentList] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getDepartments().then(data => {
      if (isMounted) {
        setDepartmentList(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Medical Departments" 
        subtitle="Specialized healthcare services delivered by experienced professionals."
        breadcrumbItems={[{ label: 'Departments' }]}
      />

      <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Our Specialities</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Comprehensive Clinical Departments</h2>
          <p className="text-slate-600 text-base">Explore our wide range of medical departments equipped with advanced technology and expert specialists.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {isLoading ? (
            <DepartmentCardSkeleton count={6} />
          ) : (
            departmentList.map((department, index) => (
              <ScrollReveal key={department.id} animation="pop" delay={index * 80}>
                <DepartmentCard department={department} />
              </ScrollReveal>
            ))
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};

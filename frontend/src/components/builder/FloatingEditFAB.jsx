import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil } from 'lucide-react';

export default function FloatingEditFAB({ templateSlug, categorySlug, pageName = 'index.html' }) {
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const query = new URLSearchParams();
    if (templateSlug) query.set('template', templateSlug);
    if (categorySlug) query.set('category', categorySlug);
    if (pageName) query.set('page', pageName);
    navigate(`/builder?${query.toString()}`);
  };

  return (
    <button
      onClick={handleEditClick}
      className="builder-edit-trigger fixed top-4 right-4 z-[9999] flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-indigo-400/40 backdrop-blur-md cursor-pointer group"
      title="Open Visual Website Builder"
    >
      <Pencil size={14} className="transition-transform group-hover:rotate-12" />
      <span>Edit Template</span>
    </button>
  );
}

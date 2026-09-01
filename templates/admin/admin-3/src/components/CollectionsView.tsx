import React, { useState } from 'react';
import { CollectionItem } from '../types';
import { Layers, Plus, BookOpen } from 'lucide-react';

interface CollectionsViewProps {
  collections: CollectionItem[];
  onAddCollection: (col: Omit<CollectionItem, 'id'>) => Promise<void>;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({ collections, onAddCollection }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editor, setEditor] = useState('Maya Lin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    await onAddCollection({
      name,
      description,
      editor,
      storyCount: 0,
      updatedAt: new Date().toISOString().substring(0, 10)
    });
    setName('');
    setDescription('');
    setShowAdd(false);
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">Archive Registry</span>
          <h3 className="font-serif font-bold text-[#183B56] text-xl">Collections & Archive</h3>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#183B56] hover:bg-[#203040] text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
        >
          <Plus size={16} /> NEW COLLECTION
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="p-5 bg-[#F5F9FB] border border-[#6FAFD4] rounded-2xl space-y-4 text-xs">
          <h4 className="font-serif font-bold text-[#183B56] text-sm">Create New Research Collection</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Collection Name e.g. Kepler Archives"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
            <input
              type="text"
              placeholder="Curator Editor"
              value={editor}
              onChange={(e) => setEditor(e.target.value)}
              className="px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>
          <textarea
            rows={2}
            placeholder="Collection description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAdd(false)}
              className="px-4 py-2 bg-white border border-[#DCE7EC] text-[#718096] rounded-xl font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#183B56] text-white rounded-xl font-semibold"
            >
              Save Collection
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {collections.map(col => (
          <div key={col.id} className="p-5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-2xl space-y-3 hover:border-[#6FAFD4] transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-[#CDEFF4] text-[#183B56] px-2 py-0.5 rounded font-semibold uppercase">
                {col.storyCount} Stories
              </span>
              <span className="text-[10px] font-mono text-[#718096]">Updated {col.updatedAt}</span>
            </div>
            <h4 className="font-serif font-bold text-[#183B56] text-base">{col.name}</h4>
            <p className="text-xs text-[#718096] leading-relaxed">{col.description}</p>
            <div className="pt-3 border-t border-[#DCE7EC] flex items-center justify-between text-[11px] text-[#718096]">
              <span>Curator: <strong className="text-[#203040]">{col.editor}</strong></span>
              <BookOpen size={14} className="text-[#6FAFD4]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

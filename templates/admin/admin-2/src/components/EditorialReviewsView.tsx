import React from 'react';
import { useEditorial } from '../services/editorialStore';
import { 
  CheckSquare, Award, Clock, CheckCircle2, AlertTriangle, 
  Send, Eye, Edit3, ArrowRight 
} from 'lucide-react';

export const EditorialReviewsView: React.FC = () => {
  const { 
    stories, 
    publishStory, 
    approveStory,
    setPreviewStory, 
    setEditingStory,
    addToast 
  } = useEditorial();

  const reviewQueue = stories.filter((s) => s.status === 'review' || s.status === 'approved' || s.status === 'draft');

  const handleApprove = async (storyId: string) => {
    await approveStory(storyId);
  };

  const handleRequestRevision = (storyId: string) => {
    addToast('info', 'Revisions Requested', 'Dispatched peer-review feedback and flagged paragraphs to author.');
  };

  return (
    <div id="editorial-reviews-view" className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Peer Review &amp; Verification Desk
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Scientific rigour standards, primary source attributions, and pre-publication verification.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold bg-sky-50 text-sky-800 border border-sky-100 px-3 py-1.5 rounded-xl">
            {reviewQueue.length} Pieces In Active Verification
          </span>
        </div>
      </div>

      {/* Review Cards List */}
      <div className="space-y-4">
        {reviewQueue.map((story) => (
          <div
            key={story.id}
            id={`review-queue-card-${story.id}`}
            className="p-5 rounded-2xl bg-white border border-sky-50 shadow-sm hover:border-sky-200 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4 flex-1">
              <img
                src={story.heroImage}
                alt={story.title}
                className="w-20 h-16 rounded-xl object-cover shrink-0 border border-slate-100"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {story.category}
                  </span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    story.status === 'approved'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'bg-amber-50 text-amber-800 border border-amber-100'
                  }`}>
                    {story.status === 'approved' ? 'Fact-Check Passed' : 'Verification In Progress'}
                  </span>
                </div>

                <h3 
                  onClick={() => setPreviewStory(story)}
                  className="font-serif text-base font-bold text-slate-900 hover:text-sky-700 cursor-pointer transition-colors"
                >
                  {story.title}
                </h3>

                <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-3">
                  <span>Author: <strong className="text-slate-700">{story.author.name}</strong></span>
                  <span>•</span>
                  <span>Reviewer: <strong className="text-slate-700">{story.factCheckedBy || 'Dr. Elena Rostova'}</strong></span>
                  <span>•</span>
                  <span>Read Time: {story.readTime}</span>
                </div>
              </div>
            </div>

            {/* Actions Toolbar */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <button
                id={`review-inspect-btn-${story.id}`}
                onClick={() => setPreviewStory(story)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span>Inspect</span>
              </button>

              <button
                id={`review-request-revision-btn-${story.id}`}
                onClick={() => handleRequestRevision(story.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-100 transition-colors cursor-pointer"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Revision</span>
              </button>

              {story.status !== 'approved' && (
                <button
                  id={`review-approve-btn-${story.id}`}
                  onClick={() => handleApprove(story.id)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Approve</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

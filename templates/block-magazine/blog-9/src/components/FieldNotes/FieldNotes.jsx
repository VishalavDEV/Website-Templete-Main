import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { getFieldNotes } from '../../services/mockApi';
import './FieldNotes.css';

export default function FieldNotes() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFieldNotes().then(data => setNotes(data.slice(0, 4)));
  }, []);

  if (!notes.length) return null;

  return (
    <section className="field-notes-section" aria-label="Field Notes">
      <div className="atlas-container">
        <div className="field-notes-header">
          <div>
            <div className="atlas-section-eyebrow">
              <FileText size={14} />
              <span>Briefings & Observations</span>
            </div>
            <h2 className="atlas-section-title">Field Notes</h2>
            <p className="atlas-section-subtitle">
              Concise dispatches, unexpected natural phenomena, and rapid discoveries from researchers in the field.
            </p>
          </div>

          <Link to="/explore" className="atlas-btn atlas-btn-secondary">
            <span>All Field Notes</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="field-notes-grid">
          {notes.map(note => (
            <article
              key={note.id}
              className="field-note-card"
              onClick={() => navigate(`/field-note/${note.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/field-note/${note.slug}`)}
            >
              <div className="field-note-thumb">
                <img src={note.image} alt={note.title} loading="lazy" />
              </div>
              <div className="field-note-body">
                <span className="field-note-cat">{note.categoryLabel || note.category}</span>
                <h3 className="field-note-title">{note.title}</h3>
                <p className="field-note-dek">{note.dek}</p>
                <div className="field-note-footer">
                  <span>{note.author}</span>
                  <span>{note.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

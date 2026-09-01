import React from 'react';

export default function FamilyCard({ member }) {
  return (
    <div className="family-card">
      <img src={member.image} alt={member.name} className="family-avatar" />
      <h3 className="family-name">{member.name}</h3>
      <div className="family-relation">{member.relation}</div>
      <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic' }}>
        "{member.message}"
      </p>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Code2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && dialog) {
      if (!dialog.open) {
        dialog.showModal();
      }
    }
  }, [project]);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  };

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="custom-modal"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
    >
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Header Image */}
        <div style={{ width: '100%', height: '260px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.image_url}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-dark) 0%, transparent 80%)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid var(--border-glow)',
                color: 'var(--accent-cyan)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {project.category === 'qa'
                ? 'QA Automation'
                : project.category === 'ai'
                ? 'AI Engineering'
                : 'Full Stack'}
            </span>

            {project.metrics && (
              <span
                style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(52, 211, 153, 0.15)',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                ⚡ {project.metrics}
              </span>
            )}
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>{project.title}</h2>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
            {project.full_description || project.short_description}
          </p>

          {/* Tech Stack List */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
              Technologies & Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {project.github_url && (
              <a href={project.github_url} target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Code <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}

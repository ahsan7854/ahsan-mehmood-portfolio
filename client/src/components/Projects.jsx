import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight, ShieldCheck, Code2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'QA Automation', value: 'qa' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'AI Engineering', value: 'ai' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects?.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-glass)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} /> Featured Portfolio Work
          </div>
          <h2 className="section-title">
            Case Studies & <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world systems highlighting automated testing suites, full-stack React & Node.js MySQL applications, and AI RAG implementations.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`btn ${activeFilter === f.value ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.25rem',
                fontSize: '0.9rem',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects?.map((project, idx) => (
            <div
              key={project.id || idx}
              className="glass-card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <img
                  src={project.image_url}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(9, 13, 22, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color:
                      project.category === 'qa'
                        ? 'var(--accent-emerald)'
                        : project.category === 'ai'
                        ? 'var(--accent-violet)'
                        : 'var(--accent-cyan)',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{project.title}</span>
                  <ArrowUpRight size={20} color="var(--accent-cyan)" />
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {project.short_description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {project.technologies?.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-color)',
                    }}
                  >
                    <span>⚡ Impact: {project.metrics}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

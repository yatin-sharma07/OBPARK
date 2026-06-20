import React from 'react'
import { microgrammaBold, michroma } from '@/lib/fonts'

interface LegalSection {
  id: string
  title?: string
  content: React.ReactNode
}

interface LegalContentProps {
  title: string
  subtitle?: string
  sections: LegalSection[]
}

export function LegalContent({ title, subtitle, sections }: LegalContentProps) {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#F0F9F5' }}>
      {/* Header banner */}
      <div
        className="w-full px-4 sm:px-6 pt-16 sm:pt-24 pb-4 sm:pb-8"
        style={{
          background: '#F0F9F5',
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <p
              className={`${michroma.className} text-sm font-semibold uppercase tracking-[0.2em] mb-3`}
              style={{ color: '#074139', opacity: 0.7, textAlign: 'center' }}
            >
              {subtitle}
            </p>
          )}
          <h1
            className={`${microgrammaBold.className} text-3xl sm:text-4xl md:text-5xl leading-none`}
            style={{ color: '#074139', textAlign: 'center' }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Content card */}
      <div className="w-full px-4 sm:px-6 pb-8">
        <div
          className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-8 md:pb-12"
        >
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                {section.title && (
                  <h2
                    className={`${michroma.className} text-lg sm:text-xl font-semibold mb-4 pb-3 border-b`}
                    style={{ color: '#074139' }}
                  >
                    {section.title}
                  </h2>
                )}
                <div className="legal-body">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/*
        Global styles scoped via a wrapping class.
        Using a <style> tag here keeps this truly self-contained without
        requiring changes to globals.css.
      */}
      <style>{`
        .legal-body p {
          font-family: var(--font-michroma, sans-serif);
          font-size: 0.9rem;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 1rem;
        }
        .legal-body p:last-child {
          margin-bottom: 0;
        }
        .legal-body ul {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .legal-body ul li {
          font-family: var(--font-michroma, sans-serif);
          font-size: 0.875rem;
          line-height: 1.7;
          color: #374151;
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
        }
        .legal-body ul li::before {
          content: '';
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          margin-top: 0.52rem;
          border-radius: 50%;
          background-color: #59D0B5;
        }
        .legal-body strong {
          color: #074139;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

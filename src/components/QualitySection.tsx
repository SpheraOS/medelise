'use client';

import Image from 'next/image';

const checklistItems = [
  'Răspuns rapid, fără așteptare',
  'Acces simplu, oriunde te afli',
  'Fără costuri ascunse',
  'Abonament cu activare instant',
];

export default function QualitySection() {
  return (
    <>
      <section className="quality-section">
        <div className="quality-container">
          <div className="quality-content-wrap">
            <div className="quality-row">
              {/* ─── Left: Text Content ─── */}
              <div className="quality-text-col">
                <div className="quality-text-content">
                  <div className="quality-heading-group">
                    <h2 className="quality-heading">
                      Calitatea serviciilor ne definește
                    </h2>
                    <div className="quality-body-group">
                      <p className="quality-body">
                        Echipa noastră este formată din profesioniști cu
                        experiență: medici, asistenți medicali și terapeuți
                        specializați.
                        <br />
                        <br />
                        Fiecare membru al echipei noastre este dedicat
                        excelenței în îngrijire și are la dispoziție resursele
                        necesare pentru a oferi un tratament de calitate.
                      </p>

                      {/* ─── Checklist ─── */}
                      <div className="quality-checklist">
                        {checklistItems.map((item, i) => (
                          <div key={i} className="quality-check-item">
                            <div className="quality-check-icon">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 12.75L3.75 9L4.6275 8.1225L7.5 10.9875L13.3725 5.115L14.25 6L7.5 12.75Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <span className="quality-check-text">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ─── Email + CTA ─── */}
                  <div className="quality-cta-row">
                    <div className="quality-input-wrap">
                      <input
                        type="email"
                        className="quality-email-input"
                        placeholder="Introduceti adresa dumneavoastra de email"
                        aria-label="Adresa de email"
                      />
                    </div>
                    <button className="quality-cta-btn">
                      Intră în contul tău Medvita
                    </button>
                  </div>
                </div>
              </div>

              {/* ─── Right: MacBook Mockup ─── */}
              <div className="quality-laptop-col">
                <div className="quality-laptop-wrap">
                  {/* Desktop: SVG mockup */}
                  <Image
                    src="/images/quality/macbook-mockup.svg"
                    alt="MacBook Pro cu platforma medicală Medelise"
                    width={676}
                    height={468}
                    className="quality-laptop-img quality-laptop-desktop"
                    priority
                  />
                  {/* Tablet/Mobile: Full PNG mockup for clear product view */}
                  <Image
                    src="/images/quality/macbook-tablet.png"
                    alt="MacBook Pro cu platforma medicală Medelise"
                    width={676}
                    height={468}
                    className="quality-laptop-img quality-laptop-mobile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════════════════════════════
         * SECTION
         * ═══════════════════════════════════════ */
        .quality-section {
          width: 100%;
          background: var(--color-white);
          overflow: hidden;
        }

        .quality-container {
          width: 100%;
          padding-left: var(--space-section-px);
          padding-right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .quality-content-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .quality-row {
          width: 100%;
          padding-top: var(--space-section-py-tight);
          padding-bottom: var(--space-section-py-tight);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-8);
        }

        /* ═══════════════════════════════════════
         * TEXT COLUMN
         * ═══════════════════════════════════════ */
        .quality-text-col {
          flex: 1 1 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: var(--space-6);
        }

        .quality-text-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: var(--space-8);
        }

        .quality-heading-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .quality-heading {
          color: var(--color-primary);
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: 600;
          line-height: var(--lh-heading);
          margin: 0;
        }

        .quality-body-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .quality-body {
          color: var(--color-primary);
          font-size: var(--text-lg);
          font-family: var(--font-heading);
          font-weight: 500;
          line-height: var(--lh-body);
          margin: 0;
        }

        /* ─── Checklist ─── */
        .quality-checklist {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .quality-check-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .quality-check-icon {
          width: var(--space-8);
          height: var(--space-8);
          background: var(--color-surface-card);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }

        .quality-check-text {
          color: var(--color-primary);
          font-size: var(--text-body);
          font-family: var(--font-heading);
          font-weight: 500;
          line-height: var(--lh-body);
        }

        /* ─── Email + CTA ─── */
        .quality-cta-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .quality-input-wrap {
          width: 320px;
        }

        .quality-email-input {
          width: 100%;
          padding: var(--space-3) var(--space-2) var(--space-3) var(--space-3);
          background: var(--color-white);
          border-radius: var(--radius-main);
          border: none;
          outline: 1px var(--color-input-border) solid;
          outline-offset: -1px;
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 400;
          line-height: var(--lh-body);
          color: var(--color-primary);
          transition: outline-color 0.2s ease;
        }

        .quality-email-input::placeholder {
          color: var(--color-input-border);
        }

        .quality-email-input:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: -2px;
        }

        .quality-cta-btn {
          padding: var(--space-3) var(--space-5);
          background: var(--color-primary);
          border-radius: var(--radius-main);
          border: none;
          color: var(--color-white);
          font-family: var(--font-heading);
          font-size: var(--text-body);
          font-weight: 600;
          line-height: var(--lh-body);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease-in-out;
        }

        .quality-cta-btn:hover {
          background: var(--color-primary-hover);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        /* ═══════════════════════════════════════
         * LAPTOP COLUMN
         * ═══════════════════════════════════════ */
        .quality-laptop-col {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .quality-laptop-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .quality-laptop-wrap :global(.quality-laptop-img) {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Desktop: show SVG, hide PNG */
        .quality-laptop-wrap :global(.quality-laptop-mobile) {
          display: none;
        }

        /* ═══════════════════════════════════════
         * TABLET — ≤1024px
         * ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .quality-container {
            padding-right: var(--space-section-px);
          }

          .quality-row {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-10);
          }

          .quality-text-col {
            flex: none;
            width: 100%;
          }

          .quality-laptop-col {
            flex: none;
            width: 100%;
            align-items: center;
          }

          .quality-laptop-wrap {
            width: 100%;
            justify-content: center;
          }

          /* Tablet: hide SVG, show PNG */
          .quality-laptop-wrap :global(.quality-laptop-desktop) {
            display: none;
          }
          .quality-laptop-wrap :global(.quality-laptop-mobile) {
            display: block;
          }
        }

        /* ═══════════════════════════════════════
         * MOBILE — ≤640px
         * ═══════════════════════════════════════ */
        @media (max-width: 640px) {
          .quality-row {
            gap: var(--space-8);
          }

          .quality-cta-row {
            flex-direction: column;
            width: 100%;
            gap: var(--space-3);
          }

          .quality-input-wrap {
            width: 100%;
          }

          .quality-cta-btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }

          .quality-laptop-col {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}

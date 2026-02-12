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
          background: white;
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
          padding-top: 32px;
          padding-bottom: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
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
          gap: 24px;
        }

        .quality-text-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 36px;
        }

        .quality-heading-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .quality-heading {
          color: var(--color-primary);
          font-size: 28px;
          font-family: var(--font-heading);
          font-weight: 600;
          line-height: 36px;
          margin: 0;
        }

        .quality-body-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .quality-body {
          color: var(--color-primary);
          font-size: 18px;
          font-family: var(--font-heading);
          font-weight: 500;
          line-height: 28px;
          margin: 0;
        }

        /* ─── Checklist ─── */
        .quality-checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quality-check-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .quality-check-icon {
          width: 32px;
          height: 32px;
          background: var(--color-surface-card);
          border-radius: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-primary);
        }

        .quality-check-text {
          color: var(--color-primary);
          font-size: 16px;
          font-family: var(--font-heading);
          font-weight: 500;
          line-height: 24px;
        }

        /* ─── Email + CTA ─── */
        .quality-cta-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .quality-input-wrap {
          width: 320px;
        }

        .quality-email-input {
          width: 100%;
          padding: 10px 8px 10px 12px;
          background: white;
          border-radius: 8px;
          border: none;
          outline: 1px var(--color-input-border) solid;
          outline-offset: -1px;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
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
          padding: 10px 20px;
          background: var(--color-primary);
          border-radius: 8px;
          border: none;
          color: white;
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .quality-cta-btn:hover {
          background: var(--color-primary-hover);
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
            gap: 40px;
            padding-top: 64px;
            padding-bottom: 64px;
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
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 32px;
          }

          .quality-heading {
            font-size: 24px;
            line-height: 32px;
          }

          .quality-body {
            font-size: 16px;
            line-height: 24px;
          }

          .quality-cta-row {
            flex-direction: column;
            width: 100%;
            gap: 12px;
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

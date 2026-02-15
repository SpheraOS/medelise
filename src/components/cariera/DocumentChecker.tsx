'use client';

import { useState, useMemo } from 'react';
import Button from '@/components/ui/Button';
import {
    type MedicalRole,
    type DocumentRequirement,
    getRequirementsForRole,
    getMalpraxisTooltip,
    ROLE_LABELS,
} from './documentRequirements';

/* ═══════════════════════════════════════════════════════════════════════════
 * TYPES
 * ═══════════════════════════════════════════════════════════════════════════ */

interface DocumentCheckerProps {
    /** The currently selected medical role */
    selectedRole: MedicalRole;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * INLINE SVG ICONS (no external deps)
 * ═══════════════════════════════════════════════════════════════════════════ */

function PdfIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="7" y="18" fontSize="7" fontWeight="700" fill="currentColor" fontFamily="sans-serif">PDF</text>
        </svg>
    );
}

function ImageIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * HELPERS
 * ═══════════════════════════════════════════════════════════════════════════ */

function getFileTypeIcons(fileTypes: string[]) {
    const hasPdf = fileTypes.includes('pdf');
    const hasImage = fileTypes.some((t) => ['jpg', 'jpeg', 'png'].includes(t));
    return { hasPdf, hasImage };
}

function groupBySections(docs: DocumentRequirement[]) {
    const general = docs.filter((d) => d.section === 'general');
    const specific = docs.filter((d) => d.section === 'specific');
    const malpraxis = docs.filter((d) => d.section === 'malpraxis');
    return { general, specific, malpraxis };
}

/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function DocumentChecker({ selectedRole }: DocumentCheckerProps) {
    const [checkedDocs, setCheckedDocs] = useState<Set<string>>(new Set());

    const requirements = useMemo(() => getRequirementsForRole(selectedRole), [selectedRole]);
    const sections = useMemo(() => groupBySections(requirements), [requirements]);
    const malpraxisTooltip = useMemo(() => getMalpraxisTooltip(selectedRole), [selectedRole]);

    const totalDocs = requirements.length;
    const checkedCount = [...checkedDocs].filter((id) =>
        requirements.some((r) => r.id === id),
    ).length;

    const toggleDoc = (id: string) => {
        setCheckedDocs((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const roleLabel = ROLE_LABELS[selectedRole];

    /* ── Render a single document row ── */
    function renderDocRow(doc: DocumentRequirement) {
        const isChecked = checkedDocs.has(doc.id);
        const { hasPdf, hasImage } = getFileTypeIcons(doc.fileTypes);
        const tooltip = doc.id === 'malpraxis' ? malpraxisTooltip : doc.tooltip;

        return (
            <div
                key={doc.id}
                className={`dc-row ${isChecked ? 'dc-row--checked' : ''}`}
                role="listitem"
            >
                {/* Checkbox */}
                <label className="dc-checkbox-label" htmlFor={`dc-${doc.id}`}>
                    <input
                        id={`dc-${doc.id}`}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDoc(doc.id)}
                        className="dc-checkbox-input"
                    />
                    <span className={`dc-checkbox-box ${isChecked ? 'dc-checkbox-box--checked' : ''}`}>
                        {isChecked && <CheckIcon />}
                    </span>
                </label>

                {/* Content */}
                <div className="dc-row-content">
                    <div className="dc-row-header">
                        <span className={`dc-row-label ${isChecked ? 'dc-row-label--checked' : ''}`}>
                            {doc.label}
                            {doc.required && <span className="dc-required">*</span>}
                        </span>
                        <div className="dc-row-meta">
                            <span className="dc-file-types">
                                {hasPdf && <span className="dc-file-badge"><PdfIcon /> PDF</span>}
                                {hasImage && <span className="dc-file-badge"><ImageIcon /> JPG</span>}
                            </span>
                            {tooltip && (
                                <span className="dc-tooltip-trigger" tabIndex={0} aria-label={tooltip}>
                                    <InfoIcon />
                                    <span className="dc-tooltip">{tooltip}</span>
                                </span>
                            )}
                        </div>
                    </div>
                    {doc.description && (
                        <p className="dc-row-desc">{doc.description}</p>
                    )}
                </div>
            </div>
        );
    }

    /* ── Render section group ── */
    function renderSection(title: string, docs: DocumentRequirement[]) {
        if (docs.length === 0) return null;
        return (
            <div className="dc-section" role="list" aria-label={title}>
                <h4 className="dc-section-title">{title}</h4>
                {docs.map(renderDocRow)}
            </div>
        );
    }

    return (
        <>
            <div className="dc-container" key={selectedRole}>
                {/* Header */}
                <div className="dc-header">
                    <div className="dc-header-left">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="dc-title">Documente necesare</h3>
                    </div>
                    <div className="dc-progress">
                        <span className="dc-progress-text">
                            {checkedCount} / {totalDocs} pregătite
                        </span>
                        <div className="dc-progress-bar">
                            <div
                                className="dc-progress-fill"
                                style={{ width: totalDocs > 0 ? `${(checkedCount / totalDocs) * 100}%` : '0%' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Role badge */}
                <div className="dc-role-badge">
                    Rol selectat: <strong>{roleLabel}</strong>
                </div>

                {/* Sections */}
                {renderSection('Documente Generale', sections.general)}
                {renderSection(`Specific: ${roleLabel}`, sections.specific)}
                {renderSection('Asigurare Malpraxis', sections.malpraxis)}

                {/* Completion state */}
                {checkedCount === totalDocs && totalDocs > 0 && (
                    <div className="dc-complete">
                        <CheckIcon /> Toate documentele sunt pregătite!
                    </div>
                )}
            </div>

            <style jsx global>{`
                /* ═══════════════════════════════════════
                 * §1 CONTAINER
                 * ═══════════════════════════════════════ */
                .dc-container {
                    border: 1px solid var(--color-surface-border);
                    border-radius: var(--radius-main);
                    background: var(--color-white);
                    box-shadow: var(--shadow-sm);
                    padding: var(--space-6);
                    min-height: 400px;
                    animation: dc-fade-in 0.3s ease-out;
                }

                @keyframes dc-fade-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* ═══════════════════════════════════════
                 * §2 HEADER
                 * ═══════════════════════════════════════ */
                .dc-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-4);
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-4);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                .dc-header-left {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: var(--color-primary);
                }

                .dc-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-lg);
                    font-weight: 600;
                    color: var(--color-text);
                    margin: 0;
                    line-height: var(--lh-heading);
                }

                /* Progress */
                .dc-progress {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: var(--space-1);
                    min-width: 120px;
                }

                .dc-progress-text {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    font-weight: 500;
                }

                .dc-progress-bar {
                    width: 100%;
                    height: var(--space-1);
                    background: var(--color-surface);
                    border-radius: var(--radius-full);
                    overflow: hidden;
                }

                .dc-progress-fill {
                    height: 100%;
                    background: var(--color-success);
                    border-radius: var(--radius-full);
                    transition: width 0.3s ease;
                }

                /* Role badge */
                .dc-role-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-1);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    background: var(--color-surface);
                    padding: var(--space-1) var(--space-3);
                    border-radius: var(--radius-full);
                    margin-bottom: var(--space-6);
                }

                .dc-role-badge strong {
                    color: var(--color-primary);
                    font-weight: 600;
                }

                /* ═══════════════════════════════════════
                 * §3 SECTIONS
                 * ═══════════════════════════════════════ */
                .dc-section {
                    margin-bottom: var(--space-6);
                }

                .dc-section:last-of-type {
                    margin-bottom: 0;
                }

                .dc-section-title {
                    font-family: var(--font-heading);
                    font-size: var(--text-sm);
                    font-weight: 600;
                    color: var(--color-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin: 0 0 var(--space-3) 0;
                    padding-bottom: var(--space-2);
                    border-bottom: 1px solid var(--color-surface-border);
                }

                /* ═══════════════════════════════════════
                 * §4 DOCUMENT ROW
                 * ═══════════════════════════════════════ */
                .dc-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-3);
                    padding: var(--space-3) var(--space-4);
                    border-radius: var(--radius-main);
                    transition: background 0.15s ease;
                }

                .dc-row:hover {
                    background: var(--color-surface);
                }

                .dc-row--checked {
                    background: color-mix(in srgb, var(--color-success) 4%, transparent);
                }

                .dc-row--checked:hover {
                    background: color-mix(in srgb, var(--color-success) 8%, transparent);
                }

                /* Checkbox */
                .dc-checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    flex-shrink: 0;
                    padding-top: 2px;
                }

                .dc-checkbox-input {
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .dc-checkbox-box {
                    width: 20px;
                    height: 20px;
                    border: 2px solid var(--color-input-border);
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.15s ease;
                    color: var(--color-white);
                    background: var(--color-white);
                }

                .dc-checkbox-box--checked {
                    background: var(--color-success);
                    border-color: var(--color-success);
                }

                .dc-checkbox-input:focus-visible + .dc-checkbox-box {
                    box-shadow: var(--shadow-focus);
                }

                /* Row content */
                .dc-row-content {
                    flex: 1;
                    min-width: 0;
                }

                .dc-row-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space-3);
                    flex-wrap: wrap;
                }

                .dc-row-label {
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    font-weight: 500;
                    color: var(--color-text);
                    transition: color 0.15s ease;
                }

                .dc-row-label--checked {
                    color: var(--color-text-muted);
                    text-decoration: line-through;
                }

                .dc-required {
                    color: var(--color-error);
                    margin-left: var(--space-1);
                }

                .dc-row-desc {
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    color: var(--color-text-muted);
                    margin: var(--space-1) 0 0 0;
                    line-height: var(--lh-body);
                }

                /* Meta: file badges + tooltip */
                .dc-row-meta {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    flex-shrink: 0;
                }

                .dc-file-types {
                    display: flex;
                    gap: var(--space-1);
                }

                .dc-file-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    font-family: var(--font-body);
                    font-size: 11px;
                    font-weight: 500;
                    color: var(--color-text-muted);
                    background: var(--color-surface);
                    padding: 2px var(--space-2);
                    border-radius: var(--radius-sm);
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                }

                /* Tooltip */
                .dc-tooltip-trigger {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    color: var(--color-info);
                    cursor: help;
                    outline: none;
                }

                .dc-tooltip {
                    position: absolute;
                    bottom: calc(100% + var(--space-2));
                    right: 0;
                    width: max-content;
                    max-width: 280px;
                    padding: var(--space-2) var(--space-3);
                    background: var(--color-primary);
                    color: var(--color-white);
                    font-family: var(--font-body);
                    font-size: var(--text-sm);
                    font-weight: 400;
                    line-height: var(--lh-body);
                    border-radius: var(--radius-main);
                    box-shadow: var(--shadow-md);
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    transform: translateY(4px);
                    z-index: 10;
                }

                .dc-tooltip-trigger:hover .dc-tooltip,
                .dc-tooltip-trigger:focus .dc-tooltip {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateY(0);
                }

                /* ═══════════════════════════════════════
                 * §5 COMPLETE STATE
                 * ═══════════════════════════════════════ */
                .dc-complete {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-2);
                    padding: var(--space-4);
                    margin-top: var(--space-6);
                    background: color-mix(in srgb, var(--color-success) 8%, transparent);
                    color: var(--color-success);
                    font-family: var(--font-body);
                    font-size: var(--text-body);
                    font-weight: 600;
                    border-radius: var(--radius-main);
                    animation: dc-fade-in 0.3s ease-out;
                }

                /* ═══════════════════════════════════════
                 * §6 RESPONSIVE
                 * ═══════════════════════════════════════ */
                @media (max-width: 640px) {
                    .dc-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .dc-progress {
                        width: 100%;
                        align-items: flex-start;
                    }

                    .dc-row-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: var(--space-2);
                    }

                    .dc-tooltip {
                        right: auto;
                        left: 0;
                    }
                }
            `}</style>
        </>
    );
}

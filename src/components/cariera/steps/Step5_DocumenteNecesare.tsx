'use client';

import DocumentChecker from '../DocumentChecker';
import { getRoleForSlug } from '../documentRequirements';
import type { StepProps } from './Step1_DatePersonale';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 5 — Documente Necesare (wraps DocumentChecker)
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function Step5_DocumenteNecesare({ slug }: StepProps) {
    const role = getRoleForSlug(slug);

    return (
        <div className="aj-step-card aj-step-card--no-legend">
            <DocumentChecker selectedRole={role} />
        </div>
    );
}

/* Step 5 is informational — always valid */
export function validateStep5(): boolean {
    return true;
}

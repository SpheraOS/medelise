'use client';

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 1 — Date Personale
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface StepProps {
    data: Record<string, any>;
    onChange: (field: string, value: any) => void;
    slug: string;
    jobTitle: string;
}

export default function Step1_DatePersonale({ data, onChange }: StepProps) {
    return (
        <fieldset className="aj-step-card">
            <legend className="aj-step-card-title">Date personale</legend>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-nume">
                        Nume <span className="aj-req">*</span>
                    </label>
                    <input
                        id="aj-nume"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Popescu"
                        className="aj-input"
                        value={data.nume ?? ''}
                        onChange={(e) => onChange('nume', e.target.value)}
                    />
                </div>
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-prenume">
                        Prenume <span className="aj-req">*</span>
                    </label>
                    <input
                        id="aj-prenume"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Maria"
                        className="aj-input"
                        value={data.prenume ?? ''}
                        onChange={(e) => onChange('prenume', e.target.value)}
                    />
                </div>
            </div>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-email">
                        E-mail <span className="aj-req">*</span>
                    </label>
                    <input
                        id="aj-email"
                        type="email"
                        required
                        placeholder="maria.popescu@email.com"
                        className="aj-input"
                        value={data.email ?? ''}
                        onChange={(e) => onChange('email', e.target.value)}
                    />
                </div>
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-telefon">
                        Telefon <span className="aj-req">*</span>
                    </label>
                    <input
                        id="aj-telefon"
                        type="tel"
                        required
                        placeholder="+40 7XX XXX XXX"
                        className="aj-input"
                        value={data.telefon ?? ''}
                        onChange={(e) => onChange('telefon', e.target.value)}
                    />
                </div>
            </div>

            <div className="aj-field-row">
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-oras">
                        Oraș / Localitate <span className="aj-req">*</span>
                    </label>
                    <input
                        id="aj-oras"
                        type="text"
                        required
                        placeholder="București"
                        className="aj-input"
                        value={data.oras ?? ''}
                        onChange={(e) => onChange('oras', e.target.value)}
                    />
                </div>
                <div className="aj-field">
                    <label className="aj-label" htmlFor="aj-data-nastere">
                        Data nașterii
                    </label>
                    <input
                        id="aj-data-nastere"
                        type="date"
                        className="aj-input"
                        value={data.dataNasterii ?? ''}
                        onChange={(e) => onChange('dataNasterii', e.target.value)}
                    />
                </div>
            </div>
        </fieldset>
    );
}

/* ─── Validation: all required fields filled + valid email ─── */
export function validateStep1(data: Record<string, any>): boolean {
    const { nume, prenume, email, telefon, oras } = data;
    if (!nume?.trim() || !prenume?.trim() || !telefon?.trim() || !oras?.trim()) return false;
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    return true;
}

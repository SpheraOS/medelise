'use client';

/* ── Stat Card — Reusable stats display card ───────────────────── */

interface StatCardProps {
    /** Label shown above the number (e.g. "Ani de experienta") */
    label: string;
    /** The stat value (e.g. "10", "120+", "1000+", "98%") */
    value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <>
            <style jsx>{`
                .stat-card {
                    flex: 1 1 0;
                    padding: 24px;
                    background: var(--color-primary);
                    border-radius: 8px;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 8px;
                    display: inline-flex;
                }

                .stat-label {
                    align-self: stretch;
                    text-align: center;
                    color: white;
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 28px;
                }

                .stat-value {
                    color: white;
                    font-size: 48px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 60px;
                }

                /* ─── Mobile ≤640px ────────── */
                @media (max-width: 640px) {
                    .stat-card {
                        flex: unset;
                        align-self: stretch;
                    }

                    .stat-value {
                        font-size: 36px;
                        line-height: 44px;
                    }
                }
            `}</style>

            <div className="stat-card">
                <div className="stat-label">{label}</div>
                <div className="stat-value">{value}</div>
            </div>
        </>
    );
}

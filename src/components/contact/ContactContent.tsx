'use client';

import { useState, useCallback } from 'react';

// TODO: Replace static FAQ data with CMS/API fetch (e.g. /api/faq) for dynamic content management
const FAQ_ITEMS = [
    {
        q: 'Cât de repede primesc un răspuns după ce trimit formularul?',
        a: 'Răspundem în general în maximum 24 de ore lucrătoare. În cazul urgențelor medicale, folosește numărul de suport dedicat din abonamentul tău EasyCare.',
    },
    {
        q: 'Pot să fac o programare direct prin formularul de contact?',
        a: 'Formularul este destinat întrebărilor generale. Pentru programări rapide, folosește butonul „Programează acum" din meniu sau platforma ta de pacient.',
    },
    {
        q: 'Pot modifica sau anula o vizită deja programată?',
        a: 'Da, te rugăm să ne scrii din timp sau să folosești contul de pacient pentru modificări directe.',
    },
    {
        q: 'Există o linie de suport telefonic activă?',
        a: 'Da, ne poți suna de luni până vineri, între orele 08:00–17:00 la 031 630 81 00. În afara acestui interval, pentru abonați EasyCare există linie de suport 24/7.',
    },
    {
        q: 'Pot beneficia de serviciile Medvita fără abonament?',
        a: 'Da, oferim și servicii individuale la cerere, însă abonamentele EasyCare sunt mai avantajoase din punct de vedere financiar și operațional.',
    },
    {
        q: 'Pot primi răspuns pe WhatsApp sau SMS?',
        a: 'Da, menționează în mesaj dacă preferi să fii contactat prin WhatsApp sau SMS, iar echipa noastră se va adapta.',
    },
    {
        q: 'Ce specialiști pot veni acasă în funcție de serviciu?',
        a: 'La domiciliu pot ajunge medici specialiști, asistenți medicali generaliști, kinetoterapeuți și terapeuți acreditați. Sistemul Medvita recomandă automat specialistul potrivit în funcție de procedură și starea pacientului.',
    },
    {
        q: 'Ce echipamente aduce echipa Medvita la vizită?',
        a: 'Specialistul vine cu trusă medicală completă, consumabile sterile, echipamente de monitorizare, instrumente pentru perfuzii sau proceduri specifice și materiale de protecție. Totul este sigilat și conform standardelor Medvita.',
    },
    {
        q: 'Este nevoie de recomandare medicală pentru orice procedură?',
        a: 'Pentru perfuzii IV, tratamente și proceduri invazive este necesar un scurt triaj sau recomandare. Pentru masaj terapeutic, kinetoterapie, recoltări sau consulturi generale nu este obligatoriu.',
    },
    {
        q: 'Pot solicita același specialist la fiecare vizită?',
        a: 'Da. Dacă specialistul este disponibil, îl poți selecta direct la programare. Medvita încurajează continuitatea pentru confort și siguranță.',
    },
    {
        q: 'Care este zona de acoperire și timpul mediu de sosire?',
        a: 'Acoperim București și Ilfov. Timpul mediu de sosire este 60–120 minute, în funcție de trafic, disponibilitate și tipul procedurii. Îți comunicăm în timp real statusul vizitei.',
    },
];

export default function ContactContent() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = useCallback((i: number) => {
        setOpenFaq((prev) => (prev === i ? null : i));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot anti-spam: if filled, silently reject
        if (formData.get('website')) return;

        setFormStatus('sending');

        try {
            // TODO: Replace with actual API endpoint
            // await fetch('/api/contact', { method: 'POST', body: formData });
            await new Promise((r) => setTimeout(r, 1000)); // Simulate
            setFormStatus('sent');
            form.reset();
        } catch {
            setFormStatus('error');
        }
    };

    return (
        <div className="min-h-screen">
            {/* ── Hero / Intro Section ── */}
            <section className="contact-hero">
                <div className="contact-hero-inner">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title">
                            „Suntem gata să te ascultăm."
                        </h1>
                        <p className="contact-hero-desc">
                            Contactează echipa Medvita pentru întrebări legate de servicii, parteneriate sau colaborări.
                            <br />
                            Credem într-o comunicare transparentă și rapidă, exact așa cum ar trebui să fie îngrijirea modernă.
                        </p>
                    </div>
                    <div className="contact-hero-divider" />
                </div>
            </section>

            {/* ── Contact Form Section ── */}
            <section className="contact-section">
                <div className="contact-section-inner">
                    <div className="contact-layout">
                        {/* Left — Info */}
                        <div className="contact-info">
                            <div className="contact-info-text">
                                <h2 className="contact-info-title">Suntem aici pentru tine</h2>
                                <p className="contact-info-desc">
                                    Ai întrebări sau vrei să afli mai multe despre abonamentele sau serviciile Medvita?
                                    <br />
                                    Echipa noastră este aici să te ajute cu informații clare, rapide și complete.
                                </p>
                            </div>

                            <div className="contact-info-cards">
                                <div className="contact-info-row">
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">OFFICE HOURS</span>
                                        <span className="contact-info-value">Luni – Duminica<br />08:00 – 22:00</span>
                                    </div>
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">Tara</span>
                                        <span className="contact-info-value">Romania</span>
                                    </div>
                                </div>
                                <div className="contact-info-row">
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">CONTACTEAZĂ-NE</span>
                                        <span className="contact-info-value">+40 (784) 414 555</span>
                                    </div>
                                    <div className="contact-info-card">
                                        <span className="contact-info-label">E-mail</span>
                                        <span className="contact-info-value">office@medvita.ro</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form Card */}
                        <div className="contact-form-card">
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="contact-form-fields">
                                    {/* Honeypot — hidden anti-spam field */}
                                    <div className="contact-honeypot" aria-hidden="true">
                                        <input
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-nume">Nume</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-nume"
                                                name="nume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Te rog să introduci numele"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-prenume">Prenume</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-prenume"
                                                name="prenume"
                                                type="text"
                                                required
                                                minLength={2}
                                                placeholder="Te rog să introduci prenumele"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-email">Adresă de email</label>
                                        <div className="contact-field-wrapper">
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Te rog să introduci e-mailul"
                                                className="contact-field-input"
                                            />
                                        </div>
                                    </div>

                                    <div className="contact-field">
                                        <label className="contact-field-label" htmlFor="contact-mesaj">Mesaj</label>
                                        <div className="contact-field-wrapper contact-field-wrapper--textarea">
                                            <textarea
                                                id="contact-mesaj"
                                                name="mesaj"
                                                required
                                                minLength={10}
                                                placeholder="Te rog să introduci mesajul"
                                                className="contact-field-input contact-field-textarea"
                                                rows={4}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={formStatus === 'sending'}
                                >
                                    {formStatus === 'sending' ? 'Se trimite...' : 'Trimite mesajul'}
                                </button>

                                {formStatus === 'sent' && (
                                    <p className="contact-form-success">✓ Mesajul a fost trimis cu succes!</p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="contact-form-error">A apărut o eroare. Încearcă din nou.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ── */}
            <section className="faq-section">
                <div className="faq-header">
                    <span className="faq-subtitle">Frequently Asked Questions</span>
                    <h2 className="faq-title">
                        Ai o întrebare?
                        <br />
                        Uite ce ne întreabă cel mai des pacienții Medvita
                    </h2>
                </div>

                <div className="faq-list">
                    {FAQ_ITEMS.map((item, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <button
                                key={i}
                                className={`faq-card${isOpen ? ' faq-card--open' : ''}`}
                                onClick={() => toggleFaq(i)}
                                aria-expanded={isOpen}
                                type="button"
                            >
                                <div className="faq-card-header">
                                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        {/* Horizontal line (always visible) */}
                                        <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-primary, #213170)" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* Vertical line (hidden when open) */}
                                        <line
                                            x1="12" y1="4" x2="12" y2="20"
                                            stroke="var(--color-primary, #213170)" strokeWidth="1.5" strokeLinecap="round"
                                            className="faq-icon-vertical"
                                        />
                                    </svg>
                                    <span className="faq-question">{item.q}</span>
                                </div>
                                <div className="faq-answer-wrapper">
                                    <p className="faq-answer">{item.a}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="cta-section">
                <div className="cta-inner">
                    <div className="cta-text">
                        <h2 className="cta-title">
                            Ai nevoie de o vizită medicală la domiciliu?
                            <br />
                            Programează acum – Fără stres, direct online.
                        </h2>
                        <p className="cta-desc">
                            Te ajutăm să ai grijă de sănătatea ta, fără să pierzi ore întregi pe drum.
                        </p>
                    </div>
                    <div className="cta-buttons">
                        <a href="/programeaza" className="cta-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 7.57500H17.0833M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Programează</span>
                        </a>
                        <a href="/login" className="cta-btn cta-btn--secondary">
                            Intră în contul tău Medelise
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ═══════════════════════════════════
                   GLOBAL — DRY font-family
                   ═══════════════════════════════════ */
                .contact-hero,
                .contact-section,
                .faq-section,
                .cta-section {
                    font-family: var(--font-montserrat), 'Montserrat', sans-serif;
                }

                /* ── CSS Variables (scoped) ── */
                .contact-section {
                    --contact-border: #CED2DA;
                    --contact-placeholder: #CED2DA;
                }

                /* ═══════════════════════════════════
                   HERO SECTION
                   ═══════════════════════════════════ */
                .contact-hero {
                    width: 100%;
                    padding: 0 64px;
                    background: white;
                }

                .contact-hero-inner {
                    padding: 48px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contact-hero-content {
                    width: 100%;
                    padding: 40px 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 32px;
                }

                .contact-hero-title {
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                    max-width: 596px;
                    flex: 1 1 auto;
                }

                .contact-hero-desc {
                    color: var(--color-primary, #213170);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    flex: 1;
                    max-width: 556px;
                }

                .contact-hero-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-baby-blue, #BDE0FF);
                }

                /* ═══════════════════════════════════
                   CONTACT FORM SECTION
                   ═══════════════════════════════════ */
                .contact-section {
                    width: 100%;
                    padding: 0 64px;
                    background: var(--color-primary, #213170);
                }

                .contact-section-inner {
                    padding: 80px 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .contact-layout {
                    width: 100%;
                    padding: 32px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                }

                /* ── Left: Info ── */
                .contact-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .contact-info-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 24px;
                }

                .contact-info-title {
                    color: white;
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .contact-info-desc {
                    color: white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .contact-info-cards {
                    max-width: 416px;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .contact-info-row {
                    display: flex;
                    gap: 32px;
                }

                .contact-info-card {
                    flex: 1;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .contact-info-label {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }

                .contact-info-value {
                    color: white;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                }

                /* ── Right: Form Card ── */
                .contact-form-card {
                    flex: 1;
                    padding: 24px;
                    background: white;
                    border-radius: 10px;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .contact-form-fields {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                /* Honeypot — invisible to users */
                .contact-honeypot {
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    height: 0;
                    overflow: hidden;
                }

                .contact-field {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .contact-field-label {
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                }

                /* ── Unified field wrapper (input + textarea) ── */
                .contact-field-wrapper {
                    padding: 10px 12px;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid var(--contact-border);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .contact-field-wrapper--textarea {
                    padding: 8px 12px;
                    align-items: flex-start;
                }

                .contact-field-wrapper:focus-within {
                    border-color: var(--color-primary, #213170);
                    box-shadow: 0 0 0 2px rgba(33, 49, 112, 0.1);
                }

                .contact-field-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    font-family: inherit;
                    font-weight: 400;
                    line-height: 24px;
                    color: var(--color-primary, #213170);
                    outline: none;
                    width: 100%;
                }

                .contact-field-input::placeholder {
                    color: var(--contact-placeholder);
                }

                .contact-field-textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                .contact-submit-btn {
                    width: 100%;
                    padding: 12px 24px;
                    background: var(--color-primary, #213170);
                    border-radius: 8px;
                    border: none;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    text-align: center;
                }

                .contact-submit-btn:hover:not(:disabled) {
                    background: #1a2759;
                    transform: translateY(-1px);
                }

                .contact-submit-btn:active:not(:disabled) {
                    transform: translateY(0);
                }

                .contact-submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .contact-form-success {
                    color: #16a34a;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                }

                .contact-form-error {
                    color: #ef4444;
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    margin: 0;
                }

                /* ═══════════════════════════════════
                   FAQ SECTION
                   ═══════════════════════════════════ */
                .faq-section {
                    width: 100%;
                    padding: 80px 64px;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                .faq-header {
                    width: 100%;
                    padding: 16px 0 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }

                .faq-subtitle {
                    color: var(--contact-border, #CED2DA);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                }

                .faq-title {
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    text-align: center;
                    margin: 0;
                }

                .faq-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .faq-card {
                    width: 100%;
                    padding: 32px;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid var(--contact-border, #CED2DA);
                    cursor: pointer;
                    text-align: left;
                    font-family: inherit;
                    transition: border-color 0.2s;
                    display: flex;
                    flex-direction: column;
                }

                .faq-card:hover {
                    border-color: var(--color-primary, #213170);
                }

                .faq-card-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .faq-icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                }

                .faq-icon-vertical {
                    transition: transform 0.3s ease, opacity 0.3s ease;
                    transform-origin: center;
                }

                .faq-card--open .faq-icon-vertical {
                    transform: rotate(90deg);
                    opacity: 0;
                }

                .faq-question {
                    flex: 1;
                    color: var(--color-primary, #213170);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 32px;
                }

                .faq-answer-wrapper {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s ease;
                    overflow: hidden;
                }

                .faq-card--open .faq-answer-wrapper {
                    grid-template-rows: 1fr;
                }

                .faq-answer {
                    min-height: 0;
                    overflow: hidden;
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    padding-top: 0;
                    transition: padding-top 0.35s ease;
                }

                .faq-card--open .faq-answer {
                    padding-top: 16px;
                }

                /* ═══════════════════════════════════
                   CTA SECTION
                   ═══════════════════════════════════ */
                .cta-section {
                    width: 100%;
                    padding: 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cta-inner {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 40px;
                }

                .cta-buttons {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .cta-text {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .cta-title {
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .cta-desc {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                .cta-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--color-primary, #213170);
                    border-radius: 8px;
                    color: white;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                    min-width: 294px;
                }

                .cta-btn:hover {
                    background: #1a2759;
                    transform: translateY(-1px);
                }

                .cta-btn:active {
                    transform: translateY(0);
                }

                .cta-btn svg {
                    flex-shrink: 0;
                }

                .cta-btn--secondary {
                    background: transparent;
                    border: 2px solid var(--color-primary, #213170);
                    color: var(--color-primary, #213170);
                }

                .cta-btn--secondary:hover {
                    background: var(--color-primary, #213170);
                    color: white;
                    transform: translateY(-1px);
                }

                /* ═══════════════════════════════════
                   TABLET (max 1024px)
                   ═══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .contact-hero {
                        padding: 0;
                    }

                    .contact-hero-inner {
                        padding: 64px 0;
                    }

                    .contact-hero-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                        max-width: 704px;
                        width: 100%;
                        padding: 40px 16px;
                    }

                    .contact-hero-title {
                        width: auto;
                        max-width: 596px;
                    }

                    .contact-hero-desc {
                        max-width: 100%;
                    }

                    .contact-section {
                        padding: 32px;
                        background: white;
                    }

                    .contact-section-inner {
                        padding: 0;
                    }

                    .contact-layout {
                        flex-direction: column;
                        align-items: stretch;
                        padding: 0;
                        gap: 40px;
                    }

                    .contact-info {
                        max-width: 592px;
                    }

                    .contact-info-title {
                        color: var(--color-primary, #213170);
                    }

                    .contact-info-desc {
                        color: var(--color-primary, #213170);
                    }

                    .contact-info-cards {
                        max-width: 488px;
                    }

                    .contact-info-label {
                        color: var(--color-primary, #213170);
                    }

                    .contact-info-value {
                        color: #002966;
                    }

                    .contact-info-row {
                        gap: 16px;
                    }

                    .contact-info-card {
                        gap: 12px;
                    }

                    /* FAQ — Tablet */
                    .faq-section {
                        padding: 32px 0;
                        display: flex;
                        align-items: center;
                    }

                    .faq-header {
                        padding: 16px 0 48px;
                        gap: 12px;
                        max-width: min(704px, 100%);
                    }

                    .faq-subtitle {
                        font-size: 36px;
                        line-height: 44px;
                    }

                    .faq-title {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .faq-list {
                        max-width: min(704px, 100%);
                    }

                    .faq-card {
                        padding: 24px 32px;
                    }

                    .faq-question {
                        font-size: 20px;
                        line-height: 28px;
                    }

                    .faq-answer {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    /* CTA — Tablet */
                    .cta-section {
                        padding: 48px 32px;
                    }

                    .cta-title {
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .cta-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }

                /* ═══════════════════════════════════
                   MOBILE (max 480px)
                   ═══════════════════════════════════ */
                @media (max-width: 480px) {
                    .contact-hero-inner {
                        padding: 48px 0;
                    }

                    .contact-hero-content {
                        max-width: min(343px, 100%);
                        padding: 0 16px;
                        gap: 16px;
                    }

                    .contact-hero-title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 28px;
                    }

                    .contact-hero-desc {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .contact-section {
                        padding: 0;
                        background: var(--color-primary, #213170);
                    }

                    .contact-section-inner {
                        padding: 0;
                    }

                    .contact-layout {
                        padding: 16px;
                        gap: 40px;
                    }

                    .contact-info-title {
                        color: white;
                        font-size: 28px;
                        line-height: 36px;
                    }

                    .contact-info-desc {
                        color: white;
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .contact-info-label {
                        color: white;
                        font-weight: 600;
                    }

                    .contact-info-value {
                        color: white;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .contact-info-row {
                        gap: 16px;
                    }

                    .contact-info-card {
                        gap: 12px;
                    }

                    .contact-form-card {
                        padding: 16px;
                    }

                    /* FAQ — Mobile */
                    .faq-section {
                        padding: 16px 16px;
                        display: flex;
                        align-items: center;
                    }

                    .faq-header {
                        padding: 16px 0 32px;
                        gap: 8px;
                        max-width: min(343px, 100%);
                    }

                    .faq-subtitle {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .faq-title {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .faq-list {
                        max-width: min(343px, 100%);
                    }

                    .faq-card {
                        padding: 16px;
                    }

                    .faq-question {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    .faq-answer {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    /* CTA — Mobile */
                    .cta-section {
                        padding: 32px 16px;
                    }

                    .cta-title {
                        font-size: 22px;
                        line-height: 30px;
                    }

                    .cta-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .cta-btn {
                        min-width: unset;
                        width: 100%;
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
}

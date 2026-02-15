'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CardScanner from '@/components/login/CardScanner';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <style jsx global>{`
                /* Hide navbar + footer on the login route */
                body > nav,
                body > .navbar-wrapper,
                body > footer,
                body > .footer,
                header,
                .navbar,
                .footer {
                    display: none !important;
                }
            `}</style>

            <div className="login-page">
                {/* ── Left Panel: Form ── */}
                <div className="login-form-panel">
                    <div className="login-form-inner">
                        {/* Header */}
                        <div className="login-header">
                            <h1 className="login-title">Bun venit</h1>
                            <p className="login-subtitle">Conectează-te la contul de angajat</p>
                        </div>

                        {/* Social Sign-in */}
                        <div className="login-social-row">
                            <button className="login-social-btn" type="button">
                                <Image
                                    src="/images/quality/Login/Social icon-1.svg"
                                    alt="Google"
                                    width={24}
                                    height={24}
                                />
                                <span>Conectare cu Google</span>
                            </button>
                            <button className="login-social-btn" type="button">
                                <Image
                                    src="/images/quality/Login/Social icon.svg"
                                    alt="Apple"
                                    width={24}
                                    height={24}
                                />
                                <span>Conectare cu Apple</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="login-divider">
                            <div className="login-divider-line" />
                            <span className="login-divider-text">Sau conectează-te cu</span>
                            <div className="login-divider-line" />
                        </div>

                        {/* Form Fields */}
                        <form className="login-fields" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div className="login-field-group">
                                <label className="login-label">Email</label>
                                <div className="login-input-wrapper">
                                    <Image
                                        src="/images/quality/Login/remix-icons/line/business/mail-line.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="login-input-icon"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Introdu adresa de email"
                                        className="login-input"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="login-field-group">
                                <label className="login-label">Parolă</label>
                                <div className="login-input-wrapper">
                                    <Image
                                        src="/images/quality/Login/remix-icons/line/system/lock-line.svg"
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="login-input-icon"
                                    />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Introdu parola"
                                        className="login-input"
                                    />
                                    <button
                                        type="button"
                                        className="login-eye-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? 'Ascunde parola' : 'Arată parola'}
                                    >
                                        <Image
                                            src="/images/quality/Login/remix-icons/line/system/eye-line.svg"
                                            alt=""
                                            width={24}
                                            height={24}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Login Button */}
                            <div className="login-actions">
                                <button type="submit" className="login-submit-btn">
                                    Conectare
                                </button>

                                <div className="login-meta-row">
                                    <label className="login-remember">
                                        <input type="checkbox" className="login-checkbox" />
                                        <span>Ține-mă minte</span>
                                    </label>
                                    <Link href="#" className="login-forgot">
                                        Ai uitat parola?
                                    </Link>
                                </div>
                            </div>
                        </form>

                        {/* Sign Up Link */}
                        <div className="login-signup-row">
                            <span className="login-signup-text">Nu ai un cont?</span>
                            <Link href="#" className="login-signup-link">Înregistrează-te</Link>
                        </div>
                    </div>
                </div>

                {/* ── Right Panel: Card Scanner Animation ── */}
                <div className="login-preview-panel">
                    <CardScanner />
                </div>
            </div>

            <style jsx>{`
                .login-page {
                    display: flex;
                    min-height: 100vh;
                    background: white;
                    font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
                    padding-left: 64px;
                    padding-right: 64px;
                    padding-top: 64px;
                    padding-bottom: 64px;
                }

                /* ── LEFT PANEL ── */
                .login-form-panel {
                    flex: 0 0 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 32px;
                    background: white;
                }

                .login-form-inner {
                    width: 100%;
                    max-width: 500px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                /* Header */
                .login-header {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-self: stretch;
                    align-items: center;
                }

                .login-title {
                    color: #0D0D12;
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 48px;
                    margin: 0;
                }

                .login-subtitle {
                    color: #666D80;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    margin: 0;
                }

                /* Social Buttons */
                .login-social-row {
                    display: flex;
                    gap: 12px;
                    align-self: stretch;
                }

                .login-social-btn {
                    flex: 1;
                    height: 48px;
                    padding: 12px 16px;
                    background: #F8FAFB;
                    border-radius: 100px;
                    border: 1px solid #DFE1E7;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    box-shadow: 0px 1px 2px rgba(13, 13, 18, 0.06);
                    transition: background 0.2s;
                    font-family: inherit;
                }

                .login-social-btn:hover {
                    background: #EEF0F4;
                }

                .login-social-btn span {
                    color: #0D0D12;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                }

                /* Divider */
                .login-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    align-self: stretch;
                }

                .login-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #C1C7D0;
                }

                .login-divider-text {
                    color: #818898;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18.6px;
                    white-space: nowrap;
                }

                /* Form Fields */
                .login-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    align-self: stretch;
                }

                .login-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .login-label {
                    color: #0D0D12;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-input-wrapper {
                    height: 48px;
                    padding: 8px 12px;
                    background: #F8FAFB;
                    border-radius: 100px;
                    border: 1px solid #DFE1E7;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .login-input-wrapper:focus-within {
                    border-color: #1A275A;
                    box-shadow: 0 0 0 2px rgba(26, 39, 90, 0.12);
                }

                .login-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25.6px;
                    color: #0D0D12;
                    font-family: inherit;
                    outline: none;
                }

                .login-input::placeholder {
                    color: #666D80;
                }

                .login-eye-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 0;
                }

                /* Login Actions */
                .login-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .login-submit-btn {
                    width: 100%;
                    padding: 14px 24px;
                    background: #1A275A;
                    border-radius: 100px;
                    border: none;
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    font-family: inherit;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    text-align: center;
                }

                .login-submit-btn:hover {
                    background: #0f1a40;
                    transform: translateY(-1px);
                }

                .login-submit-btn:active {
                    transform: translateY(0);
                }

                .login-meta-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .login-remember {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                }

                .login-checkbox {
                    width: 20px;
                    height: 20px;
                    border-radius: 6px;
                    border: 1px solid #DFE1E7;
                    background: #F8FAFB;
                    cursor: pointer;
                    accent-color: #1A275A;
                }

                .login-remember span {
                    color: #666D80;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-forgot {
                    color: #6F6F6F;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21.7px;
                    text-decoration: none;
                }

                .login-forgot:hover {
                    text-decoration: underline;
                }

                /* Sign Up */
                .login-signup-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 0;
                }

                .login-signup-text {
                    color: #0D0D12;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .login-signup-link {
                    color: #1A275A;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    text-decoration: none;
                }

                .login-signup-link:hover {
                    text-decoration: underline;
                }

                /* ── RIGHT PANEL ── */
                .login-preview-panel {
                    flex: 0 0 50%;
                    position: relative;
                    background: url('/images/quality/Login/orange_medelise_login.svg') center center / cover no-repeat;
                    border-radius: 30px;
                    margin: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }





                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .login-preview-panel {
                        display: none;
                    }

                    .login-form-panel {
                        flex: 1;
                    }
                }

                @media (max-width: 480px) {
                    .login-form-panel {
                        padding: 24px 16px;
                    }

                    .login-title {
                        font-size: 32px;
                        line-height: 40px;
                    }

                    .login-social-row {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
}

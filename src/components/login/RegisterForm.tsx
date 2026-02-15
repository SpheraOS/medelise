'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import AnimatedEyeToggle from '@/components/login/AnimatedEyeToggle';

interface RegisterFormProps {
    /** Called when switched back to login */
    onSwitchToLogin?: () => void;
    /** Called when the form is submitted */
    onSubmit?: (data: { name: string; email: string; password: string }) => void;
    /** Additional className */
    className?: string;
}

export default function RegisterForm({
    onSwitchToLogin,
    onSubmit,
    className = '',
}: RegisterFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.({
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
        });
    };

    return (
        <>
            <div className={`register-form-panel ${className}`}>
                <div className="register-form-inner">
                    {/* Header */}
                    <div className="register-header">
                        <h1 className="register-title">Creează cont</h1>
                        <p className="register-subtitle">Înregistrează-te pentru acces la platforma angajaților</p>
                    </div>

                    {/* Social Sign-up */}
                    <div className="register-social-row">
                        <button className="register-social-btn" type="button">
                            <Image
                                src="/images/quality/Login/Social icon-1.svg"
                                alt="Google"
                                width={24}
                                height={24}
                            />
                            <span>Continuă cu Google</span>
                        </button>
                        <button className="register-social-btn" type="button">
                            <Image
                                src="/images/quality/Login/Social icon.svg"
                                alt="Apple"
                                width={24}
                                height={24}
                            />
                            <span>Continuă cu Apple</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="register-divider">
                        <div className="register-divider-line" />
                        <span className="register-divider-text">Sau înregistrează-te cu</span>
                        <div className="register-divider-line" />
                    </div>

                    {/* Form Fields */}
                    <form className="register-fields" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="register-field-group">
                            <label className="register-label">Nume complet</label>
                            <div className="register-input-wrapper">
                                <Image
                                    src="/images/quality/Login/remix-icons/line/business/mail-line.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={nameRef}
                                    type="text"
                                    placeholder="Introdu numele complet"
                                    className="register-input"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="register-field-group">
                            <label className="register-label">Email</label>
                            <div className="register-input-wrapper">
                                <Image
                                    src="/images/quality/Login/remix-icons/line/business/mail-line.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Introdu adresa de email"
                                    className="register-input"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="register-field-group">
                            <label className="register-label">Parolă</label>
                            <div className="register-input-wrapper">
                                <Image
                                    src="/images/quality/Login/remix-icons/line/system/lock-line.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="register-input-icon"
                                />
                                <input
                                    ref={passwordRef}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Creează o parolă"
                                    className="register-input"
                                />
                                <AnimatedEyeToggle
                                    isVisible={showPassword}
                                    onToggle={() => setShowPassword(!showPassword)}
                                    inputRef={passwordRef}
                                />
                            </div>
                        </div>

                        {/* Register Button */}
                        <div className="register-actions">
                            <button type="submit" className="register-submit-btn">
                                Înregistrează-te
                            </button>
                        </div>
                    </form>

                    {/* Switch to Login */}
                    <div className="register-login-row">
                        <span className="register-login-text">Ai deja un cont?</span>
                        <button
                            type="button"
                            className="register-login-link"
                            onClick={onSwitchToLogin}
                        >
                            Conectează-te
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .register-form-panel {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 32px;
                    background: white;
                }

                .register-form-inner {
                    width: 100%;
                    max-width: 500px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .register-header {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-self: stretch;
                    align-items: center;
                }

                .register-title {
                    color: var(--color-primary);
                    font-size: 40px;
                    font-weight: 500;
                    line-height: 48px;
                    margin: 0;
                }

                .register-subtitle {
                    color: var(--color-text-light);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    margin: 0;
                }

                .register-social-row {
                    display: flex;
                    gap: 12px;
                    align-self: stretch;
                }

                .register-social-btn {
                    flex: 1;
                    height: 48px;
                    padding: 12px 16px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    box-shadow: var(--shadow-sm);
                    transition: background 0.2s;
                }

                .register-social-btn:hover {
                    background: #EEF0F4;
                }

                .register-social-btn span {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                }

                .register-divider {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    align-self: stretch;
                }

                .register-divider-line {
                    flex: 1;
                    height: 1px;
                    background: var(--color-border-light);
                }

                .register-divider-text {
                    color: var(--color-text-muted);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 18.6px;
                    white-space: nowrap;
                }

                .register-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-self: stretch;
                }

                .register-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .register-label {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .register-input-wrapper {
                    height: 48px;
                    padding: 8px 12px;
                    background: var(--color-surface);
                    border-radius: var(--radius-pill);
                    border: 1px solid var(--color-border-form);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .register-input-wrapper:focus-within {
                    border-color: var(--color-primary-hover);
                    box-shadow: var(--shadow-focus);
                }

                .register-input {
                    flex: 1;
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25.6px;
                    color: var(--color-primary);
                    outline: none;
                }

                .register-input::placeholder {
                    color: var(--color-text-light);
                }

                .register-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .register-submit-btn {
                    width: 100%;
                    padding: 14px 24px;
                    background: var(--color-primary);
                    border-radius: var(--radius-pill);
                    border: none;
                    color: var(--color-white);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    text-align: center;
                }

                .register-submit-btn:hover {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                }

                .register-submit-btn:active {
                    transform: translateY(0);
                }

                .register-login-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 0;
                }

                .register-login-text {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 21.7px;
                }

                .register-login-link {
                    color: var(--color-primary);
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 25.6px;
                    text-decoration: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .register-login-link:hover {
                    text-decoration: underline;
                }

                @media (max-width: 480px) {
                    .register-form-panel {
                        padding: 24px 16px;
                    }

                    .register-title {
                        font-size: 32px;
                        line-height: 40px;
                    }

                    .register-social-row {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
                            <h1 className="login-title">Hi, Welcome</h1>
                            <p className="login-subtitle">Please login to employee account</p>
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
                                <span>Sign in with Google</span>
                            </button>
                            <button className="login-social-btn" type="button">
                                <Image
                                    src="/images/quality/Login/Social icon.svg"
                                    alt="Apple"
                                    width={24}
                                    height={24}
                                />
                                <span>Sign in with Apple</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="login-divider">
                            <div className="login-divider-line" />
                            <span className="login-divider-text">Or Sign in with</span>
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
                                        placeholder="Input your email"
                                        className="login-input"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="login-field-group">
                                <label className="login-label">Password</label>
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
                                        placeholder="Input your password"
                                        className="login-input"
                                    />
                                    <button
                                        type="button"
                                        className="login-eye-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
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
                                    Login
                                </button>

                                <div className="login-meta-row">
                                    <label className="login-remember">
                                        <input type="checkbox" className="login-checkbox" />
                                        <span>Remember me</span>
                                    </label>
                                    <Link href="#" className="login-forgot">
                                        Forgot Password ?
                                    </Link>
                                </div>
                            </div>
                        </form>

                        {/* Sign Up Link */}
                        <div className="login-signup-row">
                            <span className="login-signup-text">Don&apos;t have an account?</span>
                            <Link href="#" className="login-signup-link">Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* ── Right Panel: Dashboard Preview ── */}
                <div className="login-preview-panel">
                    {/* Gradient overlay */}
                    <div className="login-preview-overlay" />

                    {/* Top: Logo + Title */}
                    <div className="login-preview-header">
                        <div className="login-preview-logo-row">
                            <span
                                style={{
                                    fontFamily: 'var(--font-michroma), Michroma, sans-serif',
                                    fontSize: '24px',
                                    textTransform: 'uppercase' as const,
                                    color: 'white',
                                    letterSpacing: '0.05em',
                                    lineHeight: 1,
                                }}
                            >
                                MEDELISE
                            </span>
                            <div className="login-preview-logo-line" />
                        </div>
                        <div className="login-preview-title-block">
                            <h2 className="login-preview-title">Simplify Medical Management</h2>
                            <p className="login-preview-desc">
                                Streamline patient care, appointments, and medical records in one
                                powerful dashboard. Experience the ease of managing your healthcare
                                services with MedKit
                            </p>
                        </div>
                    </div>

                    {/* Dashboard mockup card */}
                    <div className="login-dashboard-card">
                        <div className="login-dashboard-topbar">
                            <div className="login-dashboard-logo-area">
                                <span className="login-dashboard-brand">MEDELISE</span>
                            </div>
                            <span className="login-dashboard-search">🔍 Search here...</span>
                        </div>
                        <div className="login-dashboard-content">
                            <div className="login-dashboard-heading">
                                <span className="login-dashboard-h1">Dashboard</span>
                                <span className="login-dashboard-h1-sub">Medical</span>
                            </div>
                            <div className="login-dashboard-stats">
                                <div className="login-stat-bar login-stat-bar--gold" />
                                <div className="login-stat-bar login-stat-bar--grey" />
                            </div>
                        </div>
                    </div>
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
                    padding: 40px 32px;
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
                    font-size: 12px;
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
                    background: linear-gradient(145deg, #ff6b35, #ff4444, #cc2200);
                    border-radius: 30px;
                    margin: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }

                .login-preview-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(20, 20, 20, 0.5) 4%,
                        rgba(112, 112, 112, 0) 52%,
                        rgba(7, 7, 7, 0.04) 100%
                    );
                    z-index: 1;
                    pointer-events: none;
                }

                /* Preview Header */
                .login-preview-header {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    margin-top: 64px;
                }

                .login-preview-logo-row {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .login-preview-logo-line {
                    flex: 1;
                    height: 1px;
                    background: #DFE1E7;
                }

                .login-preview-title-block {
                    max-width: 510px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .login-preview-title {
                    color: white;
                    font-size: 48px;
                    font-weight: 500;
                    line-height: 57.6px;
                    margin: 0;
                }

                .login-preview-desc {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 25.6px;
                    margin: 0;
                    opacity: 0.9;
                }

                /* Dashboard Card */
                .login-dashboard-card {
                    position: relative;
                    z-index: 2;
                    margin-top: auto;
                    background: #F6F8FA;
                    border-radius: 20px;
                    overflow: hidden;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    min-height: 300px;
                }

                .login-dashboard-topbar {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .login-dashboard-brand {
                    font-family: var(--font-michroma), 'Michroma', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    color: black;
                }

                .login-dashboard-search {
                    font-size: 12px;
                    color: #6F6F6F;
                    background: white;
                    padding: 8px 12px;
                    border-radius: 100px;
                    border: 1px solid #DFE1E7;
                }

                .login-dashboard-content {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .login-dashboard-heading {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                }

                .login-dashboard-h1 {
                    font-size: 36px;
                    font-weight: 400;
                    color: black;
                }

                .login-dashboard-h1-sub {
                    font-size: 36px;
                    font-weight: 400;
                    color: #6F6F6F;
                }

                .login-dashboard-stats {
                    display: flex;
                    gap: 6px;
                    align-items: center;
                }

                .login-stat-bar {
                    height: 24px;
                    border-radius: 50px;
                }

                .login-stat-bar--gold {
                    flex: 2.5;
                    background: #FEC337;
                }

                .login-stat-bar--grey {
                    flex: 1;
                    background: #C1C7D0;
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

/**
 * Application-wide constants
 */

export const APP_NAME = 'Medelise'
export const APP_DESCRIPTION = 'Medvita Health Solutions'

export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    LOGIN: '/login',
    REGISTER: '/register',
} as const

export const API_ENDPOINTS = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
} as const

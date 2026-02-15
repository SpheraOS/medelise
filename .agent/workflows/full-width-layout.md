---
description: Regulă de layout full-width — toate paginile se întind pe tot ecranul cu padding din arhitectura design system
---

# Full-Width Layout Rule

## Principiu

Toate paginile și secțiunile se întind **edge-to-edge** pe tot ecranul. Conținutul este controlat **exclusiv** prin padding orizontal din design system, **NU** prin `max-width` pe containere.

## Variabile obligatorii (din `globals.css`)

```css
--space-section-px-sm: 16px;   /* Mobile  < 481px  */
--space-section-px-md: 32px;   /* Tablet  481–1024px */
--space-section-px-lg: 64px;   /* Desktop > 1024px  */
```

## Pattern CSS obligatoriu

Fiecare secțiune / container de pagină TREBUIE să folosească:

```css
/* Desktop (default) */
.section {
    width: 100%;
    padding-left: var(--space-section-px-lg);
    padding-right: var(--space-section-px-lg);
}

/* Tablet */
@media (max-width: 1024px) {
    .section {
        padding-left: var(--space-section-px-md);
        padding-right: var(--space-section-px-md);
    }
}

/* Mobile */
@media (max-width: 480px) {
    .section {
        padding-left: var(--space-section-px-sm);
        padding-right: var(--space-section-px-sm);
    }
}
```

## Reguli INTERZISE

| ❌ Nu folosi                        | ✅ Folosește în loc                  |
|-------------------------------------|--------------------------------------|
| `max-width: 1216px`                 | `width: 100%` + padding vars        |
| `padding: 0 112px`                  | `padding: 0 var(--space-section-px-lg)` |
| `padding: 0 max(16px, 6vw)`        | `padding: 0 var(--space-section-px-lg)` |
| `width: 704px` (container fix)      | `width: 100%`                        |
| `width: 343px` (container fix)      | `width: 100%`                        |
| `margin: 0 auto` pe container       | Padding pe secțiune                  |

## Spacing intern — folosește doar tokens 8pt

```css
/* NU hardcoda pixeli */
gap: 32px;       /* ❌ */
gap: var(--space-8); /* ✅ = 32px */

padding: 48px 0;      /* ❌ */
padding: var(--space-12) 0; /* ✅ = 48px */
```

## Checklist la fiecare pagină/secțiune nouă

1. [ ] Secțiunea are `width: 100%`
2. [ ] Padding orizontal = `var(--space-section-px-lg)` pe desktop
3. [ ] `@media (max-width: 1024px)` → `var(--space-section-px-md)`
4. [ ] `@media (max-width: 480px)` → `var(--space-section-px-sm)`
5. [ ] **Zero** `max-width` pe containere principale
6. [ ] Spacing intern folosește tokens `--space-*`
7. [ ] Niciun scroll orizontal pe 375px viewport

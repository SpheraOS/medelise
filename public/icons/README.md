# Icon Management System

This directory contains all project icons organized by category.

## 📁 Structure

```
icons/
├── flags/           - Country and region flags
├── payment/         - Payment method logos
├── social/          - Social media platforms
├── brands/          - Company/product logos
├── ui/              - Interface icons
├── medical/         - Medical/health icons
└── misc/            - Temporary uncategorized
```

## 🎯 Naming Convention

Format: `{category}-{descriptor}-{variant}.svg`

Examples:
- `flag-ro.svg` (Romania flag, ISO code)
- `payment-visa.svg` (Visa card)
- `ui-check-circle.svg` (Check icon, circle variant)

## 📏 Standards

- All icons use `viewBox="0 0 24 24"`
- Use `fill="currentColor"` or `stroke="currentColor"`
- No hardcoded colors
- Optimized and minified SVG

## 🔗 Usage

```tsx
import { Icon } from '@/components/ui'

<Icon name="ui/check" className="text-green-600" />
<Icon name="payment/visa" size={32} />
<Icon name="flag/ro" />
```

See `/brain/icon_management_rules.md` for complete documentation.

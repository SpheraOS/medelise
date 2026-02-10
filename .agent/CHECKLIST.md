# Code Organization & Anti-Redundancy Checklist

Use this checklist before committing code to ensure zero redundancy.

## 🔍 Pre-Commit Checks

### Component Redundancy
- [ ] Searched for similar components in `src/components/`
- [ ] No duplicate component logic exists
- [ ] Common patterns extracted to shared components
- [ ] Variants use single component with props, not separate files

### Style Redundancy
- [ ] No repeated Tailwind class combinations (3+ uses)
- [ ] Common styles extracted to CSS utilities or components
- [ ] All colors use design tokens from `src/styles/tokens/`
- [ ] No hardcoded spacing values

### Logic Redundancy
- [ ] No duplicate hooks or utilities
- [ ] Common logic extracted to `src/hooks/` or `src/lib/utils/`
- [ ] API calls use shared client from `src/lib/api/`
- [ ] Form validation uses shared schemas

### Import Redundancy
- [ ] Imports organized (external, internal, relative, types)
- [ ] No duplicate imports in same file
- [ ] Barrel exports used where appropriate
- [ ] Import aliases (`@/*`) used consistently

### Icon Redundancy
- [ ] Icon categorized correctly in `public/icons/`
- [ ] Icon name follows convention: `{category}-{descriptor}.svg`
- [ ] No duplicate icon files
- [ ] Icon uses `viewBox="0 0 24 24"` and `currentColor`

### Type Redundancy
- [ ] Types defined in `src/types/` if shared
- [ ] No duplicate type definitions
- [ ] Extends existing types where possible
- [ ] Use discriminated unions over multiple interfaces

### Constant Redundancy
- [ ] Magic numbers extracted to constants
- [ ] Magic strings extracted to enums/constants
- [ ] Constants in `src/lib/constants.ts` if global
- [ ] No duplicate constant definitions

## 🎯 Specific Checks

### Before Adding Component
```bash
# Search for similar patterns
grep -r "className.*<pattern>" src/components/
```

### Before Adding Hook
```bash
# Search for similar hooks
grep -r "use[A-Z]" src/hooks/
```

### Before Adding Utility
```bash
# Search for similar functions
grep -r "export function" src/lib/
```

### Before Adding Icon
```bash
# Check if icon exists
find public/icons/ -name "*<keyword>*"
```

## ✅ Quality Gates

All must pass before commit:
- [ ] TypeScript: `npm run type-check` - No errors
- [ ] Linting: `npm run lint` - No errors
- [ ] Formatting: `npm run format:check` - Passes
- [ ] Build: `npm run build` - Success
- [ ] No `.only` in tests
- [ ] No `console.log` statements
- [ ] No commented code blocks
- [ ] All TODOs have issue numbers

## 🚫 Common Redundancy Patterns to Avoid

### ❌ Duplicate Buttons
```tsx
// Wrong
<button className="bg-blue-600 text-white px-4 py-2 rounded">
<button className="bg-gray-100 text-gray-900 px-4 py-2 rounded">

// Right
<Button variant="primary">
<Button variant="secondary">
```

### ❌ Duplicate Fetch Logic  
```tsx
// Wrong
useEffect(() => { fetch('/api/user')... }, [])
useEffect(() => { fetch('/api/user')... }, [])

// Right
const user = useUser()  // Shared hook
```

### ❌ Duplicate Styles
```tsx
// Wrong (used 5+ times)
className="flex items-center justify-between"

// Right
className="flex-between"  // CSS utility
```

### ❌ Duplicate Types
```tsx
// Wrong
interface User { id: string; name: string }
interface UserData { id: string; name: string }

// Right
import type { User } from '@/types'
```

## 📊 Redundancy Metrics

Target: **0% code redundancy**

Track with:
```bash
# Find duplicate code blocks
npx jscpd src/

# Find duplicate npm packages
npx depcheck

# Find unused exports
npx ts-prune
```

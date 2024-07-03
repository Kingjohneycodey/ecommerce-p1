/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Public Sans', 'sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        background:
          'hsl(var(--color-background) / <alpha-value>)',
        foreground:
          'hsl(var(--color-foreground) / <alpha-value>)',
        popover: {
          DEFAULT:
            'hsl(var(--color-background) / <alpha-value>)',
          foreground:
            'hsl(var(--color-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--color-foreground) / 0.5)',
        brand: {
          primary:
            'hsl(var(--color-brand-primary) / <alpha-value>)',
          'primary-foreground':
            'hsl(var(--color-brand-primary-foreground) / <alpha-value>)',
          secondary:
            'hsl(var(--color-brand-secondary) /  <alpha-value>)',
        },
        secondary:
          'hsl(var(--color-secondary) / <alpha-value>)',
        destructive:
          'hsl(var(--color-destructive) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        'muted-foreground':
          'hsl(var--color-muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-foreground':
          'hsl(var(--color-accent-foreground) / <alpha-value>)',
        neutral: {
          DEFAULT:
            'hsl(var(--color-neutral) / <alpha-value>)',
          100: 'hsl(var(--color-neutral-100) / <alpha-value>)',
          'foreground-100':
            'hsl(var(--color-neutral-foreground-100) / <alpha-value>)',
          'foreground-200':
            'hsl(var(--color-neutral-foreground-200) / <alpha-value>)',
          'foreground-300':
            'hsl(var(--color-neutral-foreground-300) / <alpha-value>)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: '0' },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-in 0.2s forwards',
      },
    },
  },
  plugins: [],
}

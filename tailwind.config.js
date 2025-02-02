const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: 'wsa',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '0.32rem',
      screens: {
        '2xl': '14rem',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 0.04rem)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.02rem)',
        sm: 'calc(var(--radius) - 0.04rem)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      spacing: {
        1: '0.04rem',
        1.5: '0.06rem',
        2: '0.08rem',
        2.5: '0.1rem',
        3: '0.12rem',
        3.5: '0.14rem',
        4: '0.16rem',
        4.5: '0.18rem',
        5: '0.2rem',
        5.5: '0.22rem',
        6: '0.24rem',
        6.5: '0.26rem',
        7: '0.28rem',
        7.5: '0.3rem',
        8: '0.32rem',
        8.5: '0.34rem',
        9: '0.36rem',
        9.5: '0.38rem',
        10: '0.4rem',
        10.5: '0.42rem',
        11: '0.44rem',
        11.5: '0.46rem',
        12: '0.48rem',
        14: '0.56rem',
        16: '0.64rem',
        20: '0.8rem',
        24: '0.96rem',
        28: '1.12rem',
        32: '1.28rem',
        36: '1.44rem',
        40: '1.6rem',
        44: '1.76rem',
        48: '1.92rem',
        52: '2.08rem',
        56: '2.24rem',
        60: '2.4rem',
        64: '2.56rem',
        72: '2.88rem',
        80: '3.2rem',
        96: '3.84rem',
      },
      fontSize: {
        sm: ['0.14rem', '0.2rem'],
        base: ['0.16rem', '0.24rem'],
        lg: ['0.2rem', '0.28rem'],
        xl: ['0.24rem', '0.32rem'],
        '2xl': [
          '0.24rem',
          {
            lineHeight: '0.32rem',
            letterSpacing: '-0.01em',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '0.3rem',
          {
            lineHeight: '0.36rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [animate],
}

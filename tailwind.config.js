module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2c3e50", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#2c3e50", // slate-800
          900: "#0f172a", // slate-900
        },
        secondary: {
          DEFAULT: "#3498db", // blue-500
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3498db", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        accent: {
          DEFAULT: "#e67e22", // orange-500
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#e67e22", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
        background: "#f8f9fa", // gray-50
        surface: "#ffffff", // white
        text: {
          primary: "#2c3e50", // slate-800
          secondary: "#7f8c8d", // gray-500
        },
        success: {
          DEFAULT: "#27ae60", // green-600
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          500: "#27ae60", // green-600
        },
        warning: {
          DEFAULT: "#f39c12", // yellow-500
          50: "#fefce8", // yellow-50
          100: "#fef3c7", // yellow-100
          500: "#f39c12", // yellow-500
        },
        error: {
          DEFAULT: "#e74c3c", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#e74c3c", // red-500
        },
        border: {
          DEFAULT: "#e1e8ed", // gray-200
          focus: "#3498db", // blue-500
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        accent: ['Amiri', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(44, 62, 80, 0.1)',
        strong: '0 4px 16px rgba(44, 62, 80, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.8',
      },
    },
  },
  plugins: [],
}
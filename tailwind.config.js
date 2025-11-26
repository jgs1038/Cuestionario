/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme accent colors
    'bg-teal-500', 'bg-cyan-500', 'bg-blue-500',
    'bg-teal-500/20', 'bg-cyan-500/20', 'bg-blue-500/20',
    'bg-teal-500/10', 'bg-cyan-500/10', 'bg-blue-500/10',
    'bg-teal-500/30', 'bg-cyan-500/30', 'bg-blue-500/30',
    'text-teal-400', 'text-cyan-400', 'text-blue-400',
    'text-teal-300', 'text-cyan-300', 'text-blue-300',
    'text-teal-100', 'text-cyan-100', 'text-blue-100',
    'border-teal-400', 'border-cyan-400', 'border-blue-400',
    'border-teal-400/20', 'border-cyan-400/20', 'border-blue-400/20',
    'border-teal-500', 'border-cyan-500', 'border-blue-500',
    'border-teal-500/30', 'border-cyan-500/30', 'border-blue-500/30',
    'border-teal-500/50', 'border-cyan-500/50', 'border-blue-500/50',
    // Gradients
    'from-teal-400', 'from-cyan-400', 'from-blue-400',
    'to-purple-400', 'to-purple-500',
    'bg-gradient-to-tr', 'bg-gradient-to-r',
    // Hover states
    'hover:text-teal-300', 'hover:text-cyan-300', 'hover:text-blue-300',
  ],
  theme: { extend: {} },
  plugins: [],
}
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
    // ...custom presets
  ],
  theme: {
    colors: {
      // Custom dark theme colors
      primary: '#4CAF50', //green
      background: '#17171a', // Very Dark Gray
      surface: '#1f1f22', // Dark Gray
      text: '#ffffff', // White
      secondary: '#b0b0b0', // Light Gray
      accent: '#3498db', // Bright Blue
      // Additional colors can be added here
    },
  },
  shortcuts: [
    {
      'btn-primary': 'border-0 bg-primary text-white font-bold rounded-md p-2 shadow-lg hover:opacity-75 active:opacity-50 transform cursor-pointer transition ease-in-out duration-200',
    },
    {
      'card': 'border border-secondary shadow-md p-4 bg-surface rounded-lg',
    },
    {
      'input': 'border border-gray-600 rounded p-2 mt-2 bg-surface text-text text-lg pb-1 pt-1 pr-1 pl-1'
    },
    {'link':  'no-underline text-secondary hover:text-white' },
  ],
  rules: [
    // Custom classes for darkening effect
    ['bg-primary-dark', { backgroundColor: '#388E3C' }],
    ['bg-primary-darker', { backgroundColor: '#2E7D32' }],
    ['text-primary-dark', { color: '#388E3C' }],
    ['text-primary-darker', { color: '#2E7D32' }],    
  ],
})

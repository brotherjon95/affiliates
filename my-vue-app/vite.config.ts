import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // Optional: Enables global test functions like 'describe', 'it', etc.
    environment: 'jsdom', // You can use jsdom for DOM-related tests
    coverage: {
      provider: 'c8', // c8 is the default provider for coverage in Vitest
      reporter: ['text', 'html', 'lcov'], // You can use multiple reporters
      include: ['src/**/*.{ts,tsx,vue}'], // Include your source files for coverage
      exclude: ['**/node_modules/**', '**/tests/**'], // Exclude unnecessary files
    },
  },
})

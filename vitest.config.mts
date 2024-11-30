import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 3000,
  },
  test: {
    deps: {
      optimizer: {
        web: {
          enabled: true,
        },
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    passWithNoTests: true,
    testTransformMode: { web: ['/\.tsx?$/'] },
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/app/tests/setup-test-environment.ts'],
    include: ['./src/**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/build/**', '**/.next/**'],
  },
});

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testing from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import publicApi from '@feature-sliced/eslint-config/rules/public-api/index.js';
import layersSlices from '@feature-sliced/eslint-config/rules/layers-slices/index.js';
import boundaries from 'eslint-plugin-boundaries';
import reactPlugin from 'eslint-plugin-react';
import reactRedux from 'eslint-plugin-react-redux';
import eslintPluginImport from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [js.configs.recommended, ...testing.configs.recommended, reactRedux.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin,
      import: eslintPluginImport,
      'react-redux': reactRedux
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...publicApi.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['I']
        }
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@/*/*/*/*']
        }
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'max-params': ['error', 3],
      'no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1]
        }
      ],
      'no-new-func': 'error',
      'no-return-await': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never'
        }
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'after'
            },
            {
              pattern: '@/app/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '**/interface/**',
              group: 'type',
              position: 'before'
            },
            {
              pattern: '**/enum/**',
              group: 'type',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external', 'internal', 'object', 'type'],
          'newlines-between': 'always-and-inside-groups'
        }
      ],
      'import/newline-after-import': 'error'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...boundaries.configs.recommended,
    plugins: {
      boundaries
    },
    settings: layersSlices.settings,
    rules: layersSlices.rules
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off'
    }
  }
]);

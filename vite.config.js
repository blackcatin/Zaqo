import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		open: true, // opsional, buka browser otomatis
	},
	build: {
		outDir: 'dist',
	},
	// ⬇️ fallback untuk router
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	base: '/',
});

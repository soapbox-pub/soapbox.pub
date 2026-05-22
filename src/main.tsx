import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

import '@fontsource-variable/inter'
import '@fontsource-variable/outfit'
// Bebas Neue ships at a single weight (400) only. Used by the Agora
// landing page hero headline to match the typography on agora.spot.
import '@fontsource/bebas-neue/400.css'

import { initPlausible } from '@/lib/plausible'

initPlausible();

createRoot(document.getElementById("root")!).render(<App />);

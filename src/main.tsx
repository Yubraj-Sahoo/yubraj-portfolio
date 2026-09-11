import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//other css
import "./styles/variables.css"

import { HealthProvider } from './contexts/HealthContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HealthProvider>
            <App/>
        </HealthProvider>
    </StrictMode>,
)

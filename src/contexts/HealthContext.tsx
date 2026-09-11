import React, {createContext, useContext, useState, useEffect} from 'react';
import { checkHealthAPI } from '../api/v1/services/health';

interface HealthContextType {
    isBackendUp: boolean;
    isInitialLoading: boolean;
}

const HealthContext = createContext<HealthContextType>({
    isBackendUp: false,
    isInitialLoading: true,
});

export const useHealth = () => useContext(HealthContext);

export const HealthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isBackendUp, setIsBackendUp] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    const checkBackendHealth = async () => {
        console.log("Checking backend health...");
        const isUp = await checkHealthAPI();
        if (isUp) {
            console.log("Backend health check successful: UP");
        } else {
            console.log("Backend health check failed.");
        }
        setIsBackendUp(isUp);
    };

    useEffect(() => {
        const init = async () => {
            await checkBackendHealth();
            setIsInitialLoading(false);
        };

        init();

        // Check health every 10 minutes (600,000 ms)
        const intervalId = setInterval(checkBackendHealth, 10 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <HealthContext.Provider value={{isBackendUp, isInitialLoading}}>
            {children}
        </HealthContext.Provider>
    );
};

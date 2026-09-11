import React, { createContext, useContext, useState, useEffect } from 'react';

interface HealthContextType {
    isBackendUp: boolean;
    isInitialLoading: boolean;
}

const HealthContext = createContext<HealthContextType>({
    isBackendUp: false,
    isInitialLoading: true,
});

export const useHealth = () => useContext(HealthContext);

export const HealthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isBackendUp, setIsBackendUp] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    const checkBackendHealth = async () => {
        try {
            const response = await fetch('/actuator/health');
            if (response.ok) {
                const data = await response.json();
                if (data.status === 'UP') {
                    setIsBackendUp(true);
                } else {
                    setIsBackendUp(false);
                }
            } else {
                setIsBackendUp(false);
            }
        } catch (error) {
            console.error("Backend is not up:", error);
            setIsBackendUp(false);
        }
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
        <HealthContext.Provider value={{ isBackendUp, isInitialLoading }}>
            {children}
        </HealthContext.Provider>
    );
};

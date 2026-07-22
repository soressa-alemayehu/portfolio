import React, { createContext, useContext } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import type { PortfolioData } from '../services/sanity';
import fallbackData from '../data/portfolioData.json';
import { PageLoader, ErrorState } from '../components/FeedbackStates';

interface PortfolioContextType {
  data: PortfolioData;
  loading: boolean;
  error: Error | null;
}

const defaultContextValue: PortfolioContextType = {
  data: fallbackData as PortfolioData,
  loading: false,
  error: null,
};

const PortfolioContext = createContext<PortfolioContextType>(defaultContextValue);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, loading, error } = usePortfolioData();

  const currentData = data || (fallbackData as PortfolioData);

  if (loading && !data) {
    return <PageLoader />;
  }

  if (error && !data) {
    return (
      <ErrorState
        title="Protocol Error"
        message={error?.message || "Failed to initialize portfolio database payload."}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <PortfolioContext.Provider value={{ data: currentData, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

import { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/sanity';
import type { PortfolioData } from '../services/sanity';

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchPortfolioData();
        if (active) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (active) {
          setError(err as Error);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, []);

  return { data, loading, error };
}

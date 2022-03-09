import React, { useEffect, useState } from 'react';
import { Events } from '../components/events/Events';

const apiUrl = process.env.REACT_APP_API_URL;

export function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      try {
        const url = new URL('/events', apiUrl);
        const result = await fetch(url.href);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
        setData(json);
      } catch (e) {
        console.warn('unable to fetch data', e);
        setError('Gat ekki sótt gögn.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <p>Villa kom upp: {error}</p>;
  }

  if (loading) {
    return <p>Sæki gögn...</p>;
  }

  if (data) {
    return <Events title="Viðburðir á næstunni" events={data.items} />;
  }

  return null;
}

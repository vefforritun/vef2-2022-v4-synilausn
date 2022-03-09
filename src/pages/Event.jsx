import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from '../components/event/Event';



const apiUrl = process.env.REACT_APP_API_URL;

export function EventPage({ loggedin }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      try {
        const url = new URL(`/events/${id}`, apiUrl);

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
  }, [id]);

  console.log('data :>> ', data);

  if (error) {
    return <p>Villa kom upp: {error}</p>;
  }

  if (loading) {
    return <p>Sæki viðburð...</p>;
  }

  if (data) {
    return (
      <Event
        title={data.name}
        description={data.description}
        registrations={data.registrations}
        loggedin={loggedin}
      />
    );
  }

  return null;
}

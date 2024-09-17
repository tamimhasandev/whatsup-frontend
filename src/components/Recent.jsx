import { useEffect, useState } from 'react';
import host from '../../env';
import Updates from './Updates';

export default function Recent() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const res = await fetch(host + '/recent');
        const data = await res.json();
        setLinks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <>
      {error && error}
      {loading || (
        <Updates className="border-none" title="Recently added" links={links} />
      )}
    </>
  );
}

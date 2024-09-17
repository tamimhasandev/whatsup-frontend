import { useEffect, useState } from 'react';

export default function TotalProducts() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(import.meta.env.VITE_REACT_HOST + '/total');
        const data = await res.json();
        setTotal(data.total);
      } catch {
        setTotal(0);
      }
    })();
  }, []);
  return (
    <div className="dark:text-white text-xl flex gap-2">
      Total Product: <p className="font-semibold">{total}</p>
    </div>
  );
}

import { useEffect, useState } from "react";
import Updates from "./Updates";
import { BlinkBlur } from "react-loading-indicators";
import getHost from "../utils/getHost";

export default function Recent() {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const res = await fetch(getHost() + "/recent");
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
      {loading ? (
        <BlinkBlur color="#fff" size="medium" text="" textColor="" />
      ) : (
        <Updates className="border-none" title="Recently added" links={links} />
      )}
    </>
  );
}

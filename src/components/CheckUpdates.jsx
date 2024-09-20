import { useState } from 'react';
import { BlinkBlur } from 'react-loading-indicators';
import getHost from '../utils/getHost';
import Button from './Button';
import SaveUpdates from './SaveUpdates';
import Updates from './Updates';

export default function CheckUpdates() {
  const [changed, setChanged] = useState([]);
  const [newItems, setNewItems] = useState([]);

  const [loading, setLoading] = useState(false);

  async function checkHandler() {
    try {
      setLoading(true);
      const res = await fetch(getHost() + '/updates');
      const { changedItems, newItems } = await res.json();
      setChanged(changedItems);
      setNewItems(newItems);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <div className="flex gap-4">
        <Button text="Check Updates" onClick={checkHandler} />
        <SaveUpdates newItems={newItems} changedItems={changed} />
      </div>
      <div className="md:flex gap-x-10 w-full mt-7">
        {loading ? (
          <>
            <BlinkBlur color="#fff" size="medium" text="" textColor="" />
          </>
        ) : (
          <>
            <Updates
              width="50%"
              title="New collections"
              links={newItems}
              headingClasses="!text-[#22c55e]"
            />
            <Updates
              width="50%"
              title="Modified collections"
              links={changed}
              headingClasses="!text-[#fb923c]"
            />
          </>
        )}
      </div>
    </div>
  );
}

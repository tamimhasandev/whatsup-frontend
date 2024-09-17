/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoCopySharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

export default function Link({ link, index }) {
  const [copyColor, setCopyColor] = useState(null);

  async function copyHandler(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast(text);
      setCopyColor('green');
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <li
      style={{ border: copyColor && `1px solid ${copyColor}` }}
      className="list p-2 rounded-md flex gap-3 items-center"
    >
      <span className="dark:text-[#fcfcfc] text-sm font-medium pl-2">
        {index + 1}.
      </span>
      <a
        target="_blank"
        className="hover:text-blue-800 dark:text-[#9fb2ff] transition-all text-base capitalize font-medium"
        href={link.loc}
      >
        {link.loc
          ?.replace('https://www.mobiledokan.com/mobile/', ' ')
          .replaceAll('-', ' ')
          .trim()}
      </a>
      <IoCopySharp
        title="Copy"
        onClick={() =>
          copyHandler(
            link.loc
              ?.replace('https://www.mobiledokan.com/mobile/', ' ')
              .replaceAll('-', ' ')
              .trim()
          )
        }
        color="#fff"
        size="1.3rem"
        cursor="pointer"
      />

      <span className="text-xs font-semibold text-gray-600">
        ({link.lastmod})
      </span>
    </li>
  );
}

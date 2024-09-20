/* eslint-disable react/prop-types */
import Link from './Link';
export default function Updates({ title, links, className, width, headingClasses }) {
  return (
    <>
      {links.length > 0 && (
        <div style={width && { width: width }} className='!w-full'>
          <h4 className={`font-semibold text-xl mb-2 mt-4 dark:text-[#fcfcfc] ${headingClasses}`}>
            {title}
          </h4>
          <ul className={`rounded-md flex flex-col gap-3 ${className}`}>
            {links.map((link, index) => {
              return <Link key={index} link={link} index={index} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

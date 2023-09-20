import { footerLinks, copyRight } from '../constants/index'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center relative bottom-0 left-0 p-4 gap-4 w-full bg-[#3085C3]">
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-24 p-8">
        {Object.entries(footerLinks).map((group, index) => (
          <div key={`group-${index}`}>
            <p className='text-3xl md:text-xl font-semibold mb-4'>{group[0]}</p>
            <div className="flex flex-col gap-2">
              {group[1].map((child) => (
                <a key={child.name} href={child.link} className='text-xl tracking-wider hover:underline'>{child.name}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='border-b-[1px] border-white w-full' />

      <div className="flex flex-col md:flex-row w-full items-center justify-evenly p-4">
        <p className="text-white text-xl font-semibold p-4">
          © 2023 Computer. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 underline">
          {copyRight.map((link) => (
            <a key={link.name} href={link.link}>{link.name}</a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;

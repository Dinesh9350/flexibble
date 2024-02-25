import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: Array<string>;
}) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => (
        <Link href='/' key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className='footer flexStart'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image
            src='/logo-purple.svg'
            width={115}
            height={38}
            alt='flexibble'
          />
          <p className='text-sm text-start font-normal mt-3 max-w-xs'>
            Flexibble is the world's leading communtiy for creatives to share,
            grow and get hired.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className='flex flex-1 flex-col gap-4'>
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className='flex flex-1 flex-col gap-4'>
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
        </div>
        <FooterColumn
          title={footerLinks[3].title}
          links={footerLinks[3].links}
        />
      </div>
      <div className='flexBetween footer_copyright'>
        <p>@ 2024 Flexibble. All rights reserved</p>
				<p className='text-gray'><span className='text-black font-semibold'>1,77,339</span> Projects submitted</p>
      </div>
    </footer>
  );
};

export default Footer;

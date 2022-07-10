import type { NextPage } from 'next'
import Image from 'next/image'
import { Link } from '../components/Link'
import NavigationMenu from '../components/navMenu'
import { customConfiguration } from './_app'

function Feature({
  title, description, image, style
}: {
  title: string;
  description: string;
  image: string;
  style: "left" | "right";
}) {
  const shortName = style == "left" ? "r" : "l"
  const baseStyle = `text-${style} ${style == "left" ? "" : "bg-grey-extra-dark"}`;
  const ReactImage = (
    <div className={`featureImage p${shortName}-5 float-${style} text-${style}`}>
        <img src={image} alt={title} width={100} height={100}/>
    </div>
  );

  return (
    <div className={`feature ${baseStyle}`}>
      {style == "left" ? ReactImage : null}
      <div className={`featureText pb-16 float-${style}`}>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="featureDescription max-w-xs font-medium">{description}</p>
      </div>
      {style == "right" ? ReactImage : null}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <div className='topbg clip'>
        <NavigationMenu />
        <div className='pl-16 pt-16'>
          <div className='title' dangerouslySetInnerHTML={{ __html: customConfiguration.htmlSupportedTagline }}></div>
          <p className='font-semibold poppins'>We're making actions.</p>
        </div>
      </div><Feature
        title='Create Custom Actions'
        description='Create your own actions with the power of [...]Script.'
        image='/icon_raw.svg'
        style='left'
      />
      <Feature
        title='Unlimited Actions'
        description="Have as many actions as you want, we won't stop you."
        image='/icon_raw.svg'
        style='right'
      />
      <div className='poppins text-center py-10 pb-20'>
        <div className='font-bold text-5xl'>This project is under constuction.</div>
        <p className='text-xl font-medium text-light pt-3'>While we work on it, you can get updates in our <Link href='/support'>Discord server</Link></p>
      </div>
    </div>
  )
}

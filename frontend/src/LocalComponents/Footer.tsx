import '../Scss/Footer/Footer.css'
import { useState } from 'react';
import { FooterM } from './Footers/FooterM'
import { FooterD } from './Footers/FooterD'

const device = require('current-device').default

export const Footer = () => {
   const [currentDevice, setDevice] = useState(device.desktop())

   if (currentDevice) { return <FooterD /> }
   else { return <FooterM /> }

}


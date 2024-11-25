import '../Scss/Footer/Footer.css'
import { useState } from 'react';
import { FooterM } from './Footers/FooterM'
import { FooterD } from './Footers/FooterD'


export interface FooterProps{
   currentDevice: object;
}

export const Footer = ({currentDevice}: FooterProps) => {
   

   if (currentDevice) { return <FooterD /> }
   else { return <FooterM /> }

}


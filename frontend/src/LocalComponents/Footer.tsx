import '../Scss/Footer/Footer.css'
import { FooterM } from './Footers/FooterM'
import { FooterD } from './Footers/FooterD'

interface FooterProps{
   currentDevice: string;
}

export const Footer = ({currentDevice}: FooterProps) => {
   if (currentDevice == 'desktop') { return <FooterD/> }
   else { return <FooterM/> }

}


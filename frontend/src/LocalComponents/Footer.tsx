import '../Scss/Footer/Footer.css'
import { useState } from 'react';
import { FooterM } from './Footers/FooterM'
import { FooterD } from './Footers/FooterD'


export interface FooterProps{
   currentDevice: string;
	userCharacters: {
		id: number
		user_id: number
		name: string
		class: string
		race: string
		create_date: string
		level: number
		created_at: string
	}[]
}


export const Footer = ({currentDevice, userCharacters}: FooterProps) => {
   

   if (currentDevice) { return <FooterD userCharacters={userCharacters}/> }
   else { return <FooterM userCharacters={userCharacters}/> }

}


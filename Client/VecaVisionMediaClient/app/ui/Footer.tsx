import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
config.autoAddCss = false

import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Foot() {
    return (
        <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-evenly ml-10 bg-black">
            <div className=''>
                Follow Us
                <div className="space-x-4">
                    <a href='https://www.facebook.com/VecaMedia' target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faFacebook} size='xl' aria-hidden={false} aria-label='Veca Vision Facebook' className="hover:text-vvm-teal hover:cursor-pointer" /></a>
                    <a href='https://www.instagram.com/vecavisionmedia/' target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faInstagram} size='xl' aria-hidden={false} aria-label='Veca Vision Instagram' className="hover:text-vvm-lightblue hover:cursor-pointer" /></a>
                    <a href='https://www.linkedin.com/in/jaiden-veca-0a71b6292/' target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faLinkedin} size='xl' aria-hidden={false} aria-label='Veca Vision Linkedin' className="hover:text-vvm-blue hover:cursor-pointer" /></a>
                    <a href='https://www.youtube.com/channel/UC59xCCLBkobyj5wyEphwQmg' target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faYoutube} size='xl' aria-hidden={false} aria-label='Veca Vision Youtube' className="hover:text-vvm-pink hover:cursor-pointer" /></a>
                </div>
            </div>
            <div>
                Contact us
                <div className="font-extralight">(406)595-6899</div>
                <div className="font-extralight">veca.vision@gmail.com</div>
            </div>
        </div>
    )
}

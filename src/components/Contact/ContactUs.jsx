import Lottie from 'lottie-react'
import x from './Animation - 1717803350294.json'
import ContactForm from './Form'
import './contact.css'
export default function Contact(){
    return (
        <section className='fira-code'>
            <div className='form'>
                <ContactForm />
                <Lottie animationData={x} style={{ height: "auto", width: "500px" }}/>
            </div>
        </section>
    )
}
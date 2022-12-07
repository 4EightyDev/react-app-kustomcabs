import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
     return (
          <a role='button' type={props.type} href={props.href} className={`bg-white dark:bg-gray-darker/70 max-w-max border border-gray-light/20 shadow-lg hover:shadow-xl hover:scale-105 p-4 ring-1 sm:ring-0 ring-neutral-200/75 rounded-full flex-center transition-all duration-300 ${props.className}`}>
               <FontAwesomeIcon icon={props.icon} className='text-gold sm:mr-2' />
               <span className={`font-extrabold leading-tight text-gray-dark dark:text-white ${props.classText}`}>{props.text}</span>
          </a>
     )
}

export default Button
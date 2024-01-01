import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency'
import PersonIcon from '@mui/icons-material/Person'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import card from '../../../img/image 33.png'

function PremiumForm() {
    return (
        <div className='form'>
            <img src={card} alt="Card" />
            <ul className="right">
                <li>
                    <CreditCardIcon />
                    <p>
                        6262 7300 9485 9354
                    </p>
                </li>
                <li>
                    <PersonIcon />
                    <p>Ahmadjonov Akmal</p>
                </li>
                <li>
                    <ContactEmergencyIcon />
                    <a href="https://t.me/akmaljondev">Admin bilan bog'lanish</a>
                </li>
            </ul>
        </div>
    );
}

export default PremiumForm;
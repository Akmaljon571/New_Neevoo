import { useNavigate } from "react-router-dom";
import { GET } from "../../../utils/api/get";
import { useEffect, useState } from "react";
import useStart from "../../../hooks/useStart";
import { sum } from "../../../utils/func/sum";

function Card() {
    const { token } = useStart()
    const navigate = useNavigate()
    const [user, setUser] = useState();
    const [premium, setpremium] = useState([]);


    useEffect(() => {
        GET('/user/profile/', token)
            .then(re => re.json())
            .then(data => setUser(data))
        GET('/premium/')
            .then(re => re.json())
            .then(data => {
                setpremium(data.slice(0, 4).sort((a, b) => a.price - b.price))
            })
    }, [token]);

    const telegram = (el, id) => {
        const data = `
            Ma'lumotlar
            %0A
            %0Auser: ${user?.email}
            %0Adaraja: ${el.parentNode.children[0].textContent}
            %0Asumma: ${el.parentNode.children[1].textContent}
            %0Amuddat: ${el.parentNode.children[2].textContent.split('/')[1]}
        `
        const token = '5835618193:AAFvt7DXKWZyeo7EbZZMtcfEjL_Z63OOsC0'
        const chatId = '1772591765'

        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${data}`)
        navigate(`/premium/${id}`)
    }

    return (
        <ul className="payment_card">
            {premium.length ? premium.map(pre => (
                <li key={pre.id} className="payment_item">
                    <span>{pre.type_title
                    }</span>
                    <h2>{sum(pre.price)} so’m</h2>
                    <p>/ {pre.month} oyga</p>
                    <button onClick={(e) => !token ? navigate('/login') : telegram(e.target, pre.id)}>{token ? 'Sotib olish' : 'Sign in'}</button>
                </li>
            )) : null}
        </ul>
    );
}

export default Card;
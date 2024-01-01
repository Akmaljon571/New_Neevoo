import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../../utils/api/get";
import { sum } from "../../../utils/func/sum";

function PremiumTop() {
    const { id } = useParams()
    const [premium, setPremium] = useState({});

    useEffect(() => {
        GET('/premium/')
            .then(re => re.json())
            .then(data => {
                setPremium(data.find(e => e.id === Number(id)))
            })
    }, [id]);

    return (
        <>
            <h1>Payment</h1>
            <h3>Siz {premium?.title} tarifini sotib olishingiz uchun quyidagi keltirilgan karta raqamlariga {sum(premium?.price)} so'm karta orqali tolov qiling. Song telegram orqali @akmaljondev profiliga yani Adminga checkni yuboring. Song sizning tolovingiz tekshiriladi va kurslar {premium?.month} oy muddatga ochib beriladi</h3>
        </>
    );
}

export default PremiumTop;
import PremiumForm from "./helper/form";
import PremiumTop from "./helper/top";
import './premium.scss'

function Premium() {
    return (
        <div className="premium">
            <PremiumTop />
            <PremiumForm />
        </div>
    );
}

export default Premium;

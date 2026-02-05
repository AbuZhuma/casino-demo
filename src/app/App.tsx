import { ModalRoot } from "../shared/providers/ModalRoot/ModalRoot";
import { GeoLanguageSync } from "../shared/providers/GeoLanguageSync/GeoLanguageSync";
import Main from "../widgets/Main/Main";
import Footer from "../widgets/Footer/Footer";

export const App: React.FC = () => {
    return (
        <div>
            <Main/>
            <Footer/>
            <ModalRoot/>
            <GeoLanguageSync/>
        </div>
    );
};

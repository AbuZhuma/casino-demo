import { GeoSelector } from "../../features/geo";
import { GEO_CONFIG } from "../../shared/configs/geo";
import { useGeoStore } from "../../shared/store/geoStore/geo.store";
import { HeaderWrapper, Logo } from "./Header.styles"

const Header = () => {
    const { geo } = useGeoStore();
    const geoCfg = GEO_CONFIG[geo];
    return (
        <HeaderWrapper>
            <Logo src={geoCfg.assets.logoUrl} />
            <GeoSelector />
        </HeaderWrapper>
    )
}

export default Header
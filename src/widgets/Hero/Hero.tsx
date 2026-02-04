import { useTranslation } from "react-i18next";
import { HeroWrapper, HeroOverlay, HeroContent, TextBlock, GameImage } from "./Hero.styles"
import { GEO_CONFIG } from "../../shared/configs/geo";
import { Box, Button, Typography } from "@mui/material";
import { betGameImage } from "../../assets/images";
import { useGeoStore } from "../../shared/store/geoStore/geo.store";
import { useModalStore } from "../../shared/store/modalStore/modal.store";

const Hero = () => {
    const { t } = useTranslation();
    const openModal = useModalStore(s => s.openModal);
    const { geo } = useGeoStore();
    const geoCfg = GEO_CONFIG[geo];

    return (
        <HeroWrapper bg={geoCfg.assets.heroImageUrl}>
            <HeroOverlay />
            <HeroContent>
                <TextBlock>
                    <Typography variant="h3" fontWeight={800}>
                        {t("title")}
                    </Typography>

                    <Typography sx={{ mt: 1, opacity: 0.85 }}>
                        {t("subtitle")}
                    </Typography>

                    <Box mt={3}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => openModal("game")}
                        >
                            {t("openGame")}
                        </Button>
                    </Box>
                </TextBlock>

                <GameImage src={betGameImage} />
            </HeroContent>
        </HeroWrapper>
    )
}

export default Hero
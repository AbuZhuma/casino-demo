import { useTranslation } from "react-i18next";
import { useModalStore } from "../../shared/store/modalStore";

import {
  MainWrapper,
  Overlay,
  Content,
  Logo,
  GameImage,
  PlayButton,
} from "./Main.styles";

import {
  betGameImage,
  mainLogoImage,
  spaceImage,
} from "../../assets/images";


const Main = () => {
  const openModal = useModalStore((s) => s.openModal);
  const { t } = useTranslation("translation");
    
  return (
    <MainWrapper bg={spaceImage}>
      <Overlay />

      <Content>
        <Logo src={mainLogoImage} alt="logo" />

        <GameImage src={betGameImage} alt="game" />

        <PlayButton
          variant="contained"
          onClick={() => openModal("game")}
        >
          {t("openGame")}
        </PlayButton>
      </Content>
    </MainWrapper>
  );
};

export default Main;

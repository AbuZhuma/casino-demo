import { useTranslation } from "react-i18next";
import icons from "../../assets/icons";
import { betMenImage, mainLogoImage } from "../../assets/images";
import { LanguageSelector } from "../../features/langSelector/LanguageSelector";
import { SOCIAL_PLATFORMS } from "../../shared/const";

import {
  FooterWrapper,
  BetImage,
  DownloadCard,
  Logo,
  Title,
  Subtitle,
  InstallButton,
  DownloadIcon,
  InfoColumn,
  InfoRow,
  InfoIcon,
  InfoText,
  RightColumn,
  SocialBlock,
  SocialTitle,
  SocialRow,
  SocialIcon,
} from "./Footer.styles";

const Footer = () => {
  const { t } = useTranslation("translation");

  return (
    <FooterWrapper>
      <BetImage src={betMenImage} />

      <DownloadCard>
        <Logo src={mainLogoImage} />

        <Title>
          {t("downloadCasino")}
        </Title>

        <Subtitle>
          {t("playAnywhere")}
        </Subtitle>

        <InstallButton>
          <DownloadIcon src={icons.downloadIcon} />
          {t("installApp")}
        </InstallButton>
      </DownloadCard>

      <InfoColumn>
        <InfoRow>
          <InfoIcon src={icons.only18Icon} />
          <InfoText>{t("only18")}</InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIcon src={icons.licenseIcon} />
          <InfoText>
            {t("license")}
          </InfoText>
        </InfoRow>
      </InfoColumn>

      <RightColumn>
        <LanguageSelector />

        <SocialBlock>
          <SocialTitle>
            {t("socialMedia")}
          </SocialTitle>

          <SocialRow>
            {SOCIAL_PLATFORMS.map((el) => (
              <SocialIcon key={el.icon} src={el.icon} />
            ))}
          </SocialRow>
        </SocialBlock>
      </RightColumn>
    </FooterWrapper>
  );
};

export default Footer;

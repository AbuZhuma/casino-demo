import icons from "../../assets/icons";
import { betMenImage, mainLogoImage } from "../../assets/images";
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
  SocialRow,
  SocialIcon,
} from "./Footer.styles";


const Footer = () => {
  return (
    <FooterWrapper>

      <BetImage src={betMenImage} />

      <DownloadCard>
        <Logo src={mainLogoImage} />

        <Title>Download Casino</Title>
        <Subtitle>
          Play Min anywhere, anytime
        </Subtitle>

        <InstallButton>
          <DownloadIcon src={icons.downloadIcon} />
          Install App
        </InstallButton>
      </DownloadCard>


      <InfoColumn>

        <InfoRow>
          <InfoIcon src={icons.only18Icon} />
          <InfoText>Only 18+</InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIcon src={icons.licenseIcon} />
          <InfoText>
            Casino is certified by the Anjouan Gaming Authority
          </InfoText>
        </InfoRow>

        <SocialRow>
          {SOCIAL_PLATFORMS.map((el) => (
            <SocialIcon key={el.icon} src={el.icon} />
          ))}
        </SocialRow>

      </InfoColumn>

    </FooterWrapper>
  );    
};

export default Footer;

import { Stack } from "@mui/material";

import Footer from "../widgets/Footer/Footer";

import {
    PageContainer
} from "./App.styles";
import Header from "../widgets/Header/Header";
import Hero from "../widgets/Hero/Hero";
import { ModalRoot } from "../shared/providers/ModalRoot/ModalRoot";
import { GeoLanguageSync } from "../shared/providers/GeoLanguageSync/GeoLanguageSync";

export const App: React.FC = () => {
    return (
        <PageContainer maxWidth="lg">
            <Stack spacing={4}>
                <Header />
                <Hero/>
                <Footer />
            </Stack>
            <ModalRoot/>
            <GeoLanguageSync/>
        </PageContainer>
    );
};

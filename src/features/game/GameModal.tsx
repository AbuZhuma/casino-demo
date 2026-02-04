import React, { useState } from "react";
import { Dialog, IconButton, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { GameModalProps } from "./types";
import {
    ModalWrapper,
    Iframe,
    LoaderOverlay,
} from "./GameModal.styles";

export const GameModal: React.FC<GameModalProps> = ({
    open,
    onClose,
    url,
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <Dialog open={open} onClose={onClose} fullScreen>
            <ModalWrapper>
                <IconButton
                    onClick={onClose}
                    aria-label="close"
                    sx={{
                        position: "absolute",
                        zIndex: 10,
                        top: 12,
                        right: 12,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <LoaderOverlay visible={loading}>
                    <CircularProgress
                        size={64}
                        thickness={4}
                        sx={{ color: "primary.main" }}
                    />
                </LoaderOverlay>
                <Iframe
                    src={url}
                    title="game"
                    onLoad={() => setLoading(false)}
                />

            </ModalWrapper>
        </Dialog>
    );
};

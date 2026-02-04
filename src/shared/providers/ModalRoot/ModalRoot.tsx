import { useMemo } from "react";
import { useModalStore } from "../../store/modalStore/modal.store";
import { GAME_CONFIGS } from "../../const";
import { GameModal } from "../../../features/game";

export const ModalRoot = () => {
    const modal = useModalStore(s => s.modal);
    const close = useModalStore(s => s.closeModal);
    const gameUrl = useMemo(() => {
        const url = new URL(GAME_CONFIGS.url);
        return url.toString();
    }, [GAME_CONFIGS]);
    
    return (
        <>
            <GameModal url={gameUrl} open={modal === "game"} onClose={close} />
        </>
    );
};

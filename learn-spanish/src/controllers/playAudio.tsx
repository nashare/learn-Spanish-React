export const playAudio = (wordForPath: string): void => {
    const audioElement: HTMLAudioElement | null = document.querySelector(`#${wordForPath}_audio`);
    if (audioElement) {
        audioElement.play();
    }
};
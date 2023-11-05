export const playAudio = (wordForPath: string) => {
    const audioElement: HTMLAudioElement | null = document.querySelector(`#${wordForPath}_audio`);
    if (audioElement) {
        audioElement.play();
    }
};
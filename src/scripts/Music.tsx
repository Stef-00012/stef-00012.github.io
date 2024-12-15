import { musicCount, musics } from "@/data/music";
import type { Dispatch, SetStateAction } from "react";

export function handlePrevious(
	currentIndex: number,
	setCurrentSongIndex: Dispatch<SetStateAction<number>>,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
) {
	const newSongIndex = (currentIndex - 1 + musicCount) % musicCount;
	setCurrentSongIndex(newSongIndex);

	playSong(newSongIndex, setIsPlaying);
}

export function handlePlayPause(
	currentIndex: number,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
) {
	const audio = document.getElementById("audio") as Partial<HTMLAudioElement>;

	if (!audio.src) return playSong(currentIndex, setIsPlaying);

	if (audio.paused && audio.play) {
		setIsPlaying(true);
		return audio.play();
	}

	if (!audio.paused && audio.pause) {
		setIsPlaying(false);
		return audio.pause();
	}
}

export function handleNext(
	currentIndex: number,
	setCurrentSongIndex: Dispatch<SetStateAction<number>>,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
) {
	const newSongIndex = (currentIndex + 1) % musicCount;
	setCurrentSongIndex(newSongIndex);

	playSong(newSongIndex, setIsPlaying);
}

export function selectRandomSong(): number {
	return Math.floor(Math.random() * musicCount);
}

export function playSong(
	index: number,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
) {
	const audio = document.getElementById("audio") as Partial<HTMLAudioElement>;

	audio.src = `/music/${musics[index].filename}`;

	if (audio.play) {
		setIsPlaying(true);
		return audio.play();
	}
}

// soundManager.js
import { Audio } from 'expo-av';

let sound;

export async function playSound() {
    console.log('Loading Sound');
    const { sound: loadedSound } = await Audio.Sound.createAsync(
        require('./assets/cut-off-beg.mp3')
    );
    sound = loadedSound;
    console.log('Playing Sound');
    await sound.playAsync();
    await sound.setIsLoopingAsync(true);
}

export async function playJumpSound() {
    console.log('Loading Sound');
    const { sound: loadedSound } = await Audio.Sound.createAsync(
        require('./assets/jump.mp3')
    );
    sound = loadedSound;
    console.log('Playing Jump Sound');
    await sound.playAsync();
}

export async function stopSound() {
    if (!sound) return;
    console.log('Stopping Sound');
    await sound.stopAsync();
    await sound.unloadAsync();
    sound = null;
}

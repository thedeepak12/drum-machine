# Drum Machine

A React app that lets users play drum sounds by clicking buttons or pressing keys on the keyboard. The app features a grid of pads, each mapped to a unique sound and keyboard key. Users receive visual and textual feedback for each sound triggered.

## Features

* Play drum sounds using mouse clicks or keyboard keys.
* Displays the name of the sound being played.
* Real-time audio playback with no delay.

## Tech Stack

* **React**: Functional components and hooks for dynamic UI and state management.
* **Tailwind CSS**: Utility-first CSS framework for styling.
* **JavaScript (ES6+)**: Contains structured audio clip data.
* **HTML5 Audio API**: Used to play sound clips in response to user input.

## What I Learned

* **Global Keyboard Event Handling in React**: How to listen for and respond to keypress events across the app using `useEffect`, with proper cleanup to avoid memory leaks.
* **Audio Playback via HTML5**: Managing `<audio>` elements dynamically in React, including using `play()`, `currentTime`, and handling browser autoplay restrictions.
* **Cross-Origin Audio Issues**: Learned how to avoid playback failures by setting the `crossOrigin` attribute on `<audio>` elements when loading remote sounds.
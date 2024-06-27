import React from 'react';

const docsURL =
    'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API';

export function Footer() {
    return (
        <footer>
            <a href={docsURL}>Read the docs</a> (or ask{' '}
            <a target="_blank" href="https://chat.openai.com/">
                chatGPT
            </a>{' '}
            or{' '}
            <a target="_blank" href="https://gemini.google.com/">
                gemini
            </a>
            !)
            <hr />
            See also:{' '}
            <a href="https://openprocessing.org/sketch/1972312">p5.js example</a>
        </footer>
    );
}

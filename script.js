{/* <style>
    body {

        background-color: black;
    }
</style>

<div class="wrapper">
    <button class="btn">Click</button>
</div>
 
 */}

const scriptURL = document.createElement('script');
scriptURL.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js";
document.head.appendChild(scriptURL);
const conf_btn = document.querySelector('.btn');

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
    .wrapper {
        position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
        }
    .btn {
        font - size: 1.15rem;
    font-weight: 700;
    padding: .75em 1.5em;
    border: 0;
    border-radius: 100vmax;
    background: linear-gradient(90deg, #a8ff78, #78ffd6);
    cursor: pointer;
    transition: transform 150ms ease-in;
        }

    .btn:hover {
        transform: scale(1.1);
        }

    .wrapper canvas {
        position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
        }
    `)
document.adoptedStyleSheets = [sheet];

conf_btn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.wrapper');

    canvas.width = 600;
    canvas.height = 600;

    container.appendChild(canvas);

    const confetti_btn = confetti.create(canvas, {
        resize: true,
        useWorker: true
    })
    confetti_btn().then(() => canvas.remove())
});

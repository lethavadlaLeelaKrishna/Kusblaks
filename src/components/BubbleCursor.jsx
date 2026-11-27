import { useEffect } from 'react';

/**
 * BubbleCursor — spawns small "classic" bubbles that rise and pop
 * wherever the cursor moves. Bubbles are plain DOM nodes animated
 * with CSS (see `.classic-bubble` in index.css) so it stays cheap.
 */
const BubbleCursor = () => {
  useEffect(() => {
    var reduceMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return;

    var lastX = 0;
    var lastY = 0;
    var started = false;
    var travelled = 0;
    var STEP = 34; // spawn a bubble roughly every 34px of movement
    var live = [];

    function removeBubble(bubble) {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
      var index = live.indexOf(bubble);
      if (index > -1) live.splice(index, 1);
    }

    function spawn(x, y) {
      var bubble = document.createElement('span');
      var size = 8 + Math.random() * 24;

      bubble.className = 'classic-bubble';
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.left = x - size / 2 + 'px';
      bubble.style.top = y - size / 2 + 'px';
      bubble.style.setProperty('--drift', (Math.random() * 64 - 32).toFixed(1) + 'px');
      bubble.style.setProperty('--dur', (0.9 + Math.random() * 0.9).toFixed(2) + 's');

      document.body.appendChild(bubble);
      live.push(bubble);

      bubble.addEventListener('animationend', function () {
        removeBubble(bubble);
      });
    }

    function onMove(event) {
      var x = event.clientX;
      var y = event.clientY;

      if (!started) {
        started = true;
        lastX = x;
        lastY = y;
        return;
      }

      var dx = x - lastX;
      var dy = y - lastY;
      travelled += Math.sqrt(dx * dx + dy * dy);

      if (travelled >= STEP) {
        travelled = 0;
        spawn(x, y);
      }

      lastX = x;
      lastY = y;
    }

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onMove);

    return function () {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      for (var i = live.length - 1; i >= 0; i--) {
        removeBubble(live[i]);
      }
      live = [];
    };
  }, []);

  return null;
};

export default BubbleCursor;

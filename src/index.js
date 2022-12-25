const SNOWFLAKE_COUNT = 50;
const MIN_DURATION = 10;

const body = document.querySelector('body');

function makeSnowflake() {
  const snowflake = document.createElement('div');
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  snowflake.addEventListener('animationend', () => {
    body.removeChild(snowflake);
    body.appendChild(makeSnowflake());
  });

  return snowflake;
}

const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map(makeSnowflake);

snowflakes.forEach((snowflake, index) => {
  setTimeout(() => {
    body.appendChild(snowflake);
  }, Math.random() * 500 * index);
});

import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const heading = document.createElement('h3');
  [...block.children].forEach((row) => {
    heading.append(row.firstElementChild);
  });
  block.textContent = '';
  block.append(heading);
}

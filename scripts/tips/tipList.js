import { getTips } from "../database.js";

export const tipList = () => {
  // Invoke the function that you imported from the database module
  // const fishes = getFish();
  const tips = getTips();
  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishtip-list">';

  // Create HTML representations of each fish here
  for (const tip of tips) {
    htmlString += `<section class="fishtips-card">
            <div class="tip__title"><h3>${tip.title}</h3></div>
            <div class="tip__body"><p>${tip.body}</p></div>
        </section>
        `;
  }

  htmlString += `</article>`;

  return htmlString;
};

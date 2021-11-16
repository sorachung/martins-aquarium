import { getQuotes } from "../database.js";


export const quotesList = () => {
  // Invoke the function that you imported from the database module
  
  const quotes = getQuotes();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="content__quotes-list">';

  // Create HTML representations of each fish here
    for (const quote of quotes) {
      htmlString += `<section class="quotes-card">
            <div class="quotes__text">${quote.text}</div>
            <div class="quotes__source">${quote.source}</div>
        </section>
        `;
    }

  htmlString += `</article>`;

  return htmlString;
};





// <!-- <article class="content__quote-list">
//           <section class="quote-card">
//             <blockquote>"this is a quote" - Me</blockquote>
//           </section>
//           <section class="quote-card">
//             <blockquote>"this is a quote" - Me</blockquote>
//           </section>
//           <section class="quote-card">
//             <blockquote>"this is a quote" - Me</blockquote>
//           </section>
//           <section class="quote-card">
//             <blockquote>"this is a quote" - Me</blockquote>
//           </section>
//         </article> -->
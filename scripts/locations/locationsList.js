import { getLocations } from "../database.js";


export const locationsList = () => {
  // Invoke the function that you imported from the database module
  
  const locations = getLocations();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="content__locations-list">';

  // Create HTML representations of each fish here
    for (const location of locations) {
      htmlString += `<section class="locations-card">
            <div class="locations__name">${location.name}</div>
            <div class="locations__date-visited">${location.dateVisited}</div>
            <div class="locations__location">${location.location}</div>
            <div class="locations__blurb">${location.blurb}</div>
        </section>
        `;
    }

  htmlString += `</article>`;

  return htmlString;
};
import { getFish } from './fish/database.js';
import { FishList } from './fish/FishList.js';


// const allFish = getFish();

// for (const fish of allFish) {
//     console.log(fish);
// }

const parentHTMLElement = document.querySelector(".content");
parentHTMLElement.innerHTML = FishList();


/* <article class="content__fish-list">
          <section class="fish-card">
            <h4>Nickname</h4>
            <img src="images/goldfish.jpg" alt="goldfish" />
            <ul>
              <li>Goldfish</li>
              <li>3 in</li>
              <li>harvested near here</li>
              <li>food</li>
            </ul>
          </section>
          <section class="fish-card">
            <h4>Nickname</h4>
            <ul>
              <li>IMAGE</li>
              <li>species</li>
              <li>length</li>
              <li>harvest location</li>
              <li>diet</li>
            </ul>
          </section>
          <section class="fish-card">
            <h4>Nickname</h4>
            <ul>
              <li>IMAGE</li>
              <li>species</li>
              <li>length</li>
              <li>harvest location</li>
              <li>diet</li>
            </ul>
          </section>
          <section class="fish-card">
            <h4>Nickname</h4>
            <ul>
              <li>IMAGE</li>
              <li>species</li>
              <li>length</li>
              <li>harvest location</li>
              <li>diet</li>
            </ul>
          </section>
        </article> */

import BottleLineup from 'src/assets/images/bottle-lineup.png'

export default class Info {
  constructor() {}

  render() {
    return `
      <section class="info">
        <div class="info-right">
          <div class="info-texts">
            <div class="info-text">
              <h2 class="info-title">WHERE IS MY HOT SAUCE?</h2>
              <p class="info-description">Due to overwhelming demand we blasted through our first batch of hot sauce in no time. We honestly thought this would last us a little while at least, but we burned through it in a matter of hours. You all really love Hentai and Hot Sauce!!!</p>
            </div>

            <div class="info-text">
              <h2 class="info-title">NEW INGREDIENTS</h2>
              <p class="info-description">
                The first batch of hot sauce used a specific kind of fermentation process which would take a very long time to go through again. The original plan was to only release 1 batch of this premium hot sauce, but the demand was so high we have decided to start permanent production and fulfillment.

                This means we have also had to change the receipt slightly to accommodate faster production and fulfillment. The new recipe contains the below ingredients:
              </p>

              <blockquote class="info-quote"> 
                Selected Hot Peppers, Apple Juice*, Apple Sauce*, Cider vinegar*, Carrots, Onions*, Maple Syrup*, Tomato Paste*, Garlic, Salt, Spices, Xanthan Gum (GMO Free).  *Organic Ingredients
              </blockquote>

              <h3 class="info-headline">Don't worry, this new recipe will still make you say "Fuck me, it's so hot!"</h3>
            </div>
          </div>
        </div>

        <div class="info-left">
          <div class="info-texts">
            <div class="info-text">
              <img src="${BottleLineup}" alt="Bottle Lineup"/>
              <span class="info-restocking">RESTOCKING...</span>
              <p class="info-contact">If you have any questions please reach out to <span class="info-email">hotsauce@nutaku.net</span></p>
            </div>
          </div>
        </div>
      </section>
      <div class="info-text info-text--black">
        <h2 class="info-title">Production timeline</h2>
        <p class="info-description">We're super excited to get this 100% Canadian made lewd sauce in as many hands, and mouths, as possible, and we know you want it to. So in order to keep everyone as informed as possible please find the most up-to-date production schedule below.</p>
      </div>
    `
  }
}

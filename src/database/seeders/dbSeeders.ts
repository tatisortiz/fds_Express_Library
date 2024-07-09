import { authorSeeder } from "./authorSeeder";
import { bookSeeders } from "./bookSeeders";
import { FavouriteSeeders } from "./favouriteSeeders";
import { userSeeder } from "./userSeeder";


(async () => {

    console.log('starting seeders...');
    await authorSeeder();
    await userSeeder ();
    await bookSeeders ();
    await FavouriteSeeders();

})()



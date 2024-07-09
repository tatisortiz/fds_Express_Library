import { AppDataSource } from "../db";
import { Favourite } from "../models/Favourite";
import { Users } from "../models/User";

export const FavouriteSeeders = async () =>{
    try {
        await AppDataSource.initialize()

        const favouriteUser= new Users();

        favouriteUser.id= 1;
        //favouriteUser.="";
       /// favouriteUser.= "";
       await  favouriteUser.save()


    } catch (error: any) {
        console.log('================');
        console.log('ERROR AUTHO SEEDER', error.message);

        console.log('=================');
    } finally {
        await AppDataSource.destroy();
    }
}


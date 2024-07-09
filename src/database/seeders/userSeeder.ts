import bcrypt from "bcrypt"
import { newUser } from "../../controllers/users.controllers";
import { AppDataSource } from "../db";
import { Users } from "../models/User"; 


export const userSeeder = async () => {
    try {
        await AppDataSource.initialize()

        const adminUser= new Users();

        adminUser.id= 1;
        adminUser.name="admin";
        adminUser.email= "admin@admin.com";
        adminUser.password= bcrypt.hashSync("123456789",10);
        adminUser.role= "admin";
       await  adminUser.save()


      const superAdminUser= new Users();

      superAdminUser.id= 2;
      superAdminUser.name="super_admin";
      superAdminUser.email= "superadmin@admin.com";
      superAdminUser.password= bcrypt.hashSync("123456789",10);
      superAdminUser.role= "super_admin";
     await  superAdminUser.save()
    
    const User= new Users();

        User.id= 3;
        User.name="user";
        User.email= "user@user.com";
        User.password= bcrypt.hashSync("123456789",10);
        User.role= "user";
      await  User.save()
 
    

        

    } catch (error: any) {
        console.log('================');
        console.log('ERROR AUTHO SEEDER', error.message);

        console.log('=================');
    } finally {
        await AppDataSource.destroy();
    }
}
// Define a function that can answer the role of a user.
// A user can be on following roles:
// admin:with all access
// subadmin:with access to create/delete courses
// testprep:with acess  to create/delete tests
// user:consume all content
// other:trial user.


// Input:getUserRole(name,role)





function getUserRole(name,role){


 switch(role)
 {
     case "admin":
     return `${name} is admin with all access`
     break;

 
 case "subAdmin":

 
     return `${name} is  with all access to create and delete tests`
     break;


     case "testprep":

 
     return `${name} is sub admin with all access to create and delete course`
     break;

     case "user":

 
        return `${name} is  a user to consume content`
        break;

       default:

 
            return `${name} is a trial  user`
            break;
 }
}
console.log( getUserRole("Puja","admin"));   

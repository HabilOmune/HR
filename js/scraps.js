key = AIzaSyBzdHKzltuWuZxatxiI9w5mYeoRzuZdrEw;
const  messaging = firebase.messaging();
messaging.requestPermission()
.then(function(){
  console.log("Permission Granted");
  return messaging.getToken()
  .then(function(token){
    console.log(token)
  })
  .catch(function(err){
    console.log(err)
  });
});

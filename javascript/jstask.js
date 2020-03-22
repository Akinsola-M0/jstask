var username ='Akinsola Moses';
var courses =['HTML','CSS','JAVASCRIPT','JAVA'];

window.alert(username);

document.write(username+'<br>');
document.write(courses+'<br>');

if (courses.length%2 == 0) {
  for (var i = 0; i <= 200; i++) {
    if (i%2==0) {
      document.write(i+'<br>');
    }
  }
}else {
  for (var i = 0; i <= 200; i++) {
    if (i%2==1) {
      document.write(i);
    }
  }
}


// Autoejecutable Clasica

(function (){
 console.log("Mi primer autoejecutable anonimo")
})();



(function (d,w,c){
    console.log(d);
    c.log(w);
    c.log("esto es un console.log")
    console.log("Mi primer autoejecutable")
   })(document,window,console);


//La Crockford (Javascript The Good parts)
((function(){
 console.log("Version Crockford")
})());

//Version Unaria
+function(){
    console.log("Version Unaria")
}()

// Facebook
!function(){
    console.log("version facebook")
}()
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span class="typewriter">El éxito de cada mujer debe ser una inspiración para las demás. -Serena Williams </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
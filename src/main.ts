import './style.css'
import p5 from "p5";

new p5((s: p5) => {
  window.p5 = s;

  s.setup = () => {
    s.createCanvas(600, 600);
    s.background(0);

  }

  s.draw = () => {
    s.circle(s.width / 2, s.height / 2, 200);
  }
});

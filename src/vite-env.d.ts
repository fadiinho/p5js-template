/// <reference types="vite/client" />
import p5 from "p5";

declare global {
    interface Window {
      p5: p5;
    }
}

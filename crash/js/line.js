import game from "./game.js";
import foguete from "./foguete.js";

function draw_line(x1, y1, x2, y2) {
    svg_line.setAttribute("x1", x1);
    svg_line.setAttribute("y1", y1);
    svg_line.setAttribute("x2", x2);
    svg_line.setAttribute("y2", y2);
}

function line(n) {
    n = n >= 80 ? 80 : n;
    let x = game.screen.width-150
    let y = game.screen.height - (game.screen.height*n/100)
    
    draw_line(x, game.screen.height, x, y) ;

    foguete.setPos(x,y)
}

export default line
# Pixelizer, a pixel art web application 

Pixelizer is a simple web - application project , inspired by the Etch-a-Sketch assingment from The Odin Project. This project was created to showcase DOM manipulation skills using JavaScript and HTML + CSS handling skills.

## How it works

Everytime the page is loaded the user is greeded with a 16x16 grid. The grid is created by the gridMaker function on the spot. The function creates the Columns of the CSS-Grid , then creates the boxes with their attributes and then appends the boxes onto the CSS-Grid. Next , for each newly created box the function creates the event-listeners needed so the user can paint onto the grid. Given the O(n) complexity of the function , I've decided to limit the grid size in the [10,99] range.

## Usage

Set Grid Size button : Takes the value of the slider and creates a new n*n grid.

color button : opens a color wheel so the user can change colors.

Reset Board button : resets the board to the original 16x16 state, alerting the user before doing so.


Art was contributed by wallpapertip.com. In the future I will try to replace it with my own original art.
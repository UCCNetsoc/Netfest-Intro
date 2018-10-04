from graphics import *
canvas=GraphWin("potato", 500, 500)
w=canvas.getWidth()
h=canvas.getHeight()
potato=Oval(Point(80,150),
            Point(420,350)
            )
potato.setFill('goldenrod')
potato.draw(canvas)    

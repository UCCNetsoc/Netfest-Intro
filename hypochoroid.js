// <canvas width="500" heigth="500"></canvas>
//<script>
(function () {

    var ctx;
    var canvas;
    var width;
    var height;

    var R = 100;
    var r = 30;
    var d = 25;
    var startColour = 0;
    var increment = 46603.375
    var xindex = 0;
    var outx = [];
    var outy = [];

    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        ctx.fillStyle = 'black'
        ctx.fillRect(-width*0.5,-height*0.5, width, height)
        ctx.save()
        ctx.translate(width / 2, height / 2)
        ctx.beginPath()
        calcpoints(R, r)
        drawcircle(r)
        drawcircle(R)
        window.setInterval(draw, 50)
    };

    function calcpoints(R, r) {
        outx = []
        outy = []
        for (var i = 0; i < 360; i++) {
            xcord = ((R - r) * Math.cos(i)) + (d * Math.cos(((R - r) / r) * i))
            ycord = ((R - r) * Math.sin(i)) - (d * Math.sin(((R - r) / r) * i))

            outx.push(xcord)
            outy.push(ycord)
        };
    };

    function drawcircle(radius) {
        ctx.strokeStyle = '#ff00cc'
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function draw() {
        if (xindex > 360) {
            // ctx.fillStyle = 'white'
            // ctx.fillRect(-width*0.5,-height*0.5, width, height)
            // R += 10
            // r += 10
            // calcpoints(R, r)
            // d = getrand(10, 100)
            // drawcircle(r)
            // drawcircle(R)
            xindex = 0
        }
        // debugger
        let outColour = '#' + Math.floor(startColour).toString(16)
        ctx.strokeStyle = outColour
        startColour = (startColour + increment) % 16777215
        console.log(outColour)
        console.log(startColour)
        ctx.beginPath()
        ctx.moveTo(outx[xindex], outy[xindex])
        ctx.lineTo(outx[xindex + 1], outy[xindex + 1])
        ctx.stroke();
        xindex += 2
    }
    function getrand(minNum, maxNum) {
        return Math.floor((Math.random() * maxNum) + minNum);

    }
})();   
</script>

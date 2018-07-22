
//Facktory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };

}

//const circle = createCircle(1);
//circle.draw();

//Constructor function
function Circle(radius){
    // .log('this', this);
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function(){
        //console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid locaton.');
            
            defaultLocation = value;


        }
    });
}


const circle = new Circle(10);
circle.defaultLocation = (2,1);
circle.draw();


// const another = new Circle(1);

// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function(){
//     console.log('draw')
// }
// `);

// const circle = new Circle1(32);
 
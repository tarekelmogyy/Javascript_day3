
let pi = 3.14;
let b , h , a , l , w , r , area;
let shape = prompt("Enter the name of shape");

switch(shape){
    case "rectangle":
        l = Number(prompt("Enter the length of the rectangle"));
        w = Number(prompt("Enter the width of the rectangle"));        //calculating the area of rectangle
        area = l * w;
        alert(`The area of the rectangle is ${area}`);
        break;
    case "circle":
        r = Number(prompt("Enter the radius of circle"));
        area = pi * r * r;                                            //calculating the area of circle
        alert(`The area of the circle is ${area}`);
        break;
    case "square":
        a = Number(prompt("Enter the length of side of square"));
        area = a * a;                                                //calculating the area of square
        alert(`The area of the square is ${area}`);
        break;
    case "triangle":
        b = Number(prompt("Enter the base of triangle"));
        h = Number(prompt("Enter the height of triangle"));          //calculating the area of triangle
        area = 0.5 * b * h;
        alert(`The area of the triangle is ${area}`);
        break;
    case "parallelogram":
        b = Number(prompt("Enter the base of parallelogram"));
        h = Number(prompt("Enter the height of parallelogram"));    //calculating the area of parallelogram
        area = b * h;
        alert(`The area of parallelogram is ${area}`);
        break;
    case "trapezium":
        a = Number(prompt("Enter the first side of trapezium"));
        b = Number(prompt("Enter the second side of trapezium"));  //calculating the area of trapezium
        h = Number(prompt("Enter the height of trapezium"));
        area = 0.5 * (a+b) * h;
        alert(`The area of trapezium is ${area}`);
        break;
    case "ellipse":
        a = Number(prompt("Enter the minor axix of ellipse"));
        b = Number(prompt("Enter the major axix of ellipse"));   //calculating the area of ellipse
        area = 3.14 * a * b;
        alert(`The area of trapezium is ${area}`);
        break;
    default:
        alert("Invalid shape");
}
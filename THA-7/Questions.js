// Q1
// Write a JavaScript program to list the properties of a JavaScript object.
var superman = {
  name: 'Clar klent',
  power: 'Super speed',
  symbol: 'Capitol S on chest',
  city: 'New york',
};

console.log(Object.keys(superman));

// Q2
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
console.log(student.rollno);
delete student.rollno;
console.log(student);

// Q3
// Write a JavaScript program to get the length of a JavaScript object.
var student = { name: 'David Rayy', sclass: 'VI', rollno: 12 };
count = 0;
for (i in student) {
  count += 1;
}
console.log(count);

// Q4
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.';
  if (library[i].readingStatus) {
    console.log('Already read ' + book);
  } else {
    console.log('You still need to read ' + book);
  }
}

// Q5

// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

// Q6
// Write a JavaScript program to sort an array of JavaScript objects.

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];

function compare_to_sort(x, y) {
  if (x.title < y.title) return -1;
  if (x.title > y.title) return 1;
  return 0;
}

console.log(library.sort(compare_to_sort));

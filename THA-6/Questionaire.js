// Q1
var e1 = [1, 2, 3, 4];
c = check(e1);
console.log(c);

function check(a) {
  if (Array.isArray(a)) {
    return true;
  }

  return false;
}

// Q2

test = [1, 2, 3, 4, 5, 6];
var test1 = test.slice(0);
console.log(test.reverse());

console.log(test1);

// Q3
var e1 = [1, 2, 3, 4];
c = first(e1, -4);
console.log(c);

function first(a) {
  return a[0];
}

// Q4
mycolor = ['Red', 'Green', 'White', 'Black'];
console.log(mycolor.join(','));
console.log(mycolor.join('+'));

// Q5

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + ' ( ' + mf + ' times ) ');

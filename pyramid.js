let row = [];
function pyramid() {
  for (let i = 1; i <= 5; i++) {
    row.push("#");
    console.log(row.join(' '));
  }
}

pyramid()
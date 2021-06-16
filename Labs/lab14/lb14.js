function cartTotal() {
  var items = ["Pineappples", "Avocados", "Bananas", "Apples", "Starwberries"];
  var numItems = new Array();
  for (i=0; i<items.length; i++) {
      numItems.push(prompt("How Many " +items[i] +" do you want?"));
      console.log(numItems);
  }
  var $items= [6, 3, 2, 1, 0.5];

  var itemTotal=new Array();
  for (i=0; i<items.length; i++) {
      itemTotal.push ($items[i]*parseInt(numItems[i]));
      console.log(itemTotal);
  }

  var total = 0;
  for (j=0; j<itemTotal.length; j++) {
      total += itemTotal[j];
      console.log(total);
  }
  document.getElementById("total").innerHTML = ("Here is the total amount of all your items: " + "$" + total + ".");
}
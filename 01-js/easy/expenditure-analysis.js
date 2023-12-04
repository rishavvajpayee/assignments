/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryObj = {};
  let final = [];
  for (item of transactions) {
    categoryObj[item.category] =
      (categoryObj[item.category] ? parseInt(categoryObj[item.category]) : 0) +
      parseInt(item.price);
  }
  for (const element in categoryObj) {
    let result = {};
    result["category"] = element;
    result["totalSpent"] = categoryObj[element];
    final.push(result);
  }
  return final;
}

module.exports = calculateTotalSpentByCategory;

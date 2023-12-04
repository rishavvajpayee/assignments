/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryObj = {};
  for (itm of transactions) {
    categoryObj[itm.category] =
      (categoryObj[itm.category] ? parseInt(categoryObj[itm.category]) : 0) + parseInt(itm.price)
  }
  let final = [];
  for (const ele in categoryObj) {
    let res = {};
    res["category"] = ele
    res["totalSpent"] = categoryObj[ele]
    final.push(res);
  }
  return final
}

module.exports = calculateTotalSpentByCategory;

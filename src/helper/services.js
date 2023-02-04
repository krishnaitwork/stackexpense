

export const appendToStorage = (name, data) => {
    var oldItems = JSON.parse(localStorage.getItem(name)) || [];
  
    if (data.length > 0) {
      data.forEach((x) => oldItems.push(x));
    } else {
      oldItems.push(data);
    }
  
    localStorage.setItem(name, JSON.stringify(oldItems));
  };

  export const localStorage_Enum = Object.freeze({
    Expenses: "Expenses",
    TotalIncome: "Income",
  });
/*Declaration:I declare that this test is my own work in accordance with Seneca Academic Policy.
 No part of thisassignment has been copied manually or electronically from anybody else or distributed to otherstudents. 
 Name: Kabir Narula Student ID: 127962223 */


// These are the array of 4 customers
const customers = [
    {
      name: "Faris Burch",
      item: "bread",
      num: 2,
      price: 2.99,
      taxable: false,
      getTotal() {
        if (this.taxable) {
          return this.num * this.price * 1.13; 
        } else {
          return this.num * this.price;
        }
      },
      printInfo() {
        console.log(
          `${this.name} purchased ${this.num} ${this.item}(s) at the price of $${this.price.toFixed(
            2
          )}.`
        );
        console.log(`\n${this.name} spent $${this.getTotal().toFixed(2)} in total.`);
      }
    },
    {
      name: "Julius Cross",
      item: "shirt",
      num: 1,
      price: 30.95,
      taxable: true,
      getTotal() {
        if (this.taxable) {
          return this.num * this.price * 1.13; // 13% tax
        } else {
          return this.num * this.price;
        }
      },
      printInfo() {
        console.log(
          `\n\n${this.name} purchased ${this.num} ${this.item}(s) at the price of $${this.price.toFixed(
            2
          )}.`
        );
        console.log(`\n${this.name} spent $${this.getTotal().toFixed(2)} in total.`);
      }
    },
    {
      name: "Eloise Bonner",
      item: "pen",
      num: 10,
      price: 2.5,
      taxable: true,
      getTotal() {
        if (this.taxable) {
          return this.num * this.price * 1.13; // 13% tax
        } else {
          return this.num * this.price;
        }
      },
      printInfo() {
        console.log(
          `\n\n${this.name} purchased ${this.num} ${this.item}(s) at the price of $${this.price.toFixed(
            2
          )}.`
        );
        console.log(`\n${this.name} spent $${this.getTotal().toFixed(2)} in total.`);
      }
    },
    {
      name: "Roy Macias",
      item: "egg",
      num: 2,
      price: 2.99,
      taxable: false,
      getTotal() {
        if (this.taxable) {
          return this.num * this.price * 1.13; // 13% tax
        } else {
          return this.num * this.price;
        }
      },
      printInfo() {
        console.log(
          `\n\n${this.name} purchased ${this.num} ${this.item}(s) at the price of $${this.price.toFixed(
            2
          )}.`
        );
        console.log(`\n${this.name} spent $${this.getTotal().toFixed(2)} in total.`);
      }
    }
  ];
  
  // Task 2: Display header and each customer's information
  console.log("\n==== Kabir's Store ====\n"); // Replace "Sunny" with your name
  
  for (const customer of customers) {
    customer.printInfo();
  }
  

  let totalSales = 0;
  for (const customer of customers) {
    totalSales += customer.getTotal();
  }
  const storeProfit = totalSales * 0.3; // 30% profit
  
  console.log(`\n\nStore sales: $${totalSales.toFixed(2)}.`);
  console.log(`\nStore Profit: $${storeProfit.toFixed(2)}.\n`);
  
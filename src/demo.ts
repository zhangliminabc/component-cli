// const promiseFun = () => {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("promise执行完毕");
//     }, 200);
//   });
// };

// const demo = async () => {
//   const data = await promiseFun();
//   console.log(data);
// };

// demo();

class Child {
  childFn() {
    console.log("这是子类");
  }
}

class Parent extends Child {
  constructor() {
    super();
  }
  parentFn() {
    console.log("parent");
  }
}

const p = new Parent();
console.log(p.childFn());

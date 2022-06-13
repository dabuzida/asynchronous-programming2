async function run() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 resolved ok!"), 1000);
  });
  console.log(p1);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 resolved ok!"), 1000);
  });
  console.log(p2);
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 resolved ok!"), 1000);
  });
  console.log(p3);

  let r1 = await p1;
  console.log(r1);
  let r2 = await p2;
  console.log(r2);
  let r3 = await p3;
  console.log(r3);
}
run();

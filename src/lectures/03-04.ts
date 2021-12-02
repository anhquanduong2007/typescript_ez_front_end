enum Status {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

const stats1: Status = Status.PENDING;
const stats2: Status = 1;
const stats3: Status = 10;
// -> chúng ta có thể gán cho nó bất cứ 1 giá trị số nào chứ không nhất thiết là phải là giá trị có trong enum này
// mà nó không báo lỗi.
console.log(stats1);
console.log(stats2);
console.log(stats3);
console.log(Status[0]); // 'PENDING'
console.log(Status['DONE']); // 2

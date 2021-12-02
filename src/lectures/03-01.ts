const count = 1; // const count: 1;
const channelName = 'Hello world'; // const channelName: "Hello world";
const isActive = false; // const isActive: false

let count_2 = 1; // let count: number
let channelName_2 = 'Hello world'; // let channelName: string
let isActive_2 = false; // let isActive: boolean

// OBJECT
const student = {
  id: 1,
  name: 'Hello world',
};

const student_2 = {
  id: 1,
  name: 'Hello world',
} as const;

// ARRAY
const numberList = [1, 2, 3];

const numberListAsConst = [1, 2, 3] as const;

// Type Assertion
function getStatusName(state: 'active') {
  console.log(state);
}
// let s = 'active'; // let s: string
// getStatusName(s);
/**
 * tring nó là 1 tập dữ liệu cha còn cái th 'active' nó chỉ là 1 tập dữ liệu con trong cái th string kia thôi cho
 * nên khi bạn gọi hàm truyền cái string kia vào nó sẽ báo lỗi
 */
// -> Fix cách 1
const s: 'active' = 'active';
getStatusName(s);
// -> Fix cách 2
let s_2 = 'active';
getStatusName(s_2 as 'active');
// -> không phải lúc nào mình dùng cái as này cũng được nhé nó sẽ có cái rule đó là, cái thằng bên phải và bên trái as
// nó phải có 1 mối quan hệ cha con còn nếu như ví dụ number as string ->> sai lòi lun

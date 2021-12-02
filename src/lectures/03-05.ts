export {};
interface List<T> {
  /**
   * Đối với Generics nó sẽ nhận thêm tham số cho kiểu dữ liệu
   */
  length: number;
  // Tại thời điểm mình định nghĩa thì mình biết thằng T là gì không :3, không!! Chúng ta chỉ nói tổng quát
  // thôi đây là 1 cái list, cái list có kiểu dữ liệu là T, cái T lúc mình xử dụng thì mình mới biết chứ còn
  // tại cái thời điểm mình định nghĩa thì chúng ta không biết nhưng chúng ta biết được là dù nó là kiểu dữ
  // liệu gì đi chăng nữa thì nó cũng có cái thuộc tính hoặc method mà chúng ta đang định nghĩa
  [index: number]: T;
  /**
   * nếu như chỗ này mình chuyển sang string [index: string]: T thì sẽ có 1 chút vấn đề, lý do là gì? nếu chúng ta để là number thì nó sẽ hiểu là
   * chúng ta đang cho phép truy xuất cái dạng đó chính là con số theo chỉ số 0,1,2,3,.. nhưng nếu như chúng ta để là string thì tức là cá cái interface
   * mày, nó là 1 cái object có nhiều cái key mà mỗi cái key đó có kiểu dữ liệu là dạng string thì nếu vô tình mình đặt thế này nó sẽ hiểu tổng quát
   * chung cho tất cả các key trong object này có kiểu dữ liệu là T như vậy nếu chúng ta để string như này thì chúng ta phải định nghĩa cái kiểu tổng
   * quát tức là mỗi phần tử, ví dụ ở đây có kiểu number thì phải cover cả nó luôn [index: string] : T | number thì nó mới ok.
   */
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['hello', 'word'];

interface Student {
  id: number;
  name: string;
}
const studentList: List<Student> = [{ id: 1, name: 'bob' }];

// Keyof operator
interface Student_2 {
  id: number;
  name: string;
}

type StudentKey = keyof Student_2;
// -> nó sẽ bằng với type StudentKey = "id" | "name"
const keys: StudentKey = 'id';
console.log(keys);

type MappedTypes = {
  [key in keyof Student_2]: boolean;
};
const newStudent: MappedTypes = {
  id: true,
  name: false,
};

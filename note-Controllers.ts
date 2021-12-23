// có thể define DTO bằng cách sử dụng TS interface hoặc các class
// Nên sử dụng class hơn vì chúng giữ nguyên các thực thể khi
// được biên dịch còn interfaces thì không. Trong quá trình chuyển
// đổi TS interface bị xóa, và Nest không thể tham chiếu đến
// chúng trong runtime. Đó là điều quan trọng với nhiều tính năng
// như Pipes cho phép bổ sung các khả năng khi chúng có truy
// cập tới metatype các biến trong lúc runtime

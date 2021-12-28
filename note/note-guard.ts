/* 
    Guards
    - một guard là một class được đánh dấu với @Injectable() decorator.
    - Implement với CanActive interface.
    - Xác định một request sẽ được handle bởi route hay không, tùy thuộc
    vào điều kiện cụ thể như (sự cho phép, roles, ACLs, ...) trong thời
    gian chạy.
    - Điều đó thường được gọi là authorization.
    - Authorization (cousins, authentication) thường được handled bởi 
    middleware trong các ứng dụng Express thông thường.
    - Guards được thực thi sau mỗi middleware nhưng trước bất kỳ các
    interceptor hay pipe nào.

*/

/* 
    Authorization guard
    - mỗi guard cần triển khai canActive function.
    - canActive() return boolean để cho phép hoặc từ chối request hiện tại
    - 
*/
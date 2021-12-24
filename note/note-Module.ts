/* 
    MODULES
    @Module decorator cung cấp metadata để Nest lấy sử dụng cho việc tổ chức cấu trúc
    ứng dụng

    các modules mặc định là các singleton, bạn có thể share các instance giống nhau 
    của bất kỳ provider nào giữa các modules

    Mọi module đều tự động là một shared module. Sau khi được khởi tạo nó có thể được
    tái sử dụng với bất kỳ module nào. Hãy tưởng tượng rằng chúng ta muốn chia sẻ
    instance của CatsService giữa các modules khác. Để làm điều đó, chúng ta cần export 
    CatsService provider bằng cách thêm nó vào exports array của module.

    Bất kỳ module nào import CatsModule đều có thể truy cập vào instance CatsService
    provider và sẽ chia sẻ cùng một instance với tất cả các module khác import module
    đó.

*/
/* 
    Module re-exporting
    Module có thể re-export các module mà chúng import. 
*/

/* 
    Global Modules
    use @Global() decorator. Các modules được registed global sẽ không cần import module
    đó để sử dụng các provider nữa.
*/
/* 
    Dynamic Modules
    Đây là tính năng cho phép bạn dễ dàng tạo ra các modules tùy chính có thể được
    register và configure các provides dynamic. Dynamic modules 
*/
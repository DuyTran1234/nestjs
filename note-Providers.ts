// Nest resolve catsService bằng cách tạo và trả về một instance
// của CatsService (một trường hợp bình thường của singleton)
// trả về một instance đã tồn tại nếu nó đã được requested ở
// nơi khác. Dependency này được resolve và được truyền tới 
// constructor của controller của bạn (hoặc được gán vào
// thuộc tính được chỉ định)
// ** constructor(private catsService: CatsService) {}

/* 
    SCOPE
    
*/

/* 
    OPTIONAL PROVIDES
    Thỉnh thoảng bạn có thể có những dependencies không cần thiết phải resolved. 
    Ví dụ, class của bạn có thể phụ thuộc vào một configuration object, nhưng nếu none
    được truyền vào, các giá trị mặc định nên được sử dụng. Trong trường hợp như vậy,
    dependency trở thành optional, bởi vì thiếu config provider vẫn không thể xảy ra
    lỗi.
    Để chỉ ra một provider là optional, sử dụng @Optional decorator trong signature
    của constructor.
*/
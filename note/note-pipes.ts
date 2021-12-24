/* 
    PIPES
    - Một pipe là một class được chú thích với @Injectalbe() decorator. 
    - Pipes nên được implement với PipeTransform interface
    - Pipes thường được sử dụng trong 2 trường hợp cụ thể:
        + transformation: chuyển đổi data đầu vào thành một form mong muốn
        + validation: đánh giá input data và nếu nó hợp lệ, đơn giản là pass qua mà
        không thay đổi gì; còn nếu không, throw một exception khi data không chính xác.
    - 
*/
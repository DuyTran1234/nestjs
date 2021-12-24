/* 
    Middleware
    - Là một function được gọi trước khi request đến route handler
    - Là một function có thể truy cập tới request và response objects.
    - Theo mặc định middleware của Nest là express.
    - Có thể thực hiện bất cứ code nào.
    - Có thể thực hiện thay đổi các request và response object.
    - Kết thúc chu trình request-response.
    - gọi next middleware function trong stack.
    - nếu middleware function hiện tại không kết thúc chu trình request-response, nó
    cần gọi next() để pass control tới next middleware function. Còn nếu không, 
    request sẽ bị treo.

    - Triển khai custom Nest middleware trong một function, hoặc trong một class với
    một @Injectable() decorator. Nếu trong class thì implement NestMiddleware interface, 
    trong khi đó thì function không cần bất cứ yêu cầu đặc biệt nào. Hãy bắt đầu triển
    khai một tính năng simple middleware bằng cách sử dụng class method.
    - Nest middleware hỗ trợ đầy đủ Dependency Injection. Cũng như các provider và các
    controllers, chúng có thể inject các dependency có sẵn bên trong cùng module. Như
    thường lệ, điều này được thực hiện thông qua constructor.
    - Không đặt middleware bên trong @Module() decorator. Thay vào đó, chúng ta set
    chúng bằng cách sử dụng configure() method của module class. 
    
    - configure() method có thể trở thành asynchronous bằng cách sử dụng async/await.
    Bạn có thể sử dụng await operator bên trong configure() method body.
*/

/* 
    Middleware consumer
    - MiddlewareConsumer là một helper class. Nó cung cấp vài method được dựng sẵn
    để quản lý middleware 
    - method forRoutes() có thể nhận vào một string, nhiều string, một RouteInfo, một
    Controller class và nhiều controller classes. Trong hầu hết các trường hợp bạn sẽ
    chỉ cần truyền vào một list các controllers được ngăn cách bởi dấu phẩy. 
    - apply() method có thể nhận một single middleware, hoặc nhiều middleware.
    - Loại trừ một số route bằng cách sử dụng exclude() method.
*/
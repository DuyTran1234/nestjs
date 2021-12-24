/* 
    EXCEPTION FILTERS
    - Nest có kèm một layer exceptions dựng sẵn chịu trách nhiệm cho việc xử lý tất cả các
    unhandled exceptions của một application.
    - Khi một exception của bạn không được xử lý trong code ứng dụng của bạn, nó được
    catch bởi layer này, sau đó nó sẽ tự động gửi một phản hồi thân thiện cho người
    dùng.
    - Ngoài ra, hành động này còn được thực hiện bởi một global exception filter được
    dựng sẵn, nó xử lý các exception của kiểu dữ liệu HttpException (và các class con
    của nó). Khi một exception là unrecognized (không phải là HttpException và cũng
    không phải được thừa kế từ HttpException), exception filter sinh ra một JSON mặc 
    định như sau:
    {
        "statusCode": 500,
        "message": "Internal server error"
    }
    
*/
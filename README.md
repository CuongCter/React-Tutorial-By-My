# ReactJS là gì 
- Là thư viện JS phát triển bởi Facebook 
=> Xây dựng giao diện người dùng cho các ứng dụng web hiện đại
- Thường được sử dụng để xây dựng các trang web đơn trang (Single Page Application - SPAs)
(Là nơi nội dung cập nhật mà không cần tải toàn bộ tại trang)

+ So sáng SPAs và MPAs

## Single Page Application (SPAs)

1. Kiến trúc
- Đơn trang: SPAs chỉ có một trang HTML và nội dung thay đổi động thông qua việc tải dữ liệu và cập nhật qua DOM mà không cần tải lại trang
2. Tải trang
- Nhanh: Vì SPAs không yêu cầu tải lại toàn bộ trang 
=> Trải nhiệm người dùng nhanh hơn (nhất là khi ta điều hướng trang)
3. Hiệu suât:
- Tăng cường hiệu suất: Sử dụng Virtual DOM và cập nhật chỉ những phần cần thiết giúp tối ưu hiệu suất
4. Phản hồi người dùng 
- Ngay lập tức:  Phản hồi thường xuyên ngay lập tức khi ta thay dodoori trạng tháo, không cần phải tải lại trang
5. Phát triển
- Phức tạp hơn: Phát triển SPAs cso thể phức tạp hơn do quản lý trạng thái và điều hướng trên máy khách

## Multi Page Application (MPAs)

1. Kiến trúc: 
- Nhiều trang: MPAs có nhiều trang HTML riêng mỗi trang thường chưa một nội dung và logic riêng
2. Tải trang:
- Chậm hơn: Mỗi lần chuyển trang sẽ yêu cầu tải lại toàn bộ trang
3. Hiệu suất: 
- Yêu cầu nhiều tài nguyên: Vì mỗi trang đều cần tải lại => tốn tài nguyên mạng hơn so với SPAs
4. Phản hồi người dung:
 - Độ trễ: Phản hồi người dùng có độ trễ, đặc biệt là khi điều hướng trang
5. Phát triển:
- Quản lý dễ hơn: MPAs phát triển và quản lý đơn giản hơn vì mỗi trang được quản lý độc lập

### Lựa chọn

- SPAs: Thích hợp cho ứng dụng đòi hỏi hỏi trải nhiệm người dùng linh hoạt và độ tương tác cao như các ứng dụng mạng xã hội hay quảng cáo, bán hàng, ...
- MPAs: Phù hợp với các trang web thông thường hoặc khi yêu cầu trải nhiệm người dùng động và phức tạp như các web tin tức hay các blog, ...

# Đặc điểm điểm của ReactJS 
- Component:  Chia giao diện người dùng thành các component, giúp tăng việc tái sử dụng và quản lý trạng thái của ứng dụng dễ dàng
- Virtual DOM: Được React sử dụng một biến thể DOM được gọi là DOM ảo để tối ưu hóa hiệu suất. Thay vì cập nhật trực tiếp. DOM ảo khi phát hiện thay đổi, React sẽ tạo ra bản sao của DOM và thực hiện các thay đổi trên bản sao đó, cập nhật DOM thực tế chỉ khi cần thiết
- JSX: React sử dụng JSX, một phần mở rộng của JS để định nghĩa giao diện người dùng, JSX cho phép viết mã HTML trong các tệp JS giúp dễ đọc code hơn
- Data Flow: Dữ liệu trong React chạy một chiều từ cha đến con => giúp quản lý trạng thái dễ dàng và dự đoán dược
- React Router: Để quản lý định tuyến trong ứng dụng giúp điều hướng không cần tải lại trang.


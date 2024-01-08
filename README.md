# Xử dụng công cụ nào để phát triển dự án Front-End

### Quyết định sử dụng Vite, Yarn hay npm trong dự án front-end phụ thuộc vào nhiều yếu tố, bao gồm yêu cầu cụ thể của dự án, sự thoải mái và sự quen thuộc của nhóm phát triển. Dưới đây là một số điểm mạnh và yếu của từng công cụ:

1.  **Vite**:

- Mục đích: Vite (tiếng Pháp có nghĩa là "nhanh") là một công cụ phát triển front-end được xây dựng để cung cấp trải nghiệm phát triển nhanh với sự hỗ trợ tốt cho Vue.js và React.

- Ưu điểm:

  - Tốc độ khởi động nhanh: Vite sử dụng [ESM (EcmaScript Modules)](https://nodejs.org/api/esm.html) và tận dụng HTTP/2 để có tốc độ khởi động và làm tải rất nhanh.
  - Hỗ trợ Vue và React: Vite được thiết kế để tích hợp sâu với Vue.js, và từ phiên bản 2.0 trở đi, hỗ trợ cả React.
  - [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/): Hỗ trợ HMR giúp cập nhật nhanh chóng các thay đổi trong quá trình phát triển mà không cần làm tải lại toàn bộ trang.

- Nhược điểm:

  - Cộng đồng nhỏ hơn so với webpack: Mặc dù đang ngày càng trở nên phổ biến, nhưng cộng đồng của Vite vẫn nhỏ hơn so với webpack.
2. **Yarn**:

- Mục đích: Yarn là một trình quản lý gói (package manager) cho JavaScript, thay thế cho npm, với mục tiêu là cải thiện hiệu suất và đồng bộ các dependencies hiệu quả hơn.

- Ưu điểm:

  - [Yarn Plug'n'Play (PnP)](https://yarnpkg.com/features/pnp): Tính năng này giúp giảm thời gian tải dependencies bằng cách tránh việc tạo ra các symbolic links và sử dụng một cách tiếp cận khác biệt.
  - [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/): Hỗ trợ quản lý dự án lớn với nhiều packages, giúp làm cho việc phát triển và duy trì codebase dễ dàng hơn.

- Nhược điểm:

Vấn đề tương thích: Một số dự án cũ hơn hoặc các packages chưa cập nhật có thể gặp vấn đề tương thích với Yarn.

3. **npm**:

- Mục đích: npm (Node Package Manager) là trình quản lý gói mặc định cho Node.js và được sử dụng rộng rãi trong cộng đồng JavaScript.

- Ưu điểm:

  - Phổ biến và được sử dụng rộng rãi: npm là trình quản lý gói phổ biến và được nhiều dự án sử dụng.
  - Hỗ trợ tốt cho việc quản lý dependencies: npm có một cộng đồng lớn và hỗ trợ tốt cho việc quản lý dependencies và scripts.
Nhược điểm:

  - Tải dependencies có thể chậm hơn so với Yarn: Trong một số trường hợp, quá trình tải dependencies có thể mất thời gian hơn so với Yarn.
  - Không có Yarn Plug'n'Play mặc định: npm không có tính năng Plug'n'Play như Yarn.

*** 
***Ghi chú:***
 
***Lưu ý: Bên trên là sơ lược mọi người có thể tìm hiểu thêm trong project này ta sẽ dùng "Vite"***

# Cấu trúc dự án

## My React Vite App

### Cấu Trúc Thư Mục

- **`public/`:** Thư mục chứa các tệp tĩnh không biên dịch, bao gồm trang HTML chính.

- **`src/`:** Thư mục chứa mã nguồn của ứng dụng.

  - **`components/`:** Chứa các thành phần tái sử dụng như Header và Footer.

  - **`pages/`:** Chứa các thành phần đại diện cho các trang cụ thể của ứng dụng, chẳng hạn như Home và About.

  - **`App.jsx`:** Component chính của ứng dụng, nơi bạn gọi các thành phần khác và xây dựng cấu trúc của ứng dụng.

  - **`index.jsx`:** Tệp này là nơi bạn kích hoạt ứng dụng React bằng cách gọi ReactDOM.render.

- **`.gitignore`:** Tệp cấu hình Git để loại bỏ các tệp và thư mục không mong muốn khi đẩy mã nguồn lên repository.

- **`package.json`:** Tệp cấu hình npm, chứa danh sách các dependencies, scripts và cấu hình khác cho dự án.

- **`README.md`:** Tệp mô tả dự án, chứa thông tin hướng dẫn cài đặt, sử dụng, và mô tả cấu trúc dự án.

- **`vite.config.js`:** Nếu bạn cần tùy chỉnh cấu hình Vite, bạn có thể sử dụng tệp cấu hình này.
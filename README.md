# Mốt số đặc điểm khác của ReactJS

### 1. Components
- Trong ReactJS, một Component là một phần tử UI độc lập và tái sử dụng, có thể được xem là đoạn mã UI đóng gói và tái sử dụng.
- Tổ chức thành các khối nhỏ để dễ quản lý hơn
- [Có 2 loại chính của Compotent trong React](https://viblo.asia/p/so-sanh-class-components-va-functional-components-trong-reactjs-maGK7reO5j2):
  -  Funtional Component
  -  Class Component

### 2. Import và Export 
- Trong React 'Import' và 'Export' là cú pháp của JS ES6 được sử dụng để nhập (Import) và xuất (Export) các Modules, các components hoặc các giá trị khác từ một tệp (file) JS sang một tệp khác. 

**Import**

- Import Default:

```javascript
import MyComponent from './MyComponent';
```
- Import Multiple:

```javascript
import { Component1, Component2 } from './MyComponents';
```
- Import All:
```javascript
import { Component1, Component2 } from './MyComponents';
```

**Export**

- Export Default:
```javascript
const MyComponent = () => {
  // ...
};

export default MyComponent;
```
- Export Named:
```javascript
export const Component1 = () => {
  // ...
};

export const Component2 = () => {
  // ...
};
```
- Export Aliases:
```javascript
const Component1 = () => {
  // ...
};

const Component2 = () => {
  // ...
};

export { Component1 as C1, Component2 as C2 };
```

- Export All as Namespace::
```javascript
export * from './MyComponents';
```
- Export All:
```javascript
const Component1 = () => {
  // ...
};

const Component2 = () => {
  // ...
};

export * as MyComponents from './MyComponents';
```

***Lưu ý: rằng cách bạn import và export cũng phụ thuộc vào việc sử dụng CommonJS hoặc ECMAScript modules, và cách bạn cấu hình môi trường của mình (chẳng hạn như sử dụng [Babel]***

### 2. JSX
- JSX là một phần của React, là một cú pháp mở rộng của JavaScript để mô tả giao diện người dùng. JSX cho phép bạn viết mã HTML giống như trong JavaScript, giúp đơn giản hóa việc xây dựng và duy trì các thành phần UI trong React.

- JSX có một số đặc điểm quan trọng:

  - **HTML-Like Syntax**: JSX giống với cú pháp HTML, giúp phát triển giao diện người dùng trở nên dễ đọc và hiểu hơn.
  ```javascript
  const element = <h1>Hello, JSX!</h1>;
  ```
  - **JavaScript Expressions**: Bạn có thể tính toán giá trị trong JSX bằng cách sử dụng biểu thức JavaScript bên trong nó.
   ```javascript
  const name = "World";
  const element = <h1>Hello, {name}!</h1>;
  ```
  - **React Elements:** JSX được biên dịch thành React elements, giúp React hiểu cách cập nhật và render DOM hiệu quả.
   ```javascript
  import App from './App.jsx'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  ```

***Tại sao lại cần JSX trong React:***
- Đơn Giản Hóa Việc Viết Code: JSX giúp làm giảm độ phức tạp của việc viết mã nguồn khi bạn làm việc với giao diện người dùng, đặc biệt là khi so sánh với việc sử dụng các phương thức JavaScript để tạo các phần tử HTML.

- Tích Hợp JavaScript và HTML: JSX cho phép tích hợp JavaScript và HTML trong cùng một cú pháp, giúp dễ dàng quản lý logic và hiển thị UI trong cùng một thành phần.

- Tăng Hiệu Suất: JSX giúp React hiểu rõ cách cập nhật và render DOM một cách hiệu quả hơn bằng cách sử dụng React elements.
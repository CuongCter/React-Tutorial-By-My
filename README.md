# Components

- là một trong những khái niệm cốt lõi của React. Chúng là nền tảng để bạn xây dựng giao diện người dùng (UI), khiến chúng trở thành nơi hoàn hảo để bắt đầu hành trình React của bạn!

```javascript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

# Importing and Exporting Components

```javascript
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
```
# Sử dụng hình ảnh NodeJS có sẵn trên Docker Hub
FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các tệp và thư mục trong dự án vào thư mục làm việc
COPY . .

# Mở cổng 5173 để ứng dụng có thể chạy trên nó
EXPOSE 5173

# Khởi chạy ứng dụng trong chế độ phát triển khi container được khởi động
CMD ["npm", "run", "dev"]

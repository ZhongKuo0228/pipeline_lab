# 使用 Node.js 20.9 的 Alpine 版本作為基底映像
FROM node:20.9-alpine

# 設定工作目錄
WORKDIR /app

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY package*.json ./

# 安裝 npm 依賴
RUN npm install --production

# 複製應用程式的其他文件到工作目錄
COPY . .

# 開放應用程式通訊端
EXPOSE 3000

# 指定容器啟動時執行的命令
CMD ["node", "app.js"]

module.exports = {
  port: 8000,
  // 可访问的静态文件类型
  files: [
    "./src/**/*.{html,htm,css,js}"
  ],
  server: {
    // 根目录指向文件夹
    baseDir: "./src",
    // 路由: /node_module指向本目录的node_module
    routes: {
      "/node_modules": "./node_modules"
    }
  }
}
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "../app/build")));

// / 요청
app.get("/", (req, res) => {
  console.log(__dirname);
  // index.html 파일 응답
  res.sendFile(path.join(__dirname, "../app/build", "index.html"));
});

// ...

app.listen(PORT, () => console.log(`port ${PORT}`));
import http from "./app.js";
const PORT = process.env.PORT || 9000;

http.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

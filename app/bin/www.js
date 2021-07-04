const app = require("../app")

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`올바르게 서버가 실행되고 있습니다. 포트번호 ${PORT}번 입니다.`)
});

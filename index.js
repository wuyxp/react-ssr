/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/14 10:41
 */
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("<div>abc</div>")
});

app.listen(8000, () => {
    console.log('Example app listening on port 3000!');
});
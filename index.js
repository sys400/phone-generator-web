const puppeter = require("puppeteer");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 80;

const scrapWebPage = async (url) => {
  const browser = await puppeter.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let result = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName(
      "col-md-3 col-sm-6 col-xs-6"
    );
    for (var element of elements) data.push(element.textContent);
    return data;
  });
  return { result };
};

app.get("/randomphonenumbers", cors(), async function (req, res) {
  const { phoneNumber } = req;
  console.log(phoneNumber);
  const resScracp = await scrapWebPage(
    `https://www.randomphonenumbers.com/us_phone_number/3136009893`
  );
  res.send(resScracp);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

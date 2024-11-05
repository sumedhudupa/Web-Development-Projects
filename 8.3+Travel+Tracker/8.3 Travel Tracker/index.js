import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password:"hdemus",
  port: 5432,
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
      var countries =[];
      result.rows.forEach((country)=>{
        countries.push(country.country_code);
      });
      res.render("index.ejs",{countries : countries,total: countries.length});
});
app.post("/add",async (req,res)=>{
  var country = req.body.country;
  const code = await db.query("SELECT country_code FROM countries WHERE country_name = $1",[country]);
  if(code.rows.length !== 0){
    const data = code.rows[0];
    const countrycode = data.country_code;
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[countrycode,]);
  res.redirect("/");
}
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

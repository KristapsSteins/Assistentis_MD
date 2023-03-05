import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2";
import { request } from "http";

const app = express();
app.listen(3004, () => {});

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "123456",
  database: "blog",
});

const getDataFromDB = (query, res) => {
  pool.getConnection(function (err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      pool.query(query, function (err2, records, fields) {
        if (!err2) {
          res.send(records);
        }
      });
    }
  });
};

app.get("/blogs", function (req, res) {
  getDataFromDB("select * from blogs", res);
});

app.get("/blogs/:id", function (req, res) {
  const blogId = req.params.id;
  if (blogId) {
    pool.query<mysql.RowDataPacket[]>(
      `SELECT * FROM blogs WHERE id=${blogId}`,
      (err, result) => {
        if (err) throw err;
        res.send(result[0]);
      }
    );
  }
});

app.get("/comments", function (req, res) {
  getDataFromDB("select * from comments", res);
});

app.post("/comments", function (req, res) {
  const comment = req.body.comment;
  const postId = req.body.postId;
  const query = `insert into comments (comment, postId) values ('${comment}', '${postId}')`;
  pool.getConnection(function (err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      pool.query(query, function (err2, result) {
        if (!err2) {
          res.send({ success: true });
        } else {
          res.send({ success: false });
        }
      });
    }
  });
});

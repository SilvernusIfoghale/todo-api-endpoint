import express from "express";
import {
  deleteTodo,
  getAllTodos,
  patchTodo,
  postTodo,
  putTodo,
} from "../controller/controller.js";

const router = express.Router();

router.get("/todo", getAllTodos);
router.post("/todo", postTodo);
router.put("/todo/:id", putTodo);
router.patch("/todo/:id", patchTodo);
router.delete("/todo/:id", deleteTodo);

export default router;

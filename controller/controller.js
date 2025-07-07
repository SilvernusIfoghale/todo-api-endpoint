import Todo from "../model/todoModel.js";

//GET
export const getAllTodos = async (req, res) => {
  const allTodos = await Todo.find();

  res.status(200).json({
    message: "Success",
    allTodos,
  });
};

//POST
export const postTodo = async (req, res) => {
  const { todo, completed } = req.body;
  if (!todo) {
    return res.send(404).json({
      message: "A todo must be entered!",
    });
  }

  const newTodo = new Todo({
    todo,
    completed,
  });
  await newTodo.save();
  res.status(201).json({
    message: "Success",
    newTodo,
  });
};

//PUT
export const putTodo = async (req, res) => {
  const { id } = req.params;

  const { todo, completed } = req.body;

  const updateTodo = await Todo.findByIdAndUpdate(
    id,
    { todo, completed },
    { new: true }
  );

  res.status(201).json({
    message: "Success",
    updateTodo,
  });
};

//PATCH
export const patchTodo = async (req, res) => {
  const { id } = req.params;

  const { completed } = req.body;

  const existingTodo = await Todo.findById(id);

  if (existingTodo) {
    existingTodo.completed = completed;
    await existingTodo.save();

    return res.status(200).json({
      message: "Success",
      existingTodo,
    });
  } else {
    res.status(404).json({
      message: "Product not found",
    });
  }
};

//DELETE
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const existingTodo = await Todo.findByIdAndDelete(id);
  res.status(200).json({
    message: "Deleted Successfully ",
  });
};

"use client";
import React, { useState } from "react";

const TodoForm = () => {
  const startingTodo = {
    description: "",
    status: false,
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("../api/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error(`Failed to create Todo: ${res.statusText}`);
      } else {
        window.alert("Todo Created Successfully")
        console.log("Todo created successfully");
      }
    } catch (error) {
        window.alert("Error: Todo Not Created")
      console.error("Error:", error);
    }
  };

  const [formData, setFormData] = useState(startingTodo);

  return (
    <div className="flex justify-center mt-10">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Create Your Todo
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.description}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={true}>Complete</option>
            <option value={false}>Not Complete</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Create Todo"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

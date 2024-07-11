import Todo from "@/(models)/Todo";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    const todoData = body.formData;
    await Todo.create(todoData);

    return NextResponse.json({ message: "Todo created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  console.log("GET RAN");
  try {
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}


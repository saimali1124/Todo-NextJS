import Todo from "@/(models)/Todo";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function DELETE(params) {
  console.log("DEL RAN");

  try {
    const { url } = params;
    const pathnameParts = url.split("/");
    const id = pathnameParts[pathnameParts.length - 1];

    await Todo.findByIdAndDelete(id);

    return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PATCH(params){
    console.log("PATCH RAN");
    try {
        const { url } = params;
        const pathnameParts = url.split("/");
        const id = pathnameParts[pathnameParts.length - 1];
    
        await Todo.findByIdAndUpdate(id, { status: true });
    
        return NextResponse.json({ message: "Todo Updated" }, { status: 200 });
      } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
      }
}

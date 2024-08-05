"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/user");
};

export const addProduct = async (formData) => {
  const { title, desc, cat, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    console.log("added product");

    const newProduct = new Product({
      title,
      desc,
      cat,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, cat, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    // Ensure the database connection is established
    await connectToDB();

    const updateFields = { title, desc, cat, price, stock, color, size };

    // Remove fields that are empty or undefined
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    // Log the fields to be updated for debugging
    console.log("Fields to be updated:", updateFields);

    // Ensure id is valid and not empty
    if (!id) {
      throw new Error("Invalid product ID");
    }

    // Attempt to update the product
    const result = await Product.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    // Check if the update was successful
    if (!result) {
      throw new Error("Product not found or update failed");
    }

    console.log("Product updated successfully:", result);
  } catch (err) {
    console.error("Error updating product:", err.message, err.stack);
    throw new Error("Failed to update product!");
  }

  // Assuming these functions are imported from a routing library like Next.js or a similar framework
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

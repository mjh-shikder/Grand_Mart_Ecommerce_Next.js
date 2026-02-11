"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// Get All Products from db
export const getProducts = async () => {
    const products = await dbConnect(collections.PRODUCTS).find().toArray();
    return products;
}


// Get Single Product from db
export const getSingleProduct = async (id) => {
    if (id.length != 24) {
        return {};
    }

    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collections.PRODUCTS).findOne(query);
    return product || {};
}
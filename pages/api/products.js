import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    const { category } = req.query;
    const filters = category ? { category } : {};

    try {
      const products = await Product.find(filters);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products" });
    }
  }

  if (method === "POST") {
    const { title, descripcion, precio, images, category, properties } =
      req.body;
    const productDoc = await Product.create({
      title,
      descripcion,
      precio,
      images,
      category,
      properties,
    });
    res.json(productDoc);
  }

  if (method === "PUT") {
    const { title, descripcion, precio, images, category, properties, _id } =
      req.body;
    await Product.updateOne(
      { _id },
      { title, descripcion, precio, images, category, properties }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}

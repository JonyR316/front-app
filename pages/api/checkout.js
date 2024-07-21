import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ message: "Method not allowed, should be a POST request" });
    return;
  }

  const {
    name,
    email,
    phone,
    local,
    city,
    address,
    main,
    secondary,
    cartProducts,
  } = req.body;

  try {
    await mongooseConnect();
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({ _id: uniqueIds });

    let line_items = [];
    for (const productId of uniqueIds) {
      const productInfo = productsInfos.find(
        (p) => p._id.toString() === productId
      );
      const quantity =
        productsIds.filter((id) => id === productId)?.length || 0;
      if (quantity > 0 && productInfo) {
        line_items.push({
          quantity,
          price_data: {
            currency: "USD",
            product_data: { name: productInfo.title },
            unit_amount: productInfo.precio * 100,
          },
        });
      }
    }

    const orderDoc = await Order.create({
      line_items,
      name,
      email,
      phone,
      local,
      city,
      address,
      main,
      secondary,
      paid: false,
    });

    res.json({
      success: true,
      orderId: orderDoc._id.toString(),
    });
  } catch (error) {
    console.error("Error processing the order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
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
  await mongooseConnect();
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.precio * 100,
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

  const session = await checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    metadata: { orderId: orderDoc._id.toString() },
  });
  res.json({
    url: session.url,
  });
}

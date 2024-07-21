const { Schema, models, model } = require("mongoose");

const OrderSchema = new Schema({
  line_items: Object,
  name: String,
  email: String,
  phone: String,
  local: String,
  city: String,
  address: String,
  main: String,
  secondary: String,
  paid: Boolean,
});

export const Order = models?.Order || model("Order", OrderSchema);

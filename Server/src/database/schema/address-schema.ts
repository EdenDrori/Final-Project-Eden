import { Schema } from "mongoose";
import { IAddress } from "../../@types/user";

const addressSchema = new Schema<IAddress>({
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },


  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },

  street: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },


  houseNumber: {
    type: Number,
    required: true,
    min: 0,
    max: 999999,
  },
});

export { addressSchema };

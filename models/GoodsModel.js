const mongoose = require('mongoose');
const { Schema } = mongoose;

const GoodsSchema = new Schema({
  title: {
    type: String
  },
  text: {
    type: String,
  },
  price: {
    type: Number,
  },
  images: {
    type: Array,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  onSite: {
    type: String
  },
  vendorCode: {
    type: Number
  },
  chart: {
    xxxs: {
      "in": Boolean,
      "include": Boolean
    },
    xxs: {
      "in": Boolean,
      "include": Boolean
    },
    xs: {
      "in": Boolean,
      "include": Boolean
    },
    s: {
      "in": Boolean,
      "include": Boolean
    },
    m: {
      "in": Boolean,
      "include": Boolean
    },
    l: {
      "in": Boolean,
      "include": Boolean
    },
    xl: {
      "in": Boolean,
      "include": Boolean
    },
    xxl: {
      "in": Boolean,
      "include": Boolean
    },
    xxxl: {
      "in": Boolean,
      "include": Boolean
    },
  }
});

module.exports = {
  GoodsModel: mongoose.model('goods', GoodsSchema)
};
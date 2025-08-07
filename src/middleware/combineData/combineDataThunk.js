import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCombinedData = createAsyncThunk(
  "combinedData/fetchCombineData",
  async ({ limit, skip }) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    const data = await res.json();
    return data;

    // const [res1, res2, res3, res4, res5, res6, res7] = await Promise.all([
    //   fetch("https://dummyjson.com/products/category/smartphones"),
    //   fetch("https://dummyjson.com/products/category/furniture"),
    //   fetch("https://dummyjson.com/products/category/tops"),
    //   fetch("https://dummyjson.com/products/category/womens-dresses"),
    //   fetch("https://dummyjson.com/products/category/mens-shirts"),
    //   fetch("https://dummyjson.com/products/category/groceries"),
    //   fetch("https://dummyjson.com/products/category/fragrances"),
    // ]);

    // const [data1, data2, data3, data4, data5, data6, data7] = await Promise.all(
    //   [
    //     res1.json(),
    //     res2.json(),
    //     res3.json(),
    //     res4.json(),
    //     res5.json(),
    //     res6.json(),
    //     res7.json(),
    //   ]
    // );

    // return [
    //   ...data1.products,
    //   ...data2.products,
    //   ...data3.products,
    //   ...data4.products,
    //   ...data5.products,
    //   ...data6.products,
    //   ...data7.products,
    // ];
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    user: string;
    comment: string;
    rating: number;
  }[];
  images?: string;
};

export const FetchProduct = createAsyncThunk<Product[], string>(
  "product/fetch",
  async (url: string, { rejectWithValue }) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      return data.products; // ✅ Fix here
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

interface ProductState {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = undefined;
    });
    builder.addCase(FetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(FetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload as string;
    });
  },
});

export default productSlice.reducer;

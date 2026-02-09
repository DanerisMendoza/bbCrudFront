import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import type { CreateProductPayload } from "../types/product.types";

export const ProductPage = () => {
  const mutations = useProducts();

  const [form, setForm] = useState<CreateProductPayload>({
    name: "",
    brand: "",
    price: 0,
    category: "",
    stock_quantity: 0,
  });

  const submit = () => {
    mutations.createProductMutation.mutate(form);
    setForm({ name: "", brand: "", price: 0, category: "", stock_quantity: 0 });
  };

  if (mutations.productsQuery.isLoading) return <p>Loading...</p>;
  if (mutations.productsQuery.isError) return <p>Error loading products</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Baby Products Dashboard
      </h1>

      {/* Form */}
     <div className="bg-white shadow-md rounded-lg p-6 mb-8">
  <h2 className="text-xl font-semibold mb-4">Add Product</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      placeholder="Name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900"
    />
    <input
      type="text"
      placeholder="Brand"
      value={form.brand}
      onChange={(e) => setForm({ ...form, brand: e.target.value })}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900"
    />
    <input
      type="number"
      placeholder="Price"
      value={form.price}
      onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900"
    />
    <input
      type="text"
      placeholder="Category"
      value={form.category}
      onChange={(e) => setForm({ ...form, category: e.target.value })}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900"
    />
    <input
      type="number"
      placeholder="Stock Quantity"
      value={form.stock_quantity}
      onChange={(e) => setForm({ ...form, stock_quantity: Number(e.target.value) })}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900"
    />
  </div>
  <button
    onClick={submit}
    disabled={mutations.createProductMutation.isPending}
    className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
  >
    Add Product
  </button>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mutations.productsQuery.data?.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition relative"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p className="font-bold">${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>

            <div className="flex gap-2 mt-2">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                onClick={() =>
                  mutations.updateProductMutation.mutate({
                    id: product.id,
                    payload: { stock_quantity: product.stock_quantity + 1 },
                  })
                }
              >
                + Stock
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => mutations.deleteProductMutation.mutate(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

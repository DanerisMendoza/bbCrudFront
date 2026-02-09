import { useState } from "react";
import { useProducts } from "./hooks/useProducts";

export const ProductPage = () => {
  const { productsQuery, createProductMutation } = useProducts();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    stock_quantity: "",
  });

  const submit = () => {
    createProductMutation.mutate({
      name: form.name,
      brand: form.brand,
      price: Number(form.price),
      category: form.category,
      stock_quantity: form.stock_quantity
        ? Number(form.stock_quantity)
        : undefined,
    });
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Baby Products</h1>

      <h3>Create Product</h3>

      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Brand" onChange={e => setForm({ ...form, brand: e.target.value })} />
      <input placeholder="Price" type="number" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Stock" type="number" onChange={e => setForm({ ...form, stock_quantity: e.target.value })} />

      <button onClick={submit} disabled={createProductMutation.isPending}>
        Create
      </button>

      {createProductMutation.isError && (
        <pre style={{ color: "red" }}>
          {JSON.stringify(
            (createProductMutation.error as any)?.response?.data,
            null,
            2
          )}
        </pre>
      )}

      <hr />

      <h3>Products</h3>

      {productsQuery.isLoading && <p>Loading...</p>}
      {productsQuery.data?.map(p => (
        <div key={p.id}>
          {p.name} - {p.brand} (${p.price}) — Stock: {p.stock_quantity}
        </div>
      ))}
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// export default function AdminDashboard() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     image: ""
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const { data, error } = await supabase.from("products").select("*");
//     if (error) console.error("Fetch error:", error);
//     else setProducts(data);
//   };

//   const handleAdd = async () => {
//     const { name, price, image } = form;
//     if (!name || !price || !image) return Swal.fire("All fields are required!");
//     const { error } = await supabase.from("products").insert([{ name, price, image }]);
//     if (error) return Swal.fire("Add Error", error.message, "error");
//     Swal.fire("Added!", "Product has been added", "success");
//     setForm({ name: "", price: "", image: "" });
//     fetchProducts();
//   };

//   const handleDelete = async (id) => {
//     const { error } = await supabase.from("products").delete().eq("id", id);
//     if (error) return Swal.fire("Delete Error", error.message, "error");
//     Swal.fire("Deleted!", "Product removed", "success");
//     fetchProducts();
//   };

//   return (
//     <div className="admin-dashboard" style={{ padding: "2rem", background: "#f9fafb", minHeight: "100vh" }}>
//       <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>
//         Admin Dashboard
//       </h2>

//       <div
//         className="add-form"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "1rem",
//           justifyContent: "center",
//           marginBottom: "2rem"
//         }}
//       >
//         <input
//           placeholder="Product Name"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           className="form-input"
//           style={inputStyle}
//         />
//         <input
//           placeholder="Price (e.g. PKR 2000)"
//           value={form.price}
//           onChange={e => setForm({ ...form, price: e.target.value })}
//           className="form-input"
//           style={inputStyle}
//         />
//         <input
//           placeholder="Image URL"
//           value={form.image}
//           onChange={e => setForm({ ...form, image: e.target.value })}
//           className="form-input"
//           style={inputStyle}
//         />
//         <button
//           onClick={handleAdd}
//           style={{
//             background: "#0f172a",
//             color: "white",
//             padding: "0.6rem 1.2rem",
//             borderRadius: "6px",
//             border: "none",
//             cursor: "pointer",
//             transition: "0.3s"
//           }}
//         >
//           Add Product
//         </button>
//       </div>

//       <div
//         className="product-list"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "1.5rem"
//         }}
//       >
//         {products.map(product => (
//           <div
//             key={product.id}
//             className="product-card"
//             style={{
//               background: "white",
//               border: "1px solid #e5e7eb",
//               padding: "1rem",
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center"
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 height: "180px",
//                 objectFit: "cover",
//                 width: "100%",
//                 borderRadius: "8px",
//                 marginBottom: "1rem"
//               }}
//             />
//             <h4 style={{ fontSize: "1.1rem", margin: "0.5rem 0", textAlign: "center" }}>
//               {product.name}
//             </h4>
//             <p style={{ color: "#6b7280", marginBottom: "0.8rem" }}>{product.price}</p>
//             <button
//               onClick={() => handleDelete(product.id)}
//               style={{
//                 background: "#dc2626",
//                 color: "white",
//                 border: "none",
//                 padding: "0.5rem 1rem",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 transition: "0.3s"
//               }}
//               onMouseOver={(e) => (e.target.style.background = "#b91c1c")}
//               onMouseOut={(e) => (e.target.style.background = "#dc2626")}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Input styling
// const inputStyle = {
//   padding: "0.6rem 1rem",
//   borderRadius: "6px",
//   border: "1px solid #d1d5db",
//   width: "220px"
// };














// src/pages/AdminPanel.jsx
import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

export default function AdminPanel() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (!error) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("products").insert([
      { name, price, image, description },
    ]);

    if (error) {
      alert("Error adding product");
    } else {
      alert("Product added successfully!");
      setName("");
      setPrice("");
      setImage("");
      setDescription("");
      fetchProducts();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form className="admin-form" onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>

      <div className="admin-products">
        <h3>All Products</h3>
        <div className="product-list">
          {products.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.image} alt={prod.name} />
              <h4>{prod.name}</h4>
              <p>{prod.price}</p>
              <p>{prod.description}</p>
              <button onClick={() => handleDelete(prod.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

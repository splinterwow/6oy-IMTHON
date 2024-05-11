import React, { useEffect, useState } from "react";

function CreateRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pages, setPages] = useState("");
  const [coverType, setCoverType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const newRecipe = {
      title: title,
      imageUrl: imageUrl,
      pages: pages,
      coverType: coverType,
      description: description,
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setTitle("");
    setImageUrl("");
    setPages("");
    setCoverType("");
    setDescription("");
  };

  return (
    <div className="align-content">
      <h1 className="text-center text-2xl font-medium -mt-4">Add New Recipe</h1>

      <form className="grid" onSubmit={handleSave}>
        <label htmlFor="" className="font-medium mb-1">
          Title:
        </label>
        <input
          type="text"
          placeholder="Enter your meal name"
          className="input input-bordered max-w-lg mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="imageUrl" className="font-medium mb-1">
          Image URL:
        </label>
        <input
          type="text"
          id="imageUrl"
          placeholder="Enter img url"
          className="input input-bordered  max-w-lg mb-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="" className="font-medium mb-1">
          Pages:
        </label>
        <input
          type="number"
          placeholder="Enter pages"
          className="input input-bordered  max-w-lg mb-2"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <label htmlFor="" className="font-medium mb-1">
          cover type:
        </label>
        <select
          className="select select-bordered w-36"
          value={coverType}
          onChange={(e) => setCoverType(e.target.value)}
        >
          <option disabled value="">
            Cover type
          </option>
          <option value="Soft">Soft</option>
          <option value="Hard">Hard</option>
        </select>

        <label className="font-medium">Description:</label>
        <textarea
          className="textarea textarea-bordered max-w-lg mt-2 resize-none"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-secondary max-w-lg mt-3">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
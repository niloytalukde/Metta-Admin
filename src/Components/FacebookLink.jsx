import axios from "axios";

export default function FacebookLink() {
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const facebookUrl = formData.get("facebookUrl");
    const data = await axios.post(
      `${import.meta.env.VITE_URL}/facebook/create-facebook-link`,
      { facebookUrl }
    );
    console.log(data);
  };

  return (
    <div className="flex items-center space-x-2 justify-center min-h-screen">
      <form onSubmit={handleUpload}>
        <input
          type="text"
          name="facebookUrl"
          className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter Facebook Link"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
  MdSentimentSatisfied,
} from "react-icons/md";
import { categories } from "../utils/DB";
import Loader from "./Loader";
import { storage } from "../firebase.config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import UpToCloud from "./UpToCloud";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading: Try again!");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {
          setImageAsset(getDownloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Successfully uploaded");
          setAlertStatus("Succes");
          setTimeout(() => {
            setFields(false);
          }, 7000);
        });
      }
    );
  };

  const deleteImage = () => {};

  const saveDetails = () => {};

  return (
    <div className="w-full h-full flex items-center justify-center mt-2">
      <div className="w-[90%] md-w-[75%] border border-gray-300 rounded-lg px-4 flex flex-col items-center justify-center">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Product name"
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 font-semibold text-textColor"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 mt-2 mb-2 rounded-md outline-none w-[163px] border-b-2 border-gray-200 bg-orange-400 hover:shadow-md duration-200 transition-all cursor-pointer text-headingColor text-semibold"
          >
            <option value="other" className="bg-white">
              Select category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="border-0 capitalize bg-white text-gray-600 text-sm"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[300px] md:h-[300px] lg:h-[300px] sm:h-[300px] cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label
                    htmlFor=""
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <UpToCloud />
                      <p className="text-gray-500">Click button to upload</p>
                      <input
                        type="file"
                        name="uploadimage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-48 h-50 cursor-pointer mb-4"
                        placeholder="select file"
                      />
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded product"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 font-semibold text-textColor"
            />
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 font-semibold text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="m-4 ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

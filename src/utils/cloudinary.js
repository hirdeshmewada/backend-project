import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";
//filesystem

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded
    // console.log("response from cloudinary",response);
    
    // console.log("File id uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    //remove the locally saved temp file
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    //remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };

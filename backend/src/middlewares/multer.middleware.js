import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Save file with original name
  },
});

// Export the multer upload middleware for multiple files
export const upload = multer({ 
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2 MB
});

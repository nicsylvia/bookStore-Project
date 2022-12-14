import { Router } from "express";
import {
  postBook,
  getAllbooks,
  getOneBook,
  searchBooks,
  myViews,
} from "../Controller/bookController";
import { coverUpload } from "../Config/multer";

const router = Router();

router.route("/newbook").post(coverUpload, postBook);
router.route("/getall").get(getAllbooks);
router.route("/getone/:id").get(getOneBook);
router.route("/search").get(searchBooks);
router.route("/views/:id").patch(myViews);

export default router;
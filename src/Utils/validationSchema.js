import * as Yup from "yup"

const FILE_SIZE = 2000 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const SUPPORTED_DOCUMENTS = [
  ".doc",
  ".docx",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/csv",
  "application/pdf",
  ".xls",
  ".xlsx",
  "application/excel",
  "application/vnd.ms-excel",
  "application/x-excel",
  "application/x-msexcel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export const validationMenu = Yup.object({
    name : Yup.string().required("Please fill in this field")
});

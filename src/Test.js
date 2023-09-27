// import React from "react";
// import { Formik, Form, Field } from "formik";
// import { Box, Button, Modal, TextField } from "@mui/material";

// function MyComponent() {
//   // Define a common onSubmit function that handles both forms
//   const handleSubmit = (values, actions, formName) => {
//     // Use the formName parameter to identify which form was submitted
//     if (formName === "form1") {
//       // Handle form 1 submission
//       console.log("Form 1 values:", values);
//     } else if (formName === "form2") {
//       // Handle form 2 submission
//       console.log("Form 2 values:", values);
//     }

//     // You can perform any other common actions here
//     actions.resetForm(); // Reset the form
//   };

//   return (
//     <div>
//       <h1>Form 1</h1>
//       <Formik
//         initialValues={{ field1: "" }}
//         onSubmit={(values, actions) => handleSubmit(values, actions, "form1")}
//       >
//         {({ isSubmitting, handleChange, values, touched, errors }) => (
//           <Form>
//             <Box>
//               <TextField
//                 sx={{ m: "0 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="name"
//                 label="Name"
//                 type="name"
//                 size="small"
//                 id="name"
//                 onChange={handleChange}
//                 value={values.name}
//                 error={touched.name && Boolean(errors.name)}
//                 helperText={touched.name && errors.name}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="email"
//                 label="email"
//                 type="email"
//                 id="email"
//                 size="small"
//                 onChange={handleChange}
//                 value={values.email}
//                 error={touched.email && Boolean(errors.email)}
//                 helperText={touched.email && errors.email}
//               />
//             </Box>
//             <TextField
//               name="email"
//               label="email"
//               type="email"
//               size="email"
//               id="email"
//               values={values.email}
//               onChange={handleChange}
//             />
//             <Button type="submit" disabled={isSubmitting}>
//               Submit Form 1
//             </Button>
//           </Form>
//         )}
//       </Formik>

//       <h1>Form 2</h1>
//       <Formik
//         initialValues={{ field2: "" }}
//         onSubmit={(values, actions) => handleSubmit(values, actions, "form2")}
//       >
//         {({ isSubmitting }) => (
//           <Box>
//             {/* Form 2 fields */}
//             <Field type="text" name="field2" />
//             <button type="submit">Submit Form 2</button>
//           </Box>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default MyComponent;

// import {
//     Box,
//     Button,
//     Modal,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     TextField,
//     Typography,
//   } from "@mui/material";
//   import React, { useEffect, useState } from "react";
//   import { useSelector, useDispatch } from "react-redux";
//   import { AddNewUser, DeleteUserbyuseremail } from "./userslice";
//   // import { Form } from "react-router-dom";
//   import { Form, Formik, useFormik } from "formik";
//   import * as Yup from "yup";

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 300,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 3,
//   };

//   const style2 = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 600,
//     height: "auto",
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 2,
//   };

//   function Dashboard() {
//     const [deleteValue, setdeleteValue] = useState();
//     const [open, setOpen] = useState(false);
//     const [Addopen, setAddOpen] = useState(false);
//     const [Editopen, setEditOpen] = useState(false);
//     const [showdata, setshowdata] = useState([]);
//     const [UserData, setUserData] = useState([]);
//     const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//     });
//     const dispatch = useDispatch();

//     const Data = useSelector((state) => state.user);
//     const Users = Data.user;

//     const filterdata = useSelector((state) => state.user.foundUsername);

//     useEffect(() => {
//       if (filterdata) {
//         setshowdata(filterdata);
//       } else if (Users) {
//         setshowdata(Users);
//       }
//     }, [filterdata, Users]);

//     const handleOpen = (val) => {
//       setOpen(true);
//       // console.log("vlue", val);
//       setdeleteValue(val);
//     };

//     const handleClose = () => setOpen(false);
//     const Addclose = () => setAddOpen(false);
//     const Editclose = () => setEditOpen(false);
//     const handledelete = () => {
//       dispatch(DeleteUserbyuseremail(deleteValue.name));
//       setOpen(false);
//     };

//     const handleEdit = (EditValue) => {
//       setEditOpen(true);
//       setUserData(EditValue);
//       const initialValues = EditValue;
//     };
//     // useEffect(() => {}, [UserData]);

//     console.log("UserData", UserData);

//     const handleAdd = () => {
//       setAddOpen(true);
//     };
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };

//     let validationSchema = Yup.object({
//       name: Yup.string().required("Type the Name"),
//       email: Yup.string().required("Type the email"),
//       password: Yup.string().required("Type the password"),
//       gender: Yup.string()
//         .required("Type the gender")
//         .oneOf(
//           ["Male", "Female", "Other"],
//           'Gender should be "Male"/"Female"/"Other'
//         ),
//       address: Yup.string().required("Type the address"),
//       city: Yup.string().required("Type the city"),
//       state: Yup.string().required("Type the state"),
//       phoneNo: Yup.string("phone no. contains digits only")
//         .required("Type the phoneno")
//         .test("digits-only", "phone no. must contain only digits", (value) =>
//           /^\d+$/.test(value)
//         )
//         .min(10, "phone no. must be exactly 10 digits")
//         .max(10, "phone no. must be exactly 10 digits"),
//     });
//     let initialValue = {
//       name: "",
//       password: "",
//       email: "",
//       address: "",
//       phoneNo: "",
//       city: "",
//       gender: "",
//       state: "",
//     };

//     const handleSubmit = useFormik((formname) => {
//       initialValue, validationSchema;
//       if (formname === "form1") {
//         console.log(formData);

//         console.log("lkajslkdjf", formname);
//       } else {
//         console.log("nothing");
//       }

//       // console.log(formname, value);
//       // console.log("formname", value);
//     });

//     // const formik = useFormik({
//     //   initialValue,
//     //   validationSchema,
//     //   onSubmit: (handleSubmit) => {
//     //     console.log(handleSubmit.values);
//     //     console.log("handleSubmi");
//     //     dispatch(AddNewUser(handleSubmit));
//     //     alert(JSON.stringify(handleSubmit, null, 2));
//     //     formik.setValues(initialValue);
//     //     setAddOpen(false);
//     //     validationSchema = null;
//     //   },
//     // });

//     return (
//       <>
//         <Box sx={{ p: "2% 5%" }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               m: "0 0 4% 0",
//             }}
//           >
//             <Typography variant="h3">Dashboard</Typography>
//             <Button
//               sx={{ border: "1px solid", marginLeft: "5px" }}
//               onClick={handleAdd}
//             >
//               Add User
//             </Button>
//           </Box>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name </TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Password</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Address</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>City</TableCell>
//                 <TableCell>Phone No.</TableCell>
//                 <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {showdata.map((Data) => (
//                 <TableRow key={Data.name}>
//                   <TableCell>{Data.name}</TableCell>
//                   <TableCell>{Data.email}</TableCell>
//                   <TableCell>{Data.password}</TableCell>
//                   <TableCell>{Data.gender}</TableCell>
//                   <TableCell>{Data.address}</TableCell>
//                   <TableCell>{Data.state}</TableCell>
//                   <TableCell>{Data.city}</TableCell>
//                   <TableCell>{Data.phoneNo}</TableCell>
//                   <TableCell>
//                     <Button
//                       sx={{ border: "1px solid" }}
//                       onClick={() => handleOpen(Data)}
//                     >
//                       Delete
//                     </Button>
//                     <Button
//                       sx={{ border: "1px solid", marginLeft: "5px" }}
//                       onClick={() => handleEdit(Data)}
//                     >
//                       Edit
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Typography
//                 id="modal-modal-title"
//                 variant="h6"
//                 component="h2"
//                 sx={{ textAlign: "center" }}
//               >
//                 Do you really want to delete?
//               </Typography>
//               <Box sx={{ m: "3% 0 0 25%" }}>
//                 <Button
//                   sx={{ border: "1px solid", marginLeft: "5px" }}
//                   onClick={() => handledelete()}
//                 >
//                   Yes
//                 </Button>
//                 <Button
//                   sx={{ border: "1px solid", marginLeft: "5px" }}
//                   onClick={handleClose}
//                 >
//                   No
//                 </Button>
//               </Box>
//             </Box>
//           </Modal>

//           <Formik
//             initialValues={{}}
//             onSubmit={(values, actions) => handleSubmit(values, actions, "form1")}
//           >
//             {({ values, handleChange, touched, errors }) => (
//               <Form>
//                 <Modal open={Addopen} onClose={Addclose}>
//                   <Box sx={style2}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         m: "0 0 2% 0",
//                       }}
//                     >
//                       <Typography variant="h6">Add User </Typography>
//                     </Box>
//                     <TextField
//                       sx={{ m: "0 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="name"
//                       label="Name"
//                       type="name"
//                       size="small"
//                       id="name"
//                       onChange={handleInputChange}
//                       value={formData.name}
//                       error={touched.name && Boolean(errors.name)}
//                       helperText={touched.name && errors.name}
//                     />

//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="email"
//                       label="email"
//                       type="email"
//                       id="email"
//                       size="small"
//                       onChange={handleInputChange}
//                       value={formData.email}
//                       error={touched.email && Boolean(errors.email)}
//                       helperText={touched.email && errors.email}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       size="small"
//                       id="password"
//                       onChange={handleInputChange}
//                       value={formData.password}
//                       error={touched.password && Boolean(errors.password)}
//                       helperText={touched.password && errors.password}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="gender"
//                       label="gender"
//                       type="gender"
//                       id="gender"
//                       size="small"
//                       onChange={handleInputChange}
//                       value={formData.gender}
//                       error={touched.gender && Boolean(errors.gender)}
//                       helperText={touched.gender && errors.gender}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="address"
//                       label="address"
//                       size="small"
//                       type="address"
//                       id="address"
//                       onChange={handleInputChange}
//                       value={formData.address}
//                       error={touched.address && Boolean(errors.address)}
//                       helperText={touched.address && errors.address}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="state"
//                       label="state"
//                       type="state"
//                       size="small"
//                       id="state"
//                       onChange={handleInputChange}
//                       value={formData.state}
//                       error={touched.state && Boolean(errors.state)}
//                       helperText={touched.state && errors.state}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="city"
//                       label="city"
//                       size="small"
//                       type="city"
//                       id="city"
//                       onChange={handleInputChange}
//                       value={formData.city}
//                       error={touched.city && Boolean(errors.city)}
//                       helperText={touched.city && errors.city}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="phoneNo"
//                       label="phoneNo"
//                       size="small"
//                       type="phoneNo"
//                       id="phoneNo"
//                       onChange={handleInputChange}
//                       value={formData.phoneNo}
//                       error={touched.phoneNo && Boolean(errors.phoneNo)}
//                       helperText={touched.phoneNo && errors.phoneNo}
//                     />
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Button
//                         sx={{ border: "1px solid", m: "2% 0 0 0" }}
//                         onClick={(values, actions) =>
//                           handleSubmit(values, actions, "form1")
//                         }
//                       >
//                         submit
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Modal>
//               </Form>
//             )}
//           </Formik>
//           <Formik initialValues={{ name: "default" }}>
//             {({
//               values,
//               initialValues,
//               setFieldValue,
//               handleSubmit,
//               handleChange,
//               touched,
//               errors,
//             }) => {
//               return (
//                 <Modal open={Editopen} onClose={Editclose}>
//                   <Box sx={style2}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         m: "0 0 2% 0",
//                       }}
//                     >
//                       <Typography variant="h6">Edit User Data</Typography>
//                     </Box>
//                     <TextField
//                       sx={{ m: "0 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="name"
//                       label="Name"
//                       type="name"
//                       size="small"
//                       id="name"
//                       onChange={handleChange}
//                       setFieldValue={values.name}
//                       value={values.name}
//                       error={touched.name && Boolean(errors.name)}
//                       helperText={touched.name && errors.name}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="email"
//                       label="email"
//                       type="email"
//                       id="email"
//                       size="small"
//                       onChange={handleChange}
//                       setFieldValue={values.email}
//                       value={values.email}
//                       error={touched.email && Boolean(errors.email)}
//                       helperText={touched.email && errors.email}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       size="small"
//                       id="password"
//                       onChange={handleChange}
//                       setFieldValue={values.password}
//                       value={values.password}
//                       error={touched.password && Boolean(errors.password)}
//                       helperText={touched.password && errors.password}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="gender"
//                       label="gender"
//                       type="gender"
//                       id="gender"
//                       size="small"
//                       onChange={handleChange}
//                       setFieldValue={values.gender}
//                       value={values.gender}
//                       error={touched.gender && Boolean(errors.gender)}
//                       helperText={touched.gender && errors.gender}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="address"
//                       label="address"
//                       size="small"
//                       type="address"
//                       id="address"
//                       onChange={handleChange}
//                       setFieldValue={values.address}
//                       value={values.address}
//                       error={touched.address && Boolean(errors.address)}
//                       helperText={touched.address && errors.address}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="state"
//                       label="state"
//                       type="state"
//                       size="small"
//                       id="state"
//                       onChange={handleChange}
//                       setFieldValue={values.state}
//                       value={values.state}
//                       error={touched.state && Boolean(errors.state)}
//                       helperText={touched.state && errors.state}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="city"
//                       label="city"
//                       size="small"
//                       type="city"
//                       id="city"
//                       onChange={handleChange}
//                       setFieldValue={values.city}
//                       value={values.city}
//                       error={touched.city && Boolean(errors.city)}
//                       helperText={touched.city && errors.city}
//                     />
//                     <TextField
//                       sx={{ m: "1.5% 0 0 0" }}
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="phoneNo"
//                       label="phoneNo"
//                       size="small"
//                       type="phoneNo"
//                       id="phoneNo"
//                       onChange={handleChange}
//                       setFieldValue={values.phoneNo}
//                       value={values.phoneNo}
//                       error={touched.phoneNo && Boolean(errors.phoneNo)}
//                       helperText={touched.phoneNo && errors.phoneNo}
//                     />
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Button
//                         sx={{ border: "1px solid", m: "2% 0 0 0" }}
//                         onClick={handleSubmit}
//                       >
//                         submit
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Modal>
//               );
//             }}
//           </Formik>
//         </Box>
//       </>
//     );
//   }
//   export default Dashboard;

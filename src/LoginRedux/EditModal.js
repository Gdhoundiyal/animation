// import { Box, Button, Modal, TextField, Typography } from "@mui/material";
// import { Formik } from "formik";
// import React from "react";

// function EditModal(Editclose, Editopen, UserData, handleSubmit, style2) {
//   console.log(Editclose, Editopen, UserData, handleSubmit, style2);

//   return (
//     <Formik initialValues={UserData}>
//       {({ values, setFieldValue, handleChange, touched, errors }) => {
//         return (
//           <Modal open={Editopen} onClose={Editclose}>
//             <Box sx={style2}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   m: "0 0 2% 0",
//                 }}
//               >
//                 <Typography variant="h6">Edit User Data</Typography>
//               </Box>
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
//                 setFieldValue={values?.name}
//                 value={values?.name}
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
//                 setFieldValue={values?.email}
//                 value={values?.email}
//                 error={touched.email && Boolean(errors.email)}
//                 helperText={touched.email && errors.email}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 size="small"
//                 id="password"
//                 onChange={handleChange}
//                 setFieldValue={values?.password}
//                 value={values?.password}
//                 error={touched.password && Boolean(errors.password)}
//                 helperText={touched.password && errors.password}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="gender"
//                 label="gender"
//                 type="gender"
//                 id="gender"
//                 size="small"
//                 onChange={handleChange}
//                 setFieldValue={values?.gender}
//                 value={values?.gender}
//                 error={touched.gender && Boolean(errors.gender)}
//                 helperText={touched.gender && errors.gender}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="address"
//                 label="address"
//                 size="small"
//                 type="address"
//                 id="address"
//                 onChange={handleChange}
//                 setFieldValue={values?.address}
//                 value={values?.address}
//                 error={touched.address && Boolean(errors.address)}
//                 helperText={touched.address && errors.address}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="state"
//                 label="state"
//                 type="state"
//                 size="small"
//                 id="state"
//                 onChange={handleChange}
//                 setFieldValue={values?.state}
//                 value={values?.state}
//                 error={touched.state && Boolean(errors.state)}
//                 helperText={touched.state && errors.state}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="city"
//                 label="city"
//                 size="small"
//                 type="city"
//                 id="city"
//                 onChange={handleChange}
//                 setFieldValue={values?.city}
//                 value={values?.city}
//                 error={touched.city && Boolean(errors.city)}
//                 helperText={touched.city && errors.city}
//               />
//               <TextField
//                 sx={{ m: "1.5% 0 0 0" }}
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="phoneNo"
//                 label="phoneNo"
//                 size="small"
//                 type="phoneNo"
//                 id="phoneNo"
//                 onChange={handleChange}
//                 setFieldValue={values?.phoneNo}
//                 value={values?.phoneNo}
//                 error={touched.phoneNo && Boolean(errors.phoneNo)}
//                 helperText={touched.phoneNo && errors.phoneNo}
//               />
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Button
//                   sx={{ border: "1px solid", m: "2% 0 0 0" }}
//                   onClick={() => handleSubmit(values)}
//                 >
//                   submit
//                 </Button>
//               </Box>
//             </Box>
//           </Modal>
//         );
//       }}
//     </Formik>
//   );
// }

// export default EditModal;

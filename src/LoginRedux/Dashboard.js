import {
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteUserbyuseremail, EditUser, findUserByEmail } from "./userslice";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
let initialValue = {
  name: "",
  password: "",
  email: "",
  address: "",
  phoneNo: "",
  city: "",
  gender: "",
  state: "",
};

function Dashboard() {
  const [deleteValue, setdeleteValue] = useState();
  const [open, setOpen] = useState(false);
  const [Addopen, setAddOpen] = useState(false);
  const [showdata, setshowdata] = useState([]);
  const [defaultValues, setDefaultValues] = useState(initialValue);
  const [disable, setdisable] = useState(false);
  const ref = useRef();

  const dispatch = useDispatch();
  const Data = useSelector((state) => state.user);
  const editdata = useSelector((state) => state.user.updatevalue);
  const Users = Data.user;
  console.log(editdata);

  const filterdata = useSelector((state) => state.user.foundUsername);

  useEffect(() => {
    if (filterdata) {
      setshowdata(filterdata);
    } else if (Users) {
      setshowdata(Users);
    }
  }, [filterdata, Users]);

  const handleOpen = (val) => {
    setOpen(true);
    setdeleteValue(val);
  };

  const handleClose = () => setOpen(false);
  const Addclose = () => setAddOpen(false);
  const handledelete = () => {
    dispatch(DeleteUserbyuseremail(deleteValue.email));
    setOpen(false);
  };
  const handleAdd = (handleadd) => {
    if (ref.current) {
      ref.current("name", "");
      ref.current("email", "");
      ref.current("password", "");
      ref.current("state", "");
      ref.current("city", "");
      ref.current("gender", "");
      ref.current("phoneNo", "");
      ref.current("address", "");
    }
    console.log(handleAdd);
    setAddOpen(true);
  };
  const handleEdit = (EditValue) => {
    dispatch(findUserByEmail(EditValue.email));
    if (ref.current) {
      ref.current("name", EditValue.name);
      ref.current("email", EditValue.email);
      ref.current("password", EditValue.password);
      ref.current("state", EditValue.state);
      ref.current("city", EditValue.city);
      ref.current("gender", EditValue.gender);
      ref.current("phoneNo", EditValue.phoneNo);
      ref.current("address", EditValue.address);
    }
    setAddOpen(true);
    setdisable(true);
  };

  let validationSchema = Yup.object({
    name: Yup.string().required("Type the Name"),
    email: Yup.string().required("Type the email"),
    password: Yup.string().required("Type the password"),
    gender: Yup.string()
      .required("Type the gender")
      .oneOf(
        ["Male", "Female", "Other"],
        'Gender should be "Male"/"Female"/"Other'
      ),
    address: Yup.string().required("Type the address"),
    city: Yup.string().required("Type the city"),
    state: Yup.string().required("Type the state"),
    phoneNo: Yup.string("phone no. contains digits only")
      .required("Type the phoneno")
      .test("digits-only", "phone no. must contain only digits", (value) =>
        /^\d+$/.test(value)
      )
      .min(10, "phone no. must be exactly 10 digits")
      .max(10, "phone no. must be exactly 10 digits"),
  });

  return (
    <>
      <Box sx={{ p: "2% 5%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "0 0 4% 0",
          }}
        >
          <Typography variant="h3">Dashboard</Typography>
          <Button
            sx={{ border: "1px solid", marginLeft: "5px" }}
            onClick={() => handleAdd("adduser")}
          >
            Add User
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showdata.map((Data) => (
              <TableRow key={Data.name}>
                <TableCell>{Data.name}</TableCell>
                <TableCell>{Data.email}</TableCell>
                <TableCell>{Data.password}</TableCell>
                <TableCell>{Data.gender}</TableCell>
                <TableCell>{Data.address}</TableCell>
                <TableCell>{Data.state}</TableCell>
                <TableCell>{Data.city}</TableCell>
                <TableCell>{Data.phoneNo}</TableCell>
                <TableCell>
                  <Button
                    sx={{ border: "1px solid" }}
                    onClick={() => handleOpen(Data)}
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{ border: "1px solid", marginLeft: "5px" }}
                    onClick={() => handleEdit(Data)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Do you really want to delete?
            </Typography>
            <Box sx={{ m: "3% 0 0 25%" }}>
              <Button
                sx={{ border: "1px solid", marginLeft: "5px" }}
                onClick={() => handledelete()}
              >
                Yes
              </Button>
              <Button
                sx={{ border: "1px solid", marginLeft: "5px" }}
                onClick={handleClose}
              >
                No
              </Button>
            </Box>
          </Box>
        </Modal>

        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (values) {
              // dispatch(AddNewUser(values));

              setAddOpen(false);
              dispatch(DeleteUserbyuseremail(values.email));
              dispatch(EditUser(values));
            }
            // console.log("values", values);
            // Formik.resetForm();
          }}
        >
          {({
            values,
            setFieldValue,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            ref.current = setFieldValue;
            // console.log("errors", errors);
            // console.log("value", values);
            return (
              <Modal open={Addopen} onClose={Addclose}>
                <Box sx={style2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      m: "0 0 2% 0",
                    }}
                  >
                    <Typography variant="h6">Add User </Typography>
                  </Box>
                  <Form>
                    <TextField
                      sx={{ m: "0 0 0 0" }}
                      margin="normal"
                      // required
                      fullWidth
                      name="name"
                      label="Name"
                      type="name"
                      size="small"
                      id="name"
                      onChange={handleChange}
                      value={values.name}
                      error={touched.name && !values.name}
                      helperText={
                        touched.name && !values.name && "Name is required"
                      }
                    />

                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      label="email"
                      type="email"
                      id="email"
                      size="small"
                      disabled={disable}
                      onChange={handleChange}
                      value={values.email}
                      setFieldValue={values.email}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      size="small"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      setFieldValue={values.password}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="gender"
                      label="gender"
                      type="gender"
                      id="gender"
                      size="small"
                      onChange={handleChange}
                      value={values.gender}
                      setFieldValue={values.gender}
                      error={touched.gender && Boolean(errors.gender)}
                      helperText={touched.gender && errors.gender}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="address"
                      label="address"
                      size="small"
                      type="address"
                      id="address"
                      onChange={handleChange}
                      value={values.address}
                      setFieldValue={values.address}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="state"
                      label="state"
                      type="state"
                      size="small"
                      id="state"
                      onChange={handleChange}
                      value={values.state}
                      setFieldValue={values.state}
                      error={touched.state && Boolean(errors.state)}
                      helperText={touched.state && errors.state}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="city"
                      label="city"
                      size="small"
                      type="city"
                      id="city"
                      onChange={handleChange}
                      value={values.city}
                      setFieldValue={values.city}
                      error={touched.city && Boolean(errors.city)}
                      helperText={touched.city && errors.city}
                    />
                    <TextField
                      sx={{ m: "1.5% 0 0 0" }}
                      margin="normal"
                      required
                      fullWidth
                      name="phoneNo"
                      label="phoneNo"
                      size="small"
                      type="phoneNo"
                      id="phoneNo"
                      onChange={handleChange}
                      value={values.phoneNo}
                      setFieldValue={values.phoneNo}
                      error={touched.phoneNo && Boolean(errors.phoneNo)}
                      helperText={touched.phoneNo && errors.phoneNo}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        type="submit"
                        sx={{ border: "1px solid", m: "2% 0 0 0" }}
                      >
                        submit
                      </Button>
                    </Box>
                  </Form>
                </Box>
              </Modal>
            );
          }}
        </Formik>
      </Box>
    </>
  );
}
export default Dashboard;

export const findUserByEmail = (useremail) => ({
  type: "FIND_USER_BY_EMAIL",
  payload: useremail,
});

export const DeleteUserbyuseremail = (useremail) => ({
  type: "Delete_USER_BY_EMAIL",
  payload: useremail,
});

export const AddNewUser = (data) => ({
  type: "Add_New_USER",
  payload: data,
});

export const EditUser = (data) => ({
  type: "UPDATE_USER",
  payload: data,
});

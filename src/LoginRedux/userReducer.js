const initialState = {
  user: [
    {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      password: "securepass123",
      gender: "Male",
      address: "45A, Gandhi Nagar",
      city: "Delhi",
      state: "Delhi",
      phoneNo: "9876543210",
    },
    {
      name: "Priya Patel",
      email: "priya@example.com",
      password: "mypassword",
      gender: "Female",
      address: "102, Swami Vivekanand Road",
      city: "Mumbai",
      state: "Maharashtra",
      phoneNo: "8765432109",
    },
    {
      name: "Amit Kumar",
      email: "amit@example.com",
      password: "password123",
      gender: "Male",
      address: "56, Shanti Vihar",
      city: "Jaipur",
      state: "Rajasthan",
      phoneNo: "7890123456",
    },
    {
      name: "Sneha Reddy",
      email: "sneha@example.com",
      password: "sneha456",
      gender: "Female",
      address: "89, Reddy Street",
      city: "Hyderabad",
      state: "Telangana",
      phoneNo: "7654321098",
    },
    {
      name: "Vijay Singh",
      email: "vijay@example.com",
      password: "vijaypass",
      gender: "Male",
      address: "34, Singh Colony",
      city: "Lucknow",
      state: "Uttar Pradesh",
      phoneNo: "8765498701",
    },
    {
      name: "Anjali Mehta",
      email: "anjali@example.com",
      password: "mehta123",
      gender: "Female",
      address: "67, Mehta Nagar",
      city: "Ahmedabad",
      state: "Gujarat",
      phoneNo: "9876512345",
    },
    {
      name: "Rajesh Khanna",
      email: "rajesh@example.com",
      password: "khanna789",
      gender: "Male",
      address: "23, Khanna Road",
      city: "Chennai",
      state: "Tamil Nadu",
      phoneNo: "7654387654",
    },
    {
      name: "Neha Verma",
      email: "neha@example.com",
      password: "verma456",
      gender: "Female",
      address: "78, Verma Lane",
      city: "Kolkata",
      state: "West Bengal",
      phoneNo: "8765476543",
    },
    {
      name: "Ravi Joshi",
      email: "ravi@example.com",
      password: "ravipass",
      gender: "Male",
      address: "12, Joshi Enclave",
      city: "Pune",
      state: "Maharashtra",
      phoneNo: "7654398765",
    },
    {
      name: "Pooja Gupta",
      email: "pooja@example.com",
      password: "pooja123",
      gender: "Female",
      address: "45, Gupta Lane",
      city: "Bengaluru",
      state: "Karnataka",
      phoneNo: "9876521098",
    },
  ],
  foundUser: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_USER_BY_EMAIL":
      const emailToFind = action.payload;
      const foundUser = state.user.find((users) => users.email === emailToFind);

      return {
        ...state,
        foundUser,
      };
    case "Delete_USER_BY_EMAIL":
      const nameToFind = action.payload;
      const foundUsername = state.user.filter(
        (users) => users.email !== nameToFind
      );
      console.log("nameToFind", nameToFind);
      return {
        ...state,
        user: foundUsername,
      };
    case "Add_New_USER":
      const NewUser = action.payload;
      return {
        ...state,
        user: [...state.user, NewUser],
      };
    case "UPDATE_USER":
      const updatedUser = action.payload;
      const userfound = state.foundUser;
      const newvalue = [{ ...userfound, ...updatedUser }];
      const uservalue = state.user;
      const updatedvalue = [...uservalue, ...newvalue];
      return {
        ...state,
        user: updatedvalue,
      };

    default:
      return state;
  }
};

export default UserReducer;

import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getProfileApi } from "../../redux/productReducer/userReducer";
export default function Profile() {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      gender: "",
      name: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email is not valid!"),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
          "Password is not valid!"
        ),
      phone: yup
        .string()
        .required("Please Enter your phone")
        .matches(
          /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
          "Phone is not valid!"
        ),
    }),
    onSubmit: (values) => {
      dispatch(getProfileApi(values));
    },
  });
  const { userProfile } = useSelector((state) => state.userReducer);
  
  return (
    <div className="profile-form">
      <h3 className="profile-title">Profile</h3>
      <form action="" className="container" onSubmit={form.handleSubmit}>
        <div className="row">
          <div className="img">
            <img
              src={
                userProfile.picture?.data.url
                  ? userProfile.content?.avatar
                  : "Avatar"
              }
              style={{ width: 100 }}
              className="w-100"
              alt="..."
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p className="form-label">Email</p>
                  <input
                    className="form-control"
                    name={"email"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile.email}
                  />
                </div>
                <div className="form-group">
                  <p className="form-label"> Name</p>
                  <input
                    className="form-control"
                    name={"name"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.name}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p className="form-label">Password</p>
                  <input
                    className="form-control"
                    name={"password"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.password}
                  />
                </div>
                <div className="form-group">
                  <p className="form-label">Phone</p>
                  <input
                    className="form-control"
                    name={"phone"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.phone}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="button text-right"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="btn btn-success">Update</div>
        </div>
      </form>
    </div>
  );
}

import Cookies from "js-cookie";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../store/AuthSlice";
import { useFormik } from "formik";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import logo from "../../images/logo.png";
import img from "../../images/3.webp";
import "./login.css";
import { MdOutlineMailOutline } from "react-icons/md";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useRef(null);
  const Error = (mess) => {
    toast.current.show({
      severity: "error",
      summary: `${mess}`,
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate: (data) => {
      let errors = {};
      if (!data.email) {
        errors.email = " email is required";
      }
     
      if (!data.password) {
        errors.password = "password is required";
      }
      return errors;
    },
    onSubmit: (data) => {
      if (data) {
        dispatch(getLogin(data))
          .unwrap()
          .then((res) => {
            if (res.success) {
              Cookies.set("aqarToken", res.data.token);
              navigate("/", { replace: true });  
              formik.resetForm();
            } else {
              Error(res.errors[0]);
            }
          })
          .catch((err) => {
            Error(err.message);
          });
      }
    },
   
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="LoginPage">
        <div className=" grid  w-100 align-items-center">
          <div className="col-12 md:col-6 p-0 Login-card">
            <img alt="logo" src={logo} className="logo" />
            <h1 className="text-center pt-4  title justify-content-center">Aqar Crop Dashboard</h1>
            <form onSubmit={formik.handleSubmit} className="grid  gap-2">
              <div className="col-12 p-0">
                <div className="inputFormik inputFormik_login">
                  <MdOutlineMailOutline className="icons__" />

                  <InputText
                    name="email"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("email"),
                    })}
                    placeholder="enter your email"
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.setFieldValue("email", e.target.value);
                    }}
                  />
                  {getFormErrorMessage("email")}
                </div>
              </div>
              <div className="col-12 p-0">
                <div className="inputFormik inputFormik_login">
                  {/* <TiLockClosedOutline className="icons__" /> */}
                  <Password
                    toggleMask
                    placeholder="enter your password"
                    name="password"
                    className={`${classNames({
                      "p-invalid": isFormFieldInvalid("password"),
                    })} w-full `}
                    value={formik.values.password}
                    feedback={false}
                    onChange={(e) => {
                      formik.setFieldValue("password", e.target.value);
                    }}
                  />
                  {getFormErrorMessage("password")}
                </div>
              </div>
              <button name="login" type="submit" className="submit-button">
                login
              </button>
            </form>
          </div>
          <div className="col-12 md:col-6 p-0 Login_img">
            <img alt="login" src={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

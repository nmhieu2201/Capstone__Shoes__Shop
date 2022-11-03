import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {FacebookOutlined} from '@ant-design/icons'
export default function LoginFacebook() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="w-100 login-facebook">
      <FacebookLogin
        appId="513423747312714"
        className='w-100 content'
        // autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="btn-facebook btn btn-primary w-100">
            <FacebookOutlined />
            Continue with Facebook
          </button>
        )}
      />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

// Components
import Modal from "../modal";
import InputLabel from "../input/text/input-label";
import PasswordInputLabel from "../input/text/password-input-label";
import Button from "../button";

// Images
import Logo from "../../resources/images/logo.svg";

// Style
import inputStyles from "../input/styles.scss";
import styles from "./styles.scss";

export default function Login() {
  return (
    <>
      <Modal
        overlayClass="open"
        className="open"
      >
        <img
          src={Logo}
          alt="Peddler"
          className={`${styles["login-logo-img"]}`}
        />
        <h3 className={`${styles["text-center"]}`}>Welcome back</h3>
        <div className={`${inputStyles["input-wrap"]}`}>
          <InputLabel
            type="email"
            placeholdertext="you@example.com"
            label="Email"
            forName="loginEmail"
          />
        </div>
        <div className={`${inputStyles["input-wrap"]}`}>
          <PasswordInputLabel
            label="Password"
            forName="loginPassword"
            type="password"
            className="input-password has-right-icon has-right-icon-visible"
            placeholdertext="••••••••••"
          />
        </div>
        <Button className={`${styles["my-12"]}`}>Sign in</Button>
        <div className={`${styles["forgot-link-wrap"]}`}>
          <Button element="a" href="/" className="btn-link-underline btn-link">
            Forgot password?
          </Button>
        </div>
        <Button className="btn-secondary">Create new account</Button>
      </Modal>
    </>
  );
}

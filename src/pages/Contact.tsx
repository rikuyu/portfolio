import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { init, sendForm } from "emailjs-com";
import "../assets/styles/contact.scss";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  init(`${process.env.REACT_APP_USER_ID}`);

  const sendMail = (data) => {
    console.log(data);
    sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      "#contact-form"
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );

    window.alert("Thank you for getting in touch");
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="titleContact">
          <p>Contact</p>
        </div>
        <div className="contactMsg">
          <p>
            お気軽に下記フォームよりご連絡ください。下記フォーム内容はいずれも必須事項となっております。必須事項をご記入の上ご連絡ください。
          </p>
        </div>
        <form
          className="forms"
          onSubmit={handleSubmit(sendMail)}
          id="contact-form"
        >
          <TextField
            className="formsItem"
            variant="filled"
            label="氏名(必須)"
            type="text"
            name="name"
            fullWidth
            margin="normal"
            inputRef={register({ required: true, maxLength: 20 })}
            error={Boolean(errors.name)}
            helperText={errors.name && "氏名をご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="メールアドレス(必須)"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email && "メールアドレスをご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="件名(必須)"
            type="text"
            name="subject"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.subject)}
            helperText={errors.subject && "件名をご入力ください"}
          />
          <TextField
            className="formsItem"
            variant="filled"
            label="お問い合わせ内容(必須)"
            type="text"
            name="body"
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            error={Boolean(errors.body)}
            helperText={errors.body && "お問い合わせをご入力して下さい。"}
            multiline
            rows="8"
          />
          <Button
            className="submitButton"
            variant="contained"
            color="default"
            type="submit"
            style={{ marginTop: 10 }}
          >
            送信
          </Button>
        </form>
        <div className="buttons">
          <GitHubIcon
            className="icon"
            onClick={() => window.open("https://github.com/rikuyu", "_blank")}
          />
          <TwitterIcon
            className="icon"
            onClick={() =>
              window.open("https://twitter.com/yuuukiuu", "_blank")
            }
          />
          <LibraryBooksIcon
            className="icon"
            onClick={() =>
              window.open("https://www.yuuuki-blog.com/", "_blank")
            }
          />
        </div>
        <div className="my-gmail">
          <p>yuuukiuu@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

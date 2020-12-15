import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import "../../assets/styles/contact.scss";

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="contact">
      <div className="container">
        <form className="forms" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="氏名(必須)"
            type="text"
            name="title"
            fullWidth
            margin="normal"
            inputRef={register({ required: true, maxLength: 20 })}
            error={Boolean(errors.title)}
            helperText={errors.title && "氏名をご入力ください"}
          />
          <TextField
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
            variant="contained"
            color="default"
            type="submit"
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, FormControl, FormHelperText, Input, Stack } from "@mui/joy";
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const formAction = "https://assets.mailerlite.com/jsonp/932522/forms/120282435721102707/subscribe";


const NotifyOfEventsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState("success");

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsSubmitting(true);
    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log("data", data);
      if (!data.success) {
        setResponseMessage(data.errors.fields.email[0] || "Failed to submit. Please check your email and try agin later");
        throw new Error(data.errors.fields.email[0]);
      }
      setResponseType("success");
      setResponseMessage(data.msg);
      setIsSubmitting(false);
    } catch (error) {
      setResponseType("error");
      setIsSubmitting(false);
      console.error("There has been a problem with your fetch operation:", error);
    }
  }
  return (
    <div id="mlb2-14513190" style={{ minWidth: "60%" }}>
      <form
        onSubmit={submitForm}
        style={{ marginTop: "32px" }}
      >
        {responseType === "success" ? (
          <Alert color="success" size="lg">
            <b>Thank you!</b> Let's keep in touch.
          </Alert>
        ) : (
          <FormControl error={responseType === "error"}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Input aria-label="email" aria-required="true" type="email" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" size="lg" />
              {responseType === "error" && (
                <FormHelperText sx={{ fontSize: "xs", mt: "4px !important" }}>
                  <InfoOutlined fontSize="sm" />
                  {responseMessage}
                </FormHelperText>)}
              <input type="hidden" name="ml-submit" value="1" />

              <Button
                type="submit"
                size="lg"
                fullWidth
                loading={isSubmitting}
              >
                NOTIFY ME!
              </Button>
              <input type="hidden" name="anticsrf" value="true" />
            </Stack>
          </FormControl>
        )}
      </form>
    </div>
  );
}

export default NotifyOfEventsForm;
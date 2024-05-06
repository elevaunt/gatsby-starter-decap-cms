
import React, { useState } from 'react';
import { Alert, Input } from '@mui/joy';
import { Button } from "@mui/joy";
import queryString from "query-string";
import fetchJsonp from "fetch-jsonp";

const formAction = "https://theporterscoaching.us14.list-manage.com/subscribe/post-json?u=11dbe61816314480c0f50e6c0&amp;id=faa3297fd9&amp;f_id=00bf96e0f0";


const FiveStepsOfShameForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    const query = queryString.stringify(formJson);
    const endpoint = formAction + "&" + query;

    setIsSubmitting(true);
    try {
      const response = await fetchJsonp(endpoint, {
        jsonpCallback: "c",
      });
      const data = await response.json();
      if (data.result !== "success") {
        throw new Error("response not OK");
      }
      if (data.result === "success") {
        setResponseType("success");
      } else {
        setResponseType("error");
      }
      setResponseMessage(data.msg);
      setIsSubmitting(false);
    } catch (error) {
      setResponseType("error");
      setResponseMessage("Failed to submit. Please check your email and try agin later");
      setIsSubmitting(false);
      console.error("There has been a problem with your fetch operation:", error);
    }

  }
  return (
    <form
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      onSubmit={(e) => handleFormSubmit(e)}
      style={{ width: "100%", maxWidth: "700px" }
      }>
      <Input
        type="email"
        name="EMAIL"
        className="required email"
        id="mce-EMAIL"
        placeholder="Your email"
        required
        sx={{
          width: "100%",
          my: 3,
        }}
      />
      <input type="hidden" name="tags" value="7425024" readOnly />
      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <input type="text" name="b_11dbe61816314480c0f50e6c0_faa3297fd9" tabIndex="-1" defaultValue="" />
      </div>
      {responseType ? (
        <Alert color={responseType === "success" ? "success" : "danger"} size="lg">{responseMessage}</Alert>
      ) : (
        <Button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          size="xl2"
          loading={isSubmitting}
        >
          Send Me the 5 Steps!
        </Button>
      )}
    </form>

  );
}

export default FiveStepsOfShameForm;
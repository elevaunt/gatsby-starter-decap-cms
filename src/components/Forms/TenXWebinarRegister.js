
import React, { useState } from 'react';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Checkbox, Input, Radio, RadioGroup, Stack } from "@mui/joy";
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const formAction = "https://assets.mailerlite.com/jsonp/932522/forms/131501600653968508/subscribe";


const TenXWebinarRegister = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState(null);

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
        style={{ marginTop: "32px", textAlign: "left" }}
      >
        {responseType === "success" ? (
          <Alert
            color="success"
            size="lg"
            startDecorator={<CheckCircleIcon />}
            sx={{ alignItems: 'flex-start' }}
          >
            <div>
              <div><b>Thank you!</b> </div>
              <div>
                We've sent you an email with all the details.  Make sure you check your spam folder :)
                <p>See you on the call!</p>
              </div>
            </div>
          </Alert>
        ) : (
          <FormControl error={responseType === "error"}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="stretch"
              spacing={5}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={1}
                width="50%"
              >
                <div class="ml-form-fieldRow ">
                  <div class="ml-field-group ml-field-name ml-validate-required">
                    <FormLabel>First Name*</FormLabel>
                    <Input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="" autocomplete="given-name" required />
                  </div>
                </div>
                <div class="ml-form-fieldRow ">
                  <div class="ml-field-group ml-field-last_name ml-validate-required">
                    <FormLabel>Last name*</FormLabel>
                    <Input aria-label="last_name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[last_name]" placeholder="" autocomplete="family-name" required />
                  </div>
                </div>
                <div class="ml-form-fieldRow ">
                  <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <FormLabel>Email*</FormLabel>
                    <Input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="" autocomplete="email" required />
                  </div>
                </div>
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-phone ml-validate-required">
                    <FormLabel>Phone</FormLabel>
                    <Input aria-label="phone" type="text" class="form-control" data-inputmask="" name="fields[phone]" placeholder="" autocomplete="" />
                  </div>
                </div>
              </Stack>

              <Box width="50%">
                <div class="ml-form-fieldRow ml-last-item">
                  <div class="ml-field-group ml-field-referral ml-validate-required">
                    <FormLabel>How did you hear about us?*</FormLabel>
                    <RadioGroup defaultValue="outlined" name="radio-buttons-group" required>
                      <Radio aria-label="referral" aria-required="true" name="fields[referral]" class="custom-control-input"
                        type="radio" value="Social Media" id="radio-17727095-43}-0" label="Social Media" size="sm" />
                      <Radio aria-label="referral" aria-required="true" name="fields[referral]" class="custom-control-input"
                        type="radio" value="A friend invited me" label="A friend invited me" id="radio-17727095-43}-1" size="sm" />
                      <Radio aria-label="referral" aria-required="true" name="fields[referral]" class="custom-control-input"
                        type="radio" value="Invited by Lee" label="Invited by Lee" id="radio-17727095-43}-2" size="sm" />
                      <Radio aria-label="referral" aria-required="true" name="fields[referral]" class="custom-control-input"
                        type="radio" value="Heard there was a party... where&#039;s the food" label="Heard there was a party... where&#039;s the food" id="radio-17727095-43}-3" size="sm" />
                      <Radio aria-label="referral" aria-required="true" name="fields[referral]" class="custom-control-input"
                        type="radio" value="Other" label="Other" id="radio-17727095-43}-4" size="sm" />
                    </RadioGroup>
                  </div>
                </div>
              </Box>
            </Stack>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {responseType === "error" && (
                <FormHelperText sx={{ fontSize: "xs", mt: "4px !important" }}>
                  <InfoOutlined fontSize="sm" />
                  {responseMessage}
                </FormHelperText>)}
              <input type="hidden" name="ml-submit" value="1" />
              <div style={{ marginTop: "32px" }}>
                <Button
                  type="submit"
                  size="xl"
                  // fullWidth
                  width="50%"
                  loading={isSubmitting}
                >
                  REGISTER NOW!
                </Button>
              </div>
              <Checkbox type="checkbox" label="Opt in to receive news and updates." size="sm" defaultChecked />
              <input type="hidden" name="anticsrf" value="true" />
            </Stack>
          </FormControl>
        )}
      </form>
    </div>
  );
}

export default TenXWebinarRegister;
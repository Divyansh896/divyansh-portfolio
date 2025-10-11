import emailjs from "emailjs-com";

// Wrap sending email in a function
export const sendContactEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};

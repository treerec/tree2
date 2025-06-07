"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // In a real application, you would:
  // 1. Validate the form data
  // 2. Send an email using a service like Resend, SendGrid, or Nodemailer
  // 3. Store the inquiry in a database
  // 4. Send confirmation emails

  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  })

  // Simulate email sending
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically send an email to the company
  // Example with a hypothetical email service:
  /*
  await sendEmail({
    to: 'info@treeremovalexperts.com',
    subject: `New Quote Request from ${firstName} ${lastName}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  })
  */

  return { success: true }
}

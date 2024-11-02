import { HomePage } from "@/components/app-page";

const projects = [
  {
    name: "Sign Up",
    number: "001",
    prompt:
      "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
    url: "/001-sign-up",
  },
  {
    name: "Credit Card Checkout",
    number: "002",
    prompt:
      "Design a credit card checkout form or page. Don't forget the important elements such as the numbers, dates, security numbers, etc.",
    url: "/002-credit-card",
  },
];

export default function Page() {
  return <HomePage projects={projects} />;
}

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/button/button";
import Notification from "@/components/notification/notification";
import { useState } from "react";
import ContentSection from "@/components/containers/content-section";
import Heading from "@/components/heading/heading";
import CodeBlock from "./code-block";

type Inputs = {
  address: string;
  country: string;
  notes: string;
  paymentMethod: string;
  terms: boolean;
};

export default function FormExample() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="large" zeroMargin>
          Form
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <div className="w-full max-w-lg">
            {submitted ? (
              <Notification type="success">Submitted!</Notification>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>
                    Street address
                    <input {...register("address")} />
                  </label>
                </div>
                <div>
                  <label>
                    Country
                    <select {...register("country")}>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>United States</option>
                    </select>
                  </label>
                </div>
                <fieldset>
                  <legend className="mb-2">Payment method</legend>
                  <div className="space-y-1">
                    <label className="inline-label">
                      <input
                        type="radio"
                        {...register("paymentMethod")}
                        value="PayPal"
                        defaultChecked
                      />
                      PayPal
                    </label>
                    <label className="inline-label">
                      <input
                        type="radio"
                        {...register("paymentMethod")}
                        value="Stripe"
                      />
                      Stripe
                    </label>
                    <label className="inline-label">
                      <input
                        type="radio"
                        {...register("paymentMethod")}
                        value="Cash"
                      />
                      Cash
                    </label>
                  </div>
                </fieldset>
                <div>
                  <label>
                    Delivery notes
                    <textarea
                      rows={3}
                      {...register("notes")}
                      placeholder="Door code etc."
                    />
                  </label>
                </div>

                <div>
                  <label className="inline-label">
                    <input
                      type="checkbox"
                      {...register("terms", { required: true })}
                    />
                    <span>I agree to the terms and conditions</span>
                  </label>
                  {errors.terms && (
                    <div className="mt-2 text-sm text-red-600">
                      This is required
                    </div>
                  )}
                </div>

                <Button style="primary-outlined" size="small" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <CodeBlock>
        {`
// See form-example.tsx

// Styling comes from globals.css
          `}
      </CodeBlock>
    </ContentSection>
  );
}

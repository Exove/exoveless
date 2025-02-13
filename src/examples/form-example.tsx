"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/button/button";
import Notification from "@/components/notification/notification";
import { useState } from "react";
import ContentSection from "@/components/containers/content-section";
import Heading from "@/components/heading/heading";
import CodeBlock from "./code-block/code-block";

type Inputs = {
  address: string;
  country: string;
  notes: string;
  paymentMethod: string;
  terms: boolean;
};

export default function FormExample() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        "An error occurred while submitting the form. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentSection>
      <div className="mb-20 border-b pb-4">
        <Heading level="h2" size="lg" className="mb-0">
          Form
        </Heading>
      </div>
      <div className="gap-5 lg:flex">
        <div className="lg:w-72"></div>
        <div className="flex-1">
          <div className="w-full max-w-lg">
            {submitted ? (
              <Notification type="success">
                Form submitted successfully!
              </Notification>
            ) : (
              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {submitError && (
                  <Notification type="error">
                    <div role="alert">{submitError}</div>
                  </Notification>
                )}
                <div>
                  <label className="block">
                    <span className="flex items-center">
                      Street Address{" "}
                      <span className="ml-1 text-red-500">*</span>
                    </span>
                    <input
                      {...register("address", {
                        required: "Street address is required",
                        minLength: {
                          value: 5,
                          message:
                            "Street address must be at least 5 characters",
                        },
                      })}
                      aria-invalid={errors.address ? "true" : "false"}
                      aria-describedby={
                        errors.address ? "address-error" : undefined
                      }
                    />
                  </label>
                  {errors.address && (
                    <div
                      id="address-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.address.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block">
                    <span className="flex items-center">
                      Country <span className="ml-1 text-red-500">*</span>
                    </span>
                    <select
                      {...register("country", {
                        required: "Country is required",
                      })}
                      aria-invalid={errors.country ? "true" : "false"}
                      aria-describedby={
                        errors.country ? "country-error" : undefined
                      }
                    >
                      <option value="">Select a country</option>
                      <option value="FI">Finland</option>
                      <option value="SE">Sweden</option>
                      <option value="NO">Norway</option>
                    </select>
                  </label>
                  {errors.country && (
                    <div
                      id="country-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.country.message}
                    </div>
                  )}
                </div>
                <fieldset>
                  <legend className="mb-2">
                    <span className="flex items-center">
                      Payment Method{" "}
                      <span className="ml-1 text-red-500">*</span>
                    </span>
                  </legend>
                  <div className="space-y-1">
                    <label className="inline-label">
                      <input
                        type="radio"
                        {...register("paymentMethod", {
                          required: "Payment method is required",
                        })}
                        value="PayPal"
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
                  {errors.paymentMethod && (
                    <div className="mt-2 text-sm text-red-600" role="alert">
                      {errors.paymentMethod.message}
                    </div>
                  )}
                </fieldset>
                <div>
                  <label className="block">
                    <span>Delivery Notes</span>
                    <textarea
                      rows={3}
                      {...register("notes", {
                        maxLength: {
                          value: 500,
                          message:
                            "Delivery notes cannot exceed 500 characters",
                        },
                      })}
                      placeholder="Door code, delivery instructions, etc."
                      aria-invalid={errors.notes ? "true" : "false"}
                      aria-describedby={
                        errors.notes ? "notes-error" : undefined
                      }
                    />
                  </label>
                  {errors.notes && (
                    <div
                      id="notes-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.notes.message}
                    </div>
                  )}
                </div>

                <div>
                  <label className="inline-label">
                    <input
                      type="checkbox"
                      {...register("terms", {
                        required: "You must accept the terms and conditions",
                      })}
                      aria-invalid={errors.terms ? "true" : "false"}
                      aria-describedby={
                        errors.terms ? "terms-error" : undefined
                      }
                    />
                    <span>
                      I agree to the terms and conditions{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.terms && (
                    <div
                      id="terms-error"
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.terms.message}
                    </div>
                  )}
                </div>

                <Button
                  style="secondary"
                  size="sm"
                  type="submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <CodeBlock>
        {`
// See form-example.tsx and globals.css
          `}
      </CodeBlock>
    </ContentSection>
  );
}

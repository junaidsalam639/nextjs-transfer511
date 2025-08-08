"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import BookingSteps from "../web/booking-steps";
import CarSmallCard from "../ui/car-small-card";
import { useRouter } from "next/navigation";
import { setContactDetails } from "@/redux/contactDetailsSlice";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useAddLeadsMutation } from "@/service/contactBookingApi";

function ContactDetailsForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectCar } = useSelector((state) => state);
  const { booking } = useSelector((state) => state);
  const [addLeads, { isLoading }] = useAddLeadsMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phone: Yup.string().required("Phone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("first_name", values?.firstName);
        formData.append("last_name", values?.lastName);
        formData.append("email", values?.email);
        formData.append("phone", values?.phone);
        formData.append("from_location", booking?.from);
        formData.append("to_location", booking?.to);
        const response = await addLeads({ formData }).unwrap();
        if (response?.status) {
          toast.success(response?.message);
          dispatch(setContactDetails(values));
          router.push("/booking-overview");
        }
      } catch (err) {
        console.error(err);
      }
    },
  });

  const renderError = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="text-sm text-red-500">{formik.errors[field]}</p>
    ) : null;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <BookingSteps activeStep={2} completedSteps={[0, 1]} />
      <CarSmallCard selectCar={selectCar} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Billing Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                name="firstName"
                placeholder="First Name *"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("firstName")}
            </div>
            <div>
              <Input
                name="lastName"
                placeholder="Last Name *"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("lastName")}
            </div>
            <div>
              <Input
                name="phone"
                placeholder="Phone Number *"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("phone")}
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("email")}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                name="flight"
                placeholder="Flight number (Optional)"
                value={formik.values.flight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("flight")}
            </div>
            <div>
              <Input
                name="passengers"
                placeholder="Passengers (Optional)"
                value={formik.values.passengers}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("passengers")}
            </div>
            <div>
              <Input
                name="luggage"
                placeholder="Luggage (Optional)"
                value={formik.values.luggage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("luggage")}
            </div>
            <div>
              <Textarea
                name="notes"
                placeholder="Order notes (Optional)"
                rows={5}
                value={formik.values.notes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {renderError("notes")}
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        className="w-full bg-zinc-900 hover:bg-orange-500 text-white"
      >
        {isLoading ? (
          <div className="animate-spin">
            <Loader />
          </div>
        ) : (
          "Continue to Payment"
        )}
      </Button>
    </form>
  );
}

export default ContactDetailsForm;

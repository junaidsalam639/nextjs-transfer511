"use client"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useAddCouponsMutation } from "@/service/couponsApi"

export function AddCouponsForm() {
  const router = useRouter();
  const [addCoupons, { isLoading }] = useAddCouponsMutation();

  const formik = useFormik({
    initialValues: {
      code: "",
      discount_type: "",
      discount_amount: "",
      expiry_date: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("code is required"),
      discount_type: Yup.string().required("discount is required"),
      discount_amount: Yup.string().required("amount is required"),
      expiry_date: Yup.string().required("expiry date is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await addCoupons({ ...values }).unwrap();
        console.log(response);
        if (response?.status) {
          toast.success(response?.message || "Add Coupons successfully");
          router.push('/admin-dashboard/coupons');
        }
      } catch (err) {
        toast.error(err?.data?.message || 'Some thing went wrong')
      }
    },
  });


  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Add Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="code">Code</Label>
              <Input
                id="code"
                name="code"
                value={formik.values.code}
                onChange={formik.handleChange}
              />
              {formik.touched.code && formik.errors.code && (
                <p className="text-red-500 text-sm">{formik.errors.code}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount_type">discount_type</Label>
              <Select
                value={formik.values.discount_type}
                onValueChange={(value) => formik.setFieldValue("discount_type", value)}
                onBlur={() => formik.setFieldTouched("discount_type", true)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a discount_type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">percentage</SelectItem>
                  <SelectItem value="fixed">fixed</SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.discount_type && formik.errors.discount_type && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.discount_type}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="discount_amount">Discount Amount</Label>
              <Input
                id="discount_amount"
                name="discount_amount"
                type="number"
                value={formik.values.discount_amount}
                onChange={formik.handleChange}
              />
              {formik.touched.discount_amount && formik.errors.discount_amount && (
                <p className="text-red-500 text-sm">{formik.errors.discount_amount}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry_date">Expiry Date</Label>
              <Input
                id="expiry_date"
                name="expiry_date"
                type="date"
                value={formik.values.expiry_date}
                onChange={formik.handleChange}
              />
              {formik.touched.expiry_date && formik.errors.expiry_date && (
                <p className="text-red-500 text-sm">{formik.errors.expiry_date}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="animate-spin">
                  <Loader />
                </div>
              ) : (
                "Add Coupons"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

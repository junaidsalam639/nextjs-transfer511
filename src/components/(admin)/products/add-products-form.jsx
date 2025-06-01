"use client"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function AddProductsForm() {
  const [imagePreview, setImagePreview] = useState(null)

  const formik = useFormik({
    initialValues: {
      image: null,
      title: "",
      price: "",
      sitex: "",
      geepack: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Image is required"),
      title: Yup.string().required("Title is required"),
      price: Yup.string().required("Price is required"),
      sitex: Yup.string().required("SiteX is required"),
      geepack: Yup.string().required("Geepack is required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData()
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key])
      })
      console.log("Form Data (binary)", formData.get("image"), values)
    },
  })

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0]
    if (file) {
      formik.setFieldValue("image", file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className={cn("w-full max-w-xl mx-auto")}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Add Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Product Image</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {formik.touched.image && formik.errors.image && (
                <p className="text-sm text-red-500">{formik.errors.image}</p>
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded border"
                />
              )}
            </div>

            {["title", "price", "sitex", "geepack"].map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <Label htmlFor={field} className="capitalize">{field}</Label>
                <Input
                  id={field}
                  name={field}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field]}
                />
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-sm text-red-500">{formik.errors[field]}</p>
                )}
              </div>
            ))}

            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

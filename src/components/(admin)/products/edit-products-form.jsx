"use client"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEditCarMutation, useGetCarSingleQuery } from "@/service/carApi"
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

export function EditProductsForm({ id }) {
  const router = useRouter();
  const [editCar, { isLoading }] = useEditCarMutation();
  const { data, isLoading: isLoadingCars } = useGetCarSingleQuery(id);
  const [imagePreview, setImagePreview] = useState(null)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.data?.name || "",
      category: data?.data?.category || "",
      passenger_capacity: data?.data?.passenger_capacity?.toString() || "",
      features: data?.data?.features || [""],
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
      passenger_capacity: Yup.number().typeError("Must be a number").required("Passenger capacity is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await editCar({ ...values, id: data?.data?.id }).unwrap();
        toast.success(response?.message || "Edit Car successfully");
        router.push('/admin-dashboard/products');
      } catch (err) {
        toast.error(err?.data?.errors || 'Something went wrong');
      }
    },
  });


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      formik.setFieldValue("image", file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleFeatureChange = (index, value) => {
    const updated = [...formik.values.features]
    updated[index] = value
    formik.setFieldValue("features", updated)
  }

  const addFeature = () => {
    formik.setFieldValue("features", [...formik.values.features, ""])
  }

  const removeFeature = (index) => {
    const updated = [...formik.values.features]
    updated.splice(index, 1)
    formik.setFieldValue("features", updated)
  }

  useEffect(() => {
    if (data?.data?.image) {
      setImagePreview(`https://j46.e0c.mytemp.website/storage/${data.data.image}`);
    }
  }, [data]);


  if (isLoadingCars) return <>Loading...</>;


  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Edit Cars</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formik.values.category}
                onValueChange={(value) => formik.setFieldValue("category", value)}
                onBlur={() => formik.setFieldTouched("category", true)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Van">Van</SelectItem>
                </SelectContent>
              </Select>

              {formik.touched.category && formik.errors.category && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.category}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="passenger_capacity">Passenger Capacity</Label>
              <Input
                id="passenger_capacity"
                name="passenger_capacity"
                value={formik.values.passenger_capacity}
                onChange={formik.handleChange}
              />
              {formik.touched.passenger_capacity && formik.errors.passenger_capacity && (
                <p className="text-red-500 text-sm">{formik.errors.passenger_capacity}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Car Image</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {formik.touched.image && formik.errors.image && (
                <p className="text-red-500 text-sm">{formik.errors.image}</p>
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover border rounded"
                />
              )}
            </div>

            <div className="space-y-2">
              <Label>Features</Label>
              {formik.values.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Input
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder={`Feature ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeFeature(index)}
                    disabled={formik.values.features.length === 1}
                  >
                    −
                  </Button>
                  {index === formik.values.features.length - 1 && (
                    <Button type="button" variant="outline" onClick={addFeature}>
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="animate-spin">
                  <Loader />
                </div>
              ) : (
                "Edit Cars"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

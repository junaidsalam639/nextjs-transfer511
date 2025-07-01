import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useApplyCoupenMutation } from '@/service/appyCoupenApi'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

const BookingCoupon = ({ price, setCouponData }) => {
    const [showCouponField, setShowCouponField] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [applyCoupen, { isLoading }] = useApplyCoupenMutation();

    const handlerApplyCoupen = async () => {
        try {
            const values = { price, code: couponCode };
            const response = await applyCoupen({ ...values }).unwrap();
            console.log(response);
            if (response?.status) {
                toast.success(response?.message || "Apply Coupen successfully");
                setCouponData(response?.data);
                setCouponCode("");
            }
        } catch (err) {
            toast.error(err?.data?.message || 'Some thing went wrong');
        }
    }

    return (
        <>
            <div className="space-y-4 mb-6">
                <Card className="bg-secondary">
                    <CardContent>
                        <div className="flex items-center mb-3">
                            <Checkbox
                                id="coupon"
                                className="mr-2 cursor-pointer"
                                checked={showCouponField}
                                onCheckedChange={() => setShowCouponField(!showCouponField)}
                            />
                            <Label htmlFor="coupon" className="text-sm">
                                Have a coupon code?
                            </Label>
                        </div>
                        {showCouponField && (
                            <>
                                <Input
                                    name="couponCode"
                                    placeholder="Enter coupon code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <Button
                                    onClick={handlerApplyCoupen}
                                    disabled={isLoading}
                                    className="mt-3 w-40 bg-zinc-900 hover:bg-orange-500 text-white">
                                    {isLoading ? (
                                        <div className="animate-spin">
                                            <Loader />
                                        </div>
                                    ) : (
                                        "Apply Coupen"
                                    )}

                                </Button>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default BookingCoupon




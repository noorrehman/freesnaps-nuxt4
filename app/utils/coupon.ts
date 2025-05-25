import type {Coupon} from "~/types/coupon";


export const discountCouponMinimumAmount = 20
export const discountCoupon = "discount20"

export async function convertToLocalCoupons(coupons = []): Promise<Coupon[]>{
    const localCoupons: Coupon[] = []
    for(const coupon of coupons){
        localCoupons.push(await convertToLocalCoupon(coupon))
    }
    return localCoupons
}

export async function convertToLocalCoupon(coupon:any = {}): Promise<Coupon>{
    return {
        id: coupon.id,
        code: coupon.code,
        amount: coupon.amount,
        status: coupon.status,
        date_expires: coupon.date_expires,
        discount_type: coupon.discount_type,
        description: coupon.description,
        individual_use: coupon.individual_use,
        product_ids: coupon.product_ids,
        product_categories: coupon.product_categories,
        excluded_product_categories: coupon.excluded_product_categories,
        excluded_product_ids: coupon.excluded_product_ids,
        minimum_amount: coupon.minimum_amount,
        maximum_amount: coupon.maximum_amount
    }
}

export async function convertToLineCoupon(coupon: Coupon): Promise<LineCoupon>{
    return {
        id: coupon.id,
        code: coupon.code,
        discount_type: coupon.discount_type,
        amount: coupon.amount
    }
}
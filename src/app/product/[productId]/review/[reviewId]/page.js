'use client'

import { useRouter } from "next/navigation"

export default function ReviewProduct({ params }) {
    const router = useRouter();

    return <h1>Review {params.reviewId} for product {params.productId}</h1>
}
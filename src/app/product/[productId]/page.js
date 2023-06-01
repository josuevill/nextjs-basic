'use client'

import { useRouter } from "next/navigation"

export default function ProductDetails ({ params }) {
    const router = useRouter();

    return <h1>Detail of Product {params.productId}</h1>
}
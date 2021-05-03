import { graphql, useStaticQuery } from 'gatsby'
import { useEffect, useState } from 'react'
import useFetcher from './useFetcher'

type User = {
    name: string
    surname: string
    photo: {
        url: string
    }
}

type ApiTestimony = {
    id: number
    user: User
    comment: string
    stars: number
}

type Testimony = {
    id: number
    user: User
    comment: string
    stars: number[]
}

interface Data {
    api: {
        testimonies: Array<ApiTestimony>
    }
}

export default function useTestimony(): { testimony: Testimony[] } {
    const { data } = useFetcher<ApiTestimony[]>('/testimonies')

    const { api } = useStaticQuery<Data>(graphql`
        {
            api {
                testimonies {
                    comment
                    id
                    stars
                    user {
                        name
                        surname
                        photo {
                            url
                        }
                    }
                }
            }
        }
    `)

    function formatTestimonies(data: ApiTestimony[]) {
        return data.map(testimony => {
            const stars = []
            for (let star = 0; star < testimony.stars; star++) {
                stars.push(star)
            }
            return {
                ...testimony,
                stars
            }
        })
    }

    const [testimony, setTestimony] = useState<Testimony[]>(
        formatTestimonies(api.testimonies)
    )

    useEffect(() => {
        if (data) {
            setTestimony(formatTestimonies(data))
        }
    }, [data])

    return { testimony }
}

import { graphql, useStaticQuery } from 'gatsby'
import { useEffect, useMemo, useState } from 'react'
import { FieldColor } from '../components/ItemField'
import useFetcher from './useFetcher'

type Category = {
    id: number
    name: string
    image: {
        width: number
        height: number
        url: string
    }
}

interface Item extends Category {
    fieldColor: FieldColor
}

interface Data {
    api: {
        categories: Array<Category>
    }
}

interface Colors {
    pink: number[]
    yellow: number[]
    cyan: number[]
}

export default function useCategories(): { items: Item[] } {
    const { data } = useFetcher<Category[]>('/categories')

    const { api } = useStaticQuery<Data>(graphql`
        {
            api {
                categories {
                    id
                    image {
                        url
                        width
                        height
                    }
                    name
                }
            }
        }
    `)

    const [categories, setCategories] = useState<Category[]>(api.categories)

    useEffect(() => {
        if (data) {
            setCategories(data)
        }
    }, [data])

    const { items } = useMemo(() => {
        const items: Item[] = []

        function colorIndexes() {
            const colors: Colors = {
                pink: [0],
                yellow: [1],
                cyan: [2]
            }

            // mapping the object colors and push positions
            for (const index in Object.keys(colors)) {
                const key = Object.keys(colors)[index] as
                    | 'pink'
                    | 'cyan'
                    | 'yellow'

                for (const categoryIndex in categories) {
                    // example pink[0, 3, 6, ...]
                    colors[key].push(colors[key][categoryIndex] + 3)
                }
            }

            return { ...colors }
        }

        const { pink, yellow, cyan } = colorIndexes()

        // set fieldColor
        categories.forEach((category, index) => {
            for (let i = 0; i < pink.length; i++) {
                if (pink[i] === index) {
                    items.push({ ...category, fieldColor: 'pink' })
                }
                if (cyan[i] === index) {
                    items.push({ ...category, fieldColor: 'cyan' })
                }
                if (yellow[i] === index) {
                    items.push({ ...category, fieldColor: 'yellow' })
                }
            }
        })

        return { items }
    }, [api, categories])

    return { items }
}

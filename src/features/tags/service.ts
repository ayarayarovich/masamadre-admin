import { z } from 'zod'

import { axiosPrivate } from '@/common/network'
import type { GetListConfigWithSearch } from '@/common/types'

import { ListedTagScheme } from './schemes'

export type GetListConfig = GetListConfigWithSearch

export async function getList(config: GetListConfig) {
    const scheme = z.object({
        list: ListedTagScheme.array(),
        total: z.number()
    })
    const response = await axiosPrivate.get('admin/tags', {
        params: {
            offset: config.offset,
            limit: config.limit,
            search: config.search
        }
    })
    const data = scheme.parse(response.data)
    return data
}

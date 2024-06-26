<script setup lang="ts">
import { computed, inject } from 'vue'

import dateformat from '@/common/dateformat'

import MySkeleton from '@/components/MySkeleton.vue'

import { useOrder } from './composables'
import type { IOrder } from './interfaces'
import OrderStatusBadge from './OrderStatusBadge.vue'
import PaymentStatusBadge from './PaymentStatusBadge.vue'

const dialogRef = inject('dialogRef') as any
console.log(dialogRef.value.data)
const order = dialogRef.value.data.order as IOrder | undefined

const orderId = computed(() => order?.id)

const formatMoney = (money: number) => {
    return money.toFixed(2)
}

const { data, isSuccess } = useOrder(orderId)
</script>

<template>
    <div class="mt-4 flex flex-col items-stretch gap-4 text-black">
        <div class="flex items-end leading-none">
            <div>ID</div>
            <div class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"></div>
            <div>
                <template v-if="order?.id != undefined">{{ order.id }}</template>
                <template v-else>Нет данных</template>
            </div>
        </div>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>ID пользователя</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.user_id != undefined">{{ data.user_id }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Промокод</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.promo != undefined">{{ data.promo }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Телефон</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.phone != undefined">{{ data.phone }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Статус</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.status != undefined">
                        <OrderStatusBadge :code="data.status" />
                    </template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Полный адрес</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.full_adres != undefined">{{ data.full_adres }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Сумма заказа</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.price != undefined">{{ data.price }} ₽</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Стоимость доставки</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.delivery_price != undefined">
                        {{ data.delivery_price }} ₽
                    </template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Сдача</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.cashback != undefined">{{ data.cashback }} ₽</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Количество позиций</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.count_items != undefined">{{ data.count_items }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>ID ресторана</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.rest != undefined">{{ data.rest }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Способ оплаты</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.pay_type != undefined">
                        <PaymentStatusBadge :code="data.pay_type" />
                    </template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>R_KEEPER ID</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.rkeeper_id != undefined">{{ data.rkeeper_id }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>ID оплаты</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.payment_id != undefined">{{ data.payment_id }}</template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div class="flex items-end leading-none">
                <div>Дата создания</div>
                <div
                    class="mx-2 grow border-b-2 border-dotted border-black border-opacity-50"
                ></div>
                <div>
                    <template v-if="data.created_at != undefined">
                        {{ dateformat(data.created_at) }}
                    </template>
                    <template v-else>Нет данных</template>
                </div>
            </div>
        </MySkeleton>

        <MySkeleton :show-body="isSuccess" :skeleton="{}">
            <div v-if="data.basket && data.basket.length > 0" class="mt-10">
                <h2 class="section-header">Состав</h2>
                <div v-for="(v, i) in data.basket" :key="[v.name, i].join('-')" class="mb-2">
                    <div class="flex justify-between rounded-lg bg-gray-100 p-2">
                        <div class="flex items-center gap-2">
                            <img
                                class="h-14 w-14 rounded-lg shrink-0 bg-gray-200 border-2 border-gray-300 object-contain object-center"
                                :src="v.photo"
                                alt=""
                            />
                            {{ v.name }}
                        </div>
                        <div class="text-end">
                            <div>{{ v.count }}x{{ formatMoney(v.price) }}</div>
                            <div>={{ v.full_price }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </MySkeleton>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

import yup from '@/common/yup'

import MyInputSwitch from '@/components/MyInputSwitch.vue'
import MyInputText from '@/components/MyInputText.vue'

import { useSendNotification } from '@/features/users'

const { handleSubmit, errors } = useForm({
    validationSchema: (
        yup.object({
            title: yup.string().required().label('Заголовок'),
            text: yup.string().required().label('Тело'),
            email: yup.boolean().label('Электронная почта'),
            phone: yup.boolean().label('SMS')
        }) as any
    ).atLeastOneIsTrueOf([
        {
            key: 'email',
            label: 'Электронная почта'
        },
        {
            key: 'phone',
            label: 'SMS'
        }
    ]),
    initialValues: {
        phone: true
    }
})

const { mutate, isPending } = useSendNotification()

const onSubmit = handleSubmit((vals) => {
    mutate(vals)
})
</script>

<template>
    <form @submit="onSubmit">
        <h1 class="mb-6 text-xl font-bold">Разослать уведомления</h1>
        <MyInputText name="title" label="Заголовок" />

        <MyInputText name="text" label="Текст" />

        <small class="p-error mb-3 block">{{ errors[''] || '&nbsp;' }}</small>
        <MyInputSwitch name="email" label="Электронная почта" />
        <MyInputSwitch name="phone" label="SMS" />

        <Button
            class="mt-8 flex w-full items-center p-4"
            type="submit"
            label="Отправить"
            :loading="isPending"
            :disabled="isPending"
        />
    </form>
</template>

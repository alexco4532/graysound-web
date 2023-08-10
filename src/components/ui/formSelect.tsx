import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

type Plan = { name: string; index: number }

export default function FormSelect({ plans, selected, setSelect }: { plans: Plan[], selected: Plan, setSelect: (plan: Plan) => void }) {

    return (
        <div className="w-full mt-2">
            <div className="w-full">
                <RadioGroup value={selected} onChange={setSelect}>
                    <RadioGroup.Label className="sr-only">Project type</RadioGroup.Label>
                    <div className='flex flex-wrap justify-between gap-x-4 gap-y-5'>
                        {plans.map((plan, index) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className={`flex px-7 py-4 items-center justify-between border rounded-2xl bg-block lg:cursor-pointer  ${index === selected.index ? 'border-[#CC9852]' : 'border-[#1e1e31]'}`}>
                                            <RadioGroup.Label
                                                as="p"
                                                className={`font-medium text-base  ${index === selected.index ? 'text-[#CC9852] ' : 'text-white '}`}
                                            >
                                                {plan.name}
                                            </RadioGroup.Label>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}


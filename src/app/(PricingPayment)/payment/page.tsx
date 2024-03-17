"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import './payment.css'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'


const formSchema = z.object({
    fullName: z.string().min(3, {message: "Please enter your full name"}).max(50, {message: "Please enter a valid name"}),
    email: z.string().email({message: "Please enter a valid email"}),
    phoneNumber: z.string().min(10, {message: "Please enter a valid phone number"}),
})
const cardFormSchema = z.object({
    cardHolderName: z.string().min(8, {message: "Please enter your full name"}).max(50, {message:"Please enter a valid Name"}),
    cardNumber: z.string().min(8, {message: "Please enter a valid card number"}).max(20, {message:"Please enter a valid card number"}),
    expiryDate: z.string().min(5, {message: "Please enter a valid date"}).max(5, {message:"Please enter a valid date"}),
    cvv: z.string().min(3, {message: "Please enter a valid cvv"}).max(3, {message:"Please enter a valid cvv"}),
    check: z.boolean(),
    recurringPayment: z.boolean()
})

function Payment() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
        }
    })
    const cardForm = useForm<z.infer<typeof cardFormSchema>>({
        resolver: zodResolver(cardFormSchema),
        defaultValues: {
            cardHolderName: "",
            cardNumber: '',
            expiryDate: "",
            cvv: '',
            recurringPayment: false,
            check: false
        }
    })
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }
    const cardSubmit = (data: z.infer<typeof cardFormSchema>) => {
        console.log(data)
    }
  return (
    <div className='xl:px-[140px] md:px-10 px-5 justify-between w-full gap-[100px] pt-10 py-24 flex '>
        <div className='flex-1 flex  flex-col '>
            <div className='mb-10'>
                <span className='text-xs mb-7 text-[rgba(0,1,3,1)]'><span className='text-[rgba(0,1,3,0.6)]'>Home/Subscription/</span>Payment Page</span>
                <h1 className='text-[#000103] font-bold text-5xl mt-7'>Payment Page</h1>
            </div>
            <div className='flex flex-col max-w-[455px]'>
                <span className='text-[28292F] text-sm mb-6'>Product/Service Detials</span>
                <h1 className=' text-xl font-bold mb-3'>AI Website Generator</h1>
                <span className='mb-5'>Annual Plan | 1 Year Plan</span>
                <p  className='mb-1 text-[rgba(40,41,47,0.7)] text-sm'>Lorem ipsum dolor sit amet consectetur. Urna neque cursus faucibus diam. Sapien amet tempor at varius eu mauris sem. Turpis tristique laoreet non non porttitor vitae amet ultrices. Nulla purus et fringilla lacus at dignissim eu.</p>
                <span className='bg-[rgba(224,98,44,0.08)] rounded px-3 py-2 w-fit text-[#E0622C] text-[10px] font-semibold'>Discounted | 10% Off</span>
            </div>
            <div className='mt-14 max-w-[500px]'>
                <h1 className=' text-2xl mb-3 font-semibold'>Billing Address</h1>
                <span className='text-base text-[rgba(40,41,47,0.7)] '>Appointment that helps your business stay true</span>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 space-y-6'>
                    <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </form>
            </Form>
        
            </div>
        </div>
        <div className='flex-1'>
            <div >
                <span className='text-xs  text-[rgba(0,1,3,0.8)]'>
                    Payment Gateways
                </span>
                <div className='flex mt-10 gap-2'>
                    <div>
                        <img src="/images/mastercard-icon.svg" alt="mastercard icon" />
                    </div>
                    <div>
                        <img src="/images/visa-icon.svg" alt="visa icon" />
                    </div>
                    <div className=' w-20 p-4 h-12'>
                        <img src="/images/paypal-icon.svg" width={80} alt="paypal icon" />
                    </div>
                </div>
            </div>
            <div className=' max-w-md'>
                <Form {...cardForm}>
                    <form onSubmit={cardForm.handleSubmit(cardSubmit)} className='mt-6 space-y-6'>
                    <FormField
                        control={cardForm.control}
                        name="cardHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Card Holder Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={cardForm.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Card Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className='flex gap-2 w-full'>
                            <FormField
                            control={cardForm.control}
                            name="expiryDate"
                            render={({ field }) => (
                                <FormItem className='relative w-1/2'>
                                    <FormLabel className='absolute -top-[5px] left-[11px] bg-white flex gap-1 text-xs text-[#8F8F8F] p-1 '>Expire Date</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MM/YY" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={cardForm.control}
                            name="cvv"
                            render={({ field }) => (
                                <FormItem className='relative w-1/2'>
                                    <FormLabel className='absolute -top-[5px] left-[11px] bg-white flex gap-1 text-xs text-[#8F8F8F] p-1 '>CVV <img src="/images/cvv-info-icon.svg" alt="" /></FormLabel>
                                    <FormControl>
                                        <Input placeholder="CVV" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div>
                            <div className='flex gap-4'>
                                <img src="/images/cvv-info-icon.svg" alt="" />
                                <span className='text-[rgba(40,41,47,0.6)] text-sm'>Credit Card Payment may take up tp 24h to be processed</span>
                            </div>
                            <FormField
                            control={cardForm.control}
                            name="check"
                            render={({ field }) =>(

                                
                                <FormItem className=' '>
                                    <FormControl className=''>
                                        {/* <input type="checkbox"  id="" className='payment-checkbox mr-4' {...field}/>  */}
                                    </FormControl>
                                    <FormLabel className='text-sm'>Save my payment details for future purchase</FormLabel>

                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            {/* <label className='check-container flex gap-4 mt-4'>
                                <input type="checkbox" name="payment-checkbox" id="" className='payment-checkbox' />
                                <span className=' text-sm'>Save my payment details for future purchase</span>
                            </label> */}
                        </div>
                        <div>
                            <div className='flex items-center '>
                                <span className='text-sm mr-4 font-bold'>Enable Recurring Payments</span>
                                <span className='text-[10px] p-1 rounded-sm bg-[rgba(0,48,173,0.07)] text-[rgba(0,48,173,1)] '>Highly Recommended</span>
                                <div className='ml-auto'>
                                    <FormField
                                control={cardForm.control}
                                name="check"
                                render={({ field }) => (
                                    <FormItem className=' '>
                                        <FormControl className=''>
                                            {/* <div>
                                            <input type="checkbox"/>
                                            <span className="checkmark"></span>
                                            </div> */}
                                        {/* <input type="checkbox" className='toggle-checkbox ' {...field} /> */}
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                </div>
                            </div>
                            <div>
                                <span className='text-[rgba(1,3,1,1)] text-sm leading-6 '>Your subscription will renew automatically every year as one payment of 108.00 EUR. Cancel it anytime from your subscription settings. By clicking "Confirm and pay" you agree to the <a href='/' className='text-[rgba(0,48,173,1)] underline'> Terms and Conditions.</a></span>
                            </div>
                            <span className='flex gap-2 text-sm items-center mt-6'>
                                <ShieldCheck fill='black' color='white' /> Secure payment with SSL Encryption
                            </span>
                            <div>
                                <Separator className='mt-20 bg-[rgba(179,179,179,1)]' />
                                <h1 className='font-bold mt-7 mb-8'>Appointment Summary</h1>
                                <div className='flex justify-between'>
                                    <span className='text-[13px] text-[rgba(40,41,47,1)]'>Appointment fee</span>
                                    <span className='text-[14px] text-[rgba(40,41,47,1)] font-bold'>$9.99</span>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <span className='text-[13px] text-[rgba(40,41,47,1)]'>VAT (2%)</span>
                                    <span className='text-[14px]  text-[rgba(40,41,47,1)] font-bold'>$2.09</span>
                                </div>
                                <Separator className='mt-[30px] bg-[rgba(179,179,179,1)] mb-8' />
                                <div className='flex items-center justify-between'>
                                    <div className='flex flex-col'>
                                        <span className='text-base  text-[rgba(40,41,47,1)] font-bold'>Total:</span>
                                        <span className='text-[13px] text-[rgba(40,41,47,1)]'>(Incl. VAT)</span>
                                    </div>
                                    <div>
                                        <span className='text-xl text-[rgba(40,41,47,1)] font-bold'>$12.08</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Button type='submit' variant={"custom"} className='mt-12 w-full'>Confirm Payment</Button>
                    </form>
                </Form>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Payment
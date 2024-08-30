import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight, Check, Icon, Star } from "lucide-react";
import { Icons } from "@/src/components/Icons";
import { Reviews } from "@/src/components/Reviews";
import Creator from "@/src/components/Creator";
import { buttonVariants } from "@/src/components/ui/button";

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <section>
        <MaxWidthWrapper className="bg-gradient-to-r from-green-500 to-green-300 text-white h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Welcome to Joy's Enterprise the only plac where your Business can be on the Frontline of Everything
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          We help you market your business with ease and confidence
        </p>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              What our <span className='relative px-2'>customers <Icons.Underline className='hidden sm:block pointer-events-none absolute inset-x-0
              -bottom-6 text-green-500'/></span>{''} say
            </h2>
            <img src="/phone.jpg" className='w-24 order-0 lg:order-2' />
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "At first I was not sure nor did I place trust on this company because of the favourable prices being offered but with time My client grew 
                  and my product is being supplied not only within but also neighbouring counties.<span className='p-0.5 bg-slate-800 text-white'>My business profits have grown tremendously.</span>, all thanks to JOY'S ENTERPRISE"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img className='rounded-full h-12 w-12 object-cover' src="/users/user-0.png" alt="user"/>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
                <Star className='h-5 w-5 text-orange-500 fill-orange-400' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "If somebody else was to advise me on using a marketing company for my business exposure I would not believe but this marketing company proved me wrong.<span className='p-0.5 bg-slate-800 text-white'>Thanks to Joy's Enterprise </span>my company still stands strong"
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img className='rounded-full h-12 w-12 object-cover' src="/users/user-1.png" alt="user"/>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Nelson</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className='pt-16'>
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Book an appointment and {''}<span className='relative px-2 bg-green-600 text-white'>increase your products </span>sales
              </h2>
            </div>
          </div>

          <div className='relative h-80 md:h-full w-full max-w-sm mx-auto rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10
            lg:rounded-2xl flex items-center justify-center'>
              <img src="/bronchure-1.jpg" className='rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10 h-full w-full' alt='bronchure image'/>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              State of the art content creativity
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Your business on adverts
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Exposure on every social media platform
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Bringing your imagination into reality
            </li>
            
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
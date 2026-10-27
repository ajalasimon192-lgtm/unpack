import { useState } from 'react'
import hero from '../assets/images/testimonials.webp'
import review1 from '../assets/images/review1.webp'
import review2 from '../assets/images/review2.webp'

const reviews = [
    {
        image: review1,
        name: 'DAVID CRAIG',
        location: 'CHICAGO',
        quote:
        `All i can say is wow, This company's workers work efficiently and never gave me any worry over my things.`,
    },
    {
        image: review2,
        name: 'ELIZABETH WRIGHT',
        location: 'SEATTLE',
        quote:
        `They are really the best.`,
    },
    ]

    const Review = ({ review }) => (
    <div className="flex flex-col gap-3">
        <p className="text-[#FFC952] text-center lg:text-left" aria-label="5 out of 5 stars">
        ⭐⭐⭐⭐⭐
        </p>

        <p className="text-[16px] text-[#A7A7A7] text-center lg:text-left">{review.quote}</p>

        <div className="flex items-center gap-3 justify-center lg:justify-start">
        <img
            src={review.image}
            alt={`${review.name}, reviewer`}
            className="h-15.25 w-15.25 rounded-full object-cover"
        />
        <div className="flex flex-col justify-between">
            <p className="text-xl font-semibold text-[#FF5E41]">{review.name}</p>
            <p className="text-[#A7A7A7]">{review.location}</p>
        </div>
        </div>
    </div>
    )

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const changeReview = (direction) => {
        setActiveIndex(
        (currentIndex) =>
            (currentIndex + direction + reviews.length) % reviews.length,
        )
    }

    return (
        <div className="flex flex-col gap-6 px-4 md:px-13 md:flex-row lg:gap-15">
            <img
                src={hero}
                alt=""
                className="hidden md:inline h-72 w-full md:w-70 object-cover object-center md:h-96 lg:h-110 lg:w-101.25 lg:shrink-0"
            />

            <div className="relative w-full lg:min-h-110">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center md:self-start gap-6">
                        <hr className="w-21.5 text-[#FF5E41]" />
                        <p className="tracking-widest text-[#FF5E41] text-lg">TESTIMONIALS</p>
                    </div>

                    <h3 className="text-center md:text-left text-4xl font-semibold md:text-4xl lg:text-6xl">
                        OUR <span className="text-[#FF5E41]">HAPPY</span> CUSTOMERS
                    </h3>
                </div>

                {/* Slider for small and medium screens */}
                <div className='md:absolute md:bottom-0 md:-left-27 lg:-left-65 md:w-160 lg:w-300'>
                    <div className=" relative flex justify-between items-center md:w-full mt-6 bg-[#E9E9E9] lg:px-10 py-8 ">
                        <button
                            type="button"
                            onClick={() => changeReview(-1)}
                            aria-label="Previous review"
                            className='px-5 text-[#A7A7A7] hover:text-[#FF5E41] text-3xl h-fit'
                            // className="absolute left-2 top-1/2 -translate-y-1/2   px-10"
                        >
                            &lt;
                        </button>

                        <div>
                            <div key={activeIndex} aria-live="polite" className="mx-auto max-w-xl lg:hidden">
                                <Review review={reviews[activeIndex]} />
                            </div>

                            <div className='lg:flex gap-8 mx-25 hidden'>
                                {reviews.map((review) => (
                                    <div key={review.name} className="min-w-0 flex-1">
                                        <Review review={review} />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-center gap-2">
                                {reviews.map((review, index) => (
                                    <button
                                        key={review.name}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`Show review ${index + 1}`}
                                        aria-current={activeIndex === index ? 'true' : undefined}
                                        className={`h-1 rounded-full transition-all ${
                                            activeIndex === index
                                            ? 'w-10 bg-[#FF5E41]'
                                            : 'w-5 bg-[#C8C8C8]'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => changeReview(1)}
                            aria-label="Next review"
                            className='px-5 text-[#A7A7A7] hover:text-[#FF5E41] text-3xl h-fit'
                            // className="absolute right-2 top-1/2 -translate-y-1/2   px-10"
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Existing two-review layout for large screens */}
                {/* <div className="absolute bottom-0 left-0 hidden w-full gap-8 bg-[#E9E9E9] px-8 py-10 lg:-left-27 lg:flex lg:w-[calc(100%+6.75rem)] lg:px-17">
                    
                </div> */}
            </div>
        </div>
    )
    }

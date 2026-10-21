import { useState } from 'react'
import hero from '../assets/images/testimonials.jpg'
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'

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
        <p className="text-[#FFC952] md:text-center lg:text-left" aria-label="5 out of 5 stars">
        ⭐⭐⭐⭐⭐
        </p>

        <p className="text-[16px] text-[#A7A7A7] md:text-center lg:text-left">{review.quote}</p>

        <div className="flex items-center gap-3 md:justify-center lg:justify-start">
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
                className="h-72 w-full md:w-70 object-cover object-center md:h-96 lg:h-110 lg:w-101.25 lg:shrink-0"
            />

            <div className="relative w-full lg:min-h-110">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                        <hr className="w-21.5 text-[#FF5E41]" />
                        <p className="tracking-widest text-[#FF5E41]">TESTIMONIALS</p>
                    </div>

                    <h3 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
                        OUR <span className="text-[#FF5E41]">HAPPY</span> CUSTOMERS
                    </h3>
                </div>

                {/* Slider for small and medium screens */}
                <div className=" relative w-116 md:-left-10 md:-bottom-1.5 mt-6 bg-[#E9E9E9] px-10 py-8 lg:hidden">
                    <button
                        type="button"
                        onClick={() => changeReview(-1)}
                        aria-label="Previous review"
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-[#A7A7A7] hover:text-[#FF5E41]"
                    >
                        &lt;
                    </button>

                    <div key={activeIndex} aria-live="polite" className="mx-auto max-w-xl">
                        <Review review={reviews[activeIndex]} />
                    </div>

                    <button
                        type="button"
                        onClick={() => changeReview(1)}
                        aria-label="Next review"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-[#A7A7A7] hover:text-[#FF5E41]"
                    >
                        &gt;
                    </button>

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

                {/* Existing two-review layout for large screens */}
                <div className="absolute bottom-0 left-0 hidden w-full gap-8 bg-[#E9E9E9] px-8 py-10 lg:-left-27 lg:flex lg:w-[calc(100%+6.75rem)] lg:px-17">
                    {reviews.map((review) => (
                        <div key={review.name} className="min-w-0 flex-1">
                            <Review review={review} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    }

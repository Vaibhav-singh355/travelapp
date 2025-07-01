"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const allDestinations = [
  {
    name: "Jumeirah",
   
    
    image: "https://i.pinimg.com/236x/e5/69/88/e5698837d0c081eea9d5aa2c42532d58.jpg?h=1080&w=1620&revision=fe2ac22b-02b8-442b-8f8e-0faa35a7a961?height=300&width=400",
    category: "Adventure",
  },
  {
    name: "Lhw",
    
    
    image: "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/the-leading-hotels-of-the-world-57993008?height=300&width=400",
    category: "Beach",
  },
  
  {
    name: "Melia",
   
    image: "https://www.prensa-latina.cu/wp-content/uploads/2024/05/Melia-Hotels-International-Cuba-1.jpg?h=1400&q=80?height=300&width=400",
    category: "City",
  },
  {
    name: "Taj",
   
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/1200px-Taj_Hotels_logo.svg.png?w=480&auto=format&dpr=2?height=300&width=400",
    category: "Cultural",
  },
  {
    name: "Oberoi",
    country: "India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55zWndPgolKBzpZ_gbStRxcomainENMJlNQ&s?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Accor",
    country: "France",
    
    image: "https://static.wikia.nocookie.net/logopedia/images/c/cc/Accor_2019_%28flat_gold%29.svg/revision/latest/scale-to-width-down/250?cb=20240624001733?height=300&width=400",
    category: "City",
  },
  {
    name: "Marriott",
    country: "",
    
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhMiGYiZ0FFu1y85gft-7FnOVIXNlnzQyYQ&s?height=300&width=400",
    category: "Mountain",
  },
  {
    name: "Four Seasons",
    country: "Mexico",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Four_Seasons_logo.svg/1200px-Four_Seasons_logo.svg.png?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Hyatt",
    country: "Greece",
    image: "https://logowik.com/content/uploads/images/hyatt-hotels-corporation9011.jpg?height=300&width=400",
    category: "Romantic",
  },
  {
    name: "Ritz Carlton",
    country: "UAE",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a0/RitzCarlton.svg?height=300&width=400",
    category: "City",
  },
  
  
]

const categories = ["All", "Beach", "Mountain", "City", "Cultural", "Adventure", "Romantic"]
import { useRouter } from "next/navigation";

const HotelSlider = () => {
  const router=useRouter();
    const send=()=>{
      router.push("/destinations")
  
    }
    const contact=()=>{
      router.push("/form")
  
    }
   
  
    const [activeCategory, setActiveCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(0)
    const controls = useAnimation()
    const ref = useRef(null)
    const sliderRef = useRef(null)
    const inView = useInView(ref, { once: true, threshold: 0.1 })
  
    // Filter destinations based on active category
    const filteredDestinations =
      activeCategory === "All" ? allDestinations : allDestinations.filter((dest) => dest.category === activeCategory)
  
    // Calculate items per page based on screen size
    const getItemsPerPage = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) return 1 // Mobile
        if (window.innerWidth < 1024) return 3 // Tablet
        return 4 // Desktop
      }
      return 4 // Default
    }
  
    const itemsPerPage = getItemsPerPage()
    const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage)
  
    // Get current page items
    const getCurrentPageItems = () => {
      const startIndex = currentPage * itemsPerPage
      return filteredDestinations.slice(startIndex, startIndex + itemsPerPage)
    }
  
    // Handle category change
    useEffect(() => {
      setCurrentPage(0) // Reset to first page when category changes
    }, [activeCategory])
  
    // Animation controls
    useEffect(() => {
      if (inView) {
        controls.start("visible")
      }
    }, [controls, inView])
  
    // Navigation functions
    const nextPage = () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1)
      }
    }
  
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage((prev) => prev - 1)
      }
    }
  
    const goToPage = (pageIndex) => {
      setCurrentPage(pageIndex)
    }
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    }
  
    const pageVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
      exit: {
        opacity: 0,
        x: -100,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
    }
  
    const itemVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }
  
    return (
      <section className="bg-slate-50 py-10" ref={ref}>
        <div className="container">
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={controls }
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Assosiated Hotels</h2>
            <p className="mt-4 max-w-2xl text-gray-500">
              Stay at the best location with our partner hotels. Experience luxury and comfort like never before.
            </p>
          </motion.div>
  
         
          {/* Slider Container */}
          <div className="relative" ref={sliderRef}>
            {/* Slider Navigation - Previous */}
            <motion.button
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-200 rounded-full p-2 shadow-md ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              onClick={prevPage}
              disabled={currentPage === 0}
              whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
              whileTap={currentPage > 0 ? { scale: 0.9 } : {}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ChevronLeft className="h-6 w-6 text-teal-500" />
            </motion.button>
  
            {/* Slider Content */}
            <div className="overflow-hidden mx-2 md:mx-16 lg:mx-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 "
                >
                  {getCurrentPageItems().map((destination, index) => (
                    <motion.div
                      key={`${destination.name}-${index}`}
                      className="overflow-hidden rounded-lg shadow-md group bg-gray-200"
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="relative h-80 w-full overflow-hidden">
                        <motion.img
                          src={destination.image}
                          alt={destination.name}
                          className="object-cover w-full h-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-3 text-white">
                          <h3 className="text-lg font-bold">{destination.name}</h3>
                          
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
  
            {/* Slider Navigation - Next */}
            <motion.button
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
                currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ChevronRight className="h-6 w-6 text-teal-500" />
            </motion.button>
          </div>
  
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full ${currentPage === index ? "w-6 bg-teal-500" : "w-2 bg-gray-300"}`}
                onClick={() => goToPage(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
  
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.5 } },
            }}
          >
            
            <motion.button
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={contact}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
};

export default HotelSlider;
